import React from "react";

export default function WinnerContainer(props) {
  // display currently winning player:
  function WinningPlayer() {
    const winner = props.descScoresArray[0];

    if (props.descScoresArray.length > 0)
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
    <section className="winning-player_section">
      <h3>Who's Winning?</h3>
      <WinningPlayer />
    </section>
  );
}
