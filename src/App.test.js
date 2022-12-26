import { render, screen } from "@testing-library/react";
import App from "./App";


describe("Test the App Component", () => {
  test("header renders with react testing tutorial in the document", () => {
    render(<App/>);
    const linkElement = screen.getByText(/React Testing/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in document", () => {
    const { getByLabelText } = render(<App/>);
    const childElement = getByLabelText("Email");
    expect(childElement).toBeTruthy();
  });
});