import React from "react";

export default function AllPlayersContainer(props) {
  return (
    <section className="all-players_section">
      {props.allPlayers?.map((p) => {
        return (
          <section className="each-player_section" key={p.id}>
            <div className="row">
              <div className="mobile-row">
                <div className="delete-player_btn">
                  <button
                    onClick={() => props.deletePlayer(p.id)}
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
              </div>
              <div className="score_container">
                <div className="score-input_container">
                  <form onSubmit={(e) => props.handleScoreSubmit(e, p)}>
                    <input
                      data-testid="new-score"
                      className="score_input"
                      style={{ borderColor: p.color, color: p.color }}
                      type="number"
                      name="newScore"
                      value={p.newScore}
                      onChange={(e) => props.handleNewScore(e, p)}
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
  );
}
