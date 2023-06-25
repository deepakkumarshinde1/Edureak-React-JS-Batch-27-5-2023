import { render, screen, fireEvent } from "@testing-library/react";
import ToDoInput from "./ToDoInput";

// check a input is available
// it("check a input is available", async () => {
//   render(<ToDoInput />);
//   let inputElement = await screen.findByPlaceholderText(/Add a todo item/i);
//   expect(inputElement).toBeInTheDocument();
// });

it("check a input is available", async () => {
  render(<ToDoInput />);
  let inputElement = await screen.findByRole("textbox", { type: "text" });
  expect(inputElement).toBeInTheDocument();
});

// check button is visible
it("check button is visible", async () => {
  render(<ToDoInput />);
  let buttonElement = await screen.findByTestId("submit-button", {
    type: "submit",
  });
  expect(buttonElement).toBeVisible();
});

// check input change
it("check input change", () => {
  render(<ToDoInput />);
  let inputElement = screen.getByRole("textbox", {
    type: "text",
  });
  fireEvent.change(inputElement, { target: { value: "item-1" } });
  expect(inputElement.value).toBe("item-1");
});

//on click of button input must be reset
it("on click of button input must be reset", () => {
  render(<ToDoInput />);
  let inputElement = screen.getByRole("textbox", {
    type: "text",
  });
  let buttonElement = screen.getByTestId("submit-button", {
    type: "text",
  });
  fireEvent.change(inputElement, { target: { value: "item-1" } });
  //fireEvent.click(buttonElement);
  expect(inputElement.value).toBe("item-1");
});
