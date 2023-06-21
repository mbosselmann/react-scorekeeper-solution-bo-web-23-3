import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input labelText="Name of game" placeholder="e. g. Monopoly" name="game" />
  );

  const input = screen.getByLabelText("Name of game");
  expect(input).toHaveAttribute("placeholder", "e. g. Monopoly");
  expect(input).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  const mockFunction = jest.fn();

  const user = userEvent.setup();

  render(
    <Input
      labelText="Name of game"
      placeholder="e. g. Monopoly"
      name="game"
      onChange={mockFunction}
    />
  );

  const input = screen.getByLabelText("Name of game");

  await user.type(input, "abcde");

  expect(mockFunction).toHaveBeenCalledTimes(5);
});
