import React, { useState } from "react";
import AddPlayersContainer from "./AddPlayersContainer";
import AllPlayersContainer from "./AllPlayersContainer";

export default function Players() {
  const [newPlayer, setNewPlayer] = useState({
    id: (Date.now() + "").slice(-10),
    playerName: "",
    color: "#f29f33",
    scores: [],
    totalScore: 0,
  });

  const [allPlayers, setAllPlayers] = useState([]);
  const [newScore, setNewScore] = useState("");

  // add player:
  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    setNewPlayer((values) => ({ ...values, [name]: value.toUpperCase() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allNames = allPlayers.map((p) => p.playerName);

    if (allNames.includes(newPlayer.playerName)) {
      alert("Player exists. Please choose a different name");

      return;
    } else {
      setAllPlayers((prev) => {
        setNewPlayer({
          id: (Date.now() + "").slice(-10),
          playerName: "",
          color: "#f6b73c",
          scores: [],
          totalScore: 0,
        });

        return [...prev, newPlayer];
      });
    }
  };

  //Add a new score:

  const handleNewScore = (e) => {
    e.preventDefault();
    const addThisScore = e.target.value;
    setNewScore(addThisScore);
  };

  const handleScoreSubmit = function (e, player) {
    e.preventDefault();
    // FIX: not going blank
    setNewScore("");

    player.scores.push(+newScore);
    calcTotalScore(player);
  };

  // calculate total score:
  function calcTotalScore(player) {
    const totalScore = player.scores.reduce((acc, score) => acc + score, 0);
    return (player.totalScore = totalScore);
  }

  //delete player:
  const deletePlayer = function (p) {
    const players = allPlayers.filter((player) => player.id !== p);
    setAllPlayers(players);
  };

  // find currently winning player:
  const descScoresArray = [...allPlayers].sort(
    (a, b) => b.totalScore - a.totalScore
  );

  // display currently winning player:
  function WinningPlayer() {
    const winner = descScoresArray[0];

    if (descScoresArray.length > 0)
      return (
        <h2>
          <span
            className="winner-title"
            style={{
              color: winner.color,
              background: winner.color,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {winner.playerName}
          </span>
          is winning with a score of
          <span
            className="winner-title"
            style={{
              color: winner.color,
              background: winner.color,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {winner.totalScore}
          </span>
          🎉
        </h2>
      );
  }

  return (
    <>
      <AddPlayersContainer
        handleSubmit={handleSubmit}
        newPlayer={newPlayer}
        handleChange={handleChange}
      />
      <AllPlayersContainer
        allPlayers={allPlayers}
        deletePlayer={deletePlayer}
        handleScoreSubmit={handleScoreSubmit}
        handleNewScore={handleNewScore}
      />

      <section className="winning-player_section">
        <h3>Who's Winning?</h3>
        <WinningPlayer />
      </section>
    </>
  );
}
