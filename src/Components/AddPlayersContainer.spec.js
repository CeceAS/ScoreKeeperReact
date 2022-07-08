import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AddPlayersContainer from "./AddPlayersContainer";

// describe("<AddPlayersContainer/>", () => {
//   test("pass valid name to test input field", () => {
//     render(<AddPlayersContainer />);
//     screen.debug();
//     //     const playerNameInput = screen.getByTestId("player-name");
//     //     userEvent.type(playerNameInput, "jack");

//     //     expect(screen.getByTestId("player-name")).toHaveValue("jack");
//   });
// });

describe("<AddPlayersContainer/>", () => {
  test("player name input exist", () => {
    render(<AddPlayersContainer />);
    const playerNameInput = screen.queryByTestId("player-name");

    expect(playerNameInput).toBeInTheDocument();
  });
});
