import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AllPlayersContainer from "./AllPlayersContainer";

describe("<AllPlayersContainer/>", () => {
  test("check that player section doesn't exist", () => {
    render(<AllPlayersContainer />);
    const playerSection = screen.queryByTestId("each-player-section");
    expect(playerSection).not.toBeInTheDocument();
  });
});
