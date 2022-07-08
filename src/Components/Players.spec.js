import Players from "./Players";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Players", () => {
  it("does not allow multiple users with same name", () => {
    render(<Players />);
    //type a name in a user input

    const addPlayerInput = screen.getByTestId("player-name");
    const submitBtn = screen.getByTestId("submitBtn");

    userEvent.type(addPlayerInput, "Chuck");
    userEvent.click(submitBtn);

    userEvent.type(addPlayerInput, "Chuck");
    userEvent.click(submitBtn);

    const elem = screen.getByText(
      "Player exists. Please choose a different name!"
    );
    expect(elem).toBeInTheDocument();
  });
});
