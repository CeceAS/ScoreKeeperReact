import React, { useState } from "react";
import AddPlayersContainer from "./AddPlayersContainer";

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
          🥳
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
      <section className="all-players_section">
        {allPlayers?.map((p) => {
          return (
            <section className="each-player_section" key={p.id}>
              <div className="row">
                <div className="delete-player_btn">
                  <button
                    onClick={() => deletePlayer(p.id)}
                    style={{
                      backgroundColor: p.color,
                      borderColor: p.color,
                      color: "white",
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="player-name_container">
                  <div
                    className="player-name"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.playerName}
                  </div>
                </div>
                <div className="score_container">
                  <div className="score-input_container">
                    <form onSubmit={(e) => handleScoreSubmit(e, p)}>
                      <input
                        className="score_input"
                        style={{ borderColor: p.color, color: p.color }}
                        type="number"
                        name="newScore"
                        value={p.newScore}
                        onChange={(e) => handleNewScore(e, p)}
                      ></input>
                      <button
                        type="submit"
                        className="add-score_btn"
                        style={{
                          backgroundColor: p.color,
                          borderColor: p.color,
                        }}
                      >
                        +
                      </button>
                    </form>
                  </div>
                  <div className="total-score_container">
                    <span className="bold small">Score</span>
                    <span className="total-score bold">{p.totalScore}</span>
                  </div>
                </div>
              </div>

              <div className="scores_container">
                <div>
                  <span className="bold small" style={{ marginRight: "8px" }}>
                    Scores:
                  </span>
                  <span className="scores-arr">{p.scores.join(", ")}</span>
                </div>
              </div>
            </section>
          );
        })}
      </section>

      <section className="winning-player_section">
        <h3>Who's Winning?</h3>
        <WinningPlayer />
      </section>
    </>
  );
}
