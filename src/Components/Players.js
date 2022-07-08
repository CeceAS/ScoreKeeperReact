import React, { useState } from "react";
import AddPlayersContainer from "./AddPlayersContainer";
import AllPlayersContainer from "./AllPlayersContainer";
import WinnerContainer from "./WinnerContainer";
import CalculateTotalScore from "../Functions/CalculateTotalScore";

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
  let showErrorMsg = false;
  let errorMsg;

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
    } else if (newPlayer.playerName.length === 0) {
      alert("You have to put in a player's name. Please try again!");
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
    CalculateTotalScore(player);
  };

  // delete a player
  function deletePlayer(p) {
    const players = allPlayers.filter((player) => player.id !== p);
    setAllPlayers(players);
  }

  // find currently winning player:
  const descScoresArray = [...allPlayers].sort(
    (a, b) => b.totalScore - a.totalScore
  );

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
      <WinnerContainer descScoresArray={descScoresArray} />
    </>
  );
}
