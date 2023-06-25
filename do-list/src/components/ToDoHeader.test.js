import { render, screen } from "@testing-library/react";
import ToDoHeader from "./ToDoHeader";

// check element is p of given text
it("check element is p of given text", () => {
  render(<ToDoHeader text="hello" />);
  let element = screen.getByText(/hello/i);
  expect(element).toContainHTML("p");
});
