import React from "react";

export default function AddPlayersContainer(props) {
  return (
    <section className="add-players_section">
      <form onSubmit={props.handleSubmit}>
        <div>
          <input
            data-testid="player-name"
            type="text"
            placeholder="Player's Name"
            name="playerName"
            value={props.newPlayer.playerName}
            onChange={props.handleChange}
            className="player-name_input"
          />
        </div>

        <div className="color-picker_container">
          <h5>Choose your color:</h5>
          <input
            type="color"
            id="color-picker"
            name="color"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input
            className="submit-btn"
            disabled={!props.newPlayer.playerName}
            type="submit"
          />
        </div>
      </form>
    </section>
  );
}
