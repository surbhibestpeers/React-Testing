import {fireEvent, render , screen }  from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from '../Login'

describe("Test the login component", ()=> {
  
  test("render the login form with 2 buttons", async()=> {
   render(<Login/>);
   const buttonList = await screen.findAllByRole("button");
   expect(buttonList).toHaveLength(2);
  });  


test("Test should be failed on email validation",()=> {
  const testEmail = "surbhi.com";
  expect(validateEmail(testEmail)).not.toBe(true)
});

test("email input field should accept email", ()=> {
  render(<Login/>);
  const email = screen.getByPlaceholderText("Enter email");
  userEvent.type(email, "surbhi");
  expect(email.value).not.toMatch("surbhi22@gmail.com")
});

test("password input field should accept type password", ()=> {
  render(<Login/>)
  const password = screen.getByPlaceholderText("Password");
  expect(password).toHaveAttribute("type", "password")
});

test("should display alert if error", ()=> {
  render(<Login/>)
  const email = screen.getByPlaceholderText("Enter email");
  const password = screen.getByPlaceholderText("Password");
  const buttonList = screen.getAllByRole("button")

  userEvent.type(email, "surbhi");
  userEvent.type(password, "123456");
  userEvent.click(buttonList[0]);
  const error = screen.getByText("Email is not valid");
  expect(error).toBeInTheDocument();
});

test("should be able to reset the form", async ()=> {
  const {getByLabelText, getByTestId} = render(<Login/>);
  const resetBtn = getByTestId("reset");
  const emailInputNode = getByLabelText("Email");
  const passwordInputNode = getByLabelText("Password");
  fireEvent.click(resetBtn);
  expect(emailInputNode.value).toMatch("");
  expect(passwordInputNode.value).toMatch("");
});

test("should be able to submit the form", ()=> {
  const component = render(<Login/>)
  const email = screen.getByPlaceholderText("Enter email");
  const password  = screen.getByPlaceholderText("Password");
  const btnList = screen.getAllByRole("button")

  userEvent.type(email, "surbhi22@gmail.com");
  userEvent.type(password, "123456");
  userEvent.click(btnList[0]);

  const user = screen.getByText("surbhi22@gmail.com");
  expect(user).toBeInTheDocument();
});

})