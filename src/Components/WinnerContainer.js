import React from "react";

export default function WinnerContainer(props) {
  // display currently winning player:
  function WinningPlayer() {
    const winner = props.descScoresArray[0];

    if (props.descScoresArray.length > 0)
      return (
        <h2>
          <span
            className="winner-title winner-name"
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
          <span className="text">is winning with a score of</span>
          <span
            className="winner-title winner-score"
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
      <h3>Who's Winning?</h3>
      <section className="winning-player_section">
        <WinningPlayer />
      </section>
    </>
  );
}
