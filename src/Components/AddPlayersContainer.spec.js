import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AddPlayersContainer from "./AddPlayersContainer";

describe("<AddPlayersContainer/>", () => {
  test("player name input exist", () => {
    render(<AddPlayersContainer newPlayer={{ playerName: "Jack" }} />);
    const playerNameInput = screen.queryByTestId("player-name");

    expect(playerNameInput).toBeInTheDocument();

    // add a couple vlues and make sure they sum correctly
  });
});
