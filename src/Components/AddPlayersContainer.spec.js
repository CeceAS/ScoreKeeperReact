import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddPlayersContainer from "./AddPlayersContainer";

describe("<AddPlayersContainer/>", () => {
  test("pass valid name to test input field", () => {
    render(<AddPlayersContainer />);
    screen.debug();
    //     const playerNameInput = screen.getByTestId("player-name");
    //     userEvent.type(playerNameInput, "jack");

    //     expect(screen.getByTestId("player-name")).toHaveValue("jack");
  });
});
