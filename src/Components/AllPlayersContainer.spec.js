import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AllPlayersContainer from "./AllPlayersContainer";

describe("<AllPlayersContainer/>", () => {
  test("pass valid number to input field", () => {
    render(<AllPlayersContainer />);
    screen.debug();
    // const playerScoreInput = screen.getByTestId("new-score");
    // userEvent.type(playerScoreInput, "25");

    // expect(screen.getByTestId("new-score")).toHaveValue("25");
  });
});
