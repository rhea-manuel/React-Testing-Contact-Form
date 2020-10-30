import React from "react";
import { render, fireEvent, waitFor, screen, getNodeText, getByText, getByTestId } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import userEvent from "@testing-library/user-event";

let emailInput
let firstnameInput
let lastnameInput 
let messageInput



test("Make sure all form elements have correct labelled inputs", () => {
  render(<App />)

  emailInput = screen.getByLabelText(/email/i)
  firstnameInput = screen.getByLabelText(/first name/i)
  messageInput = screen.getByLabelText(/message/i)
  lastnameInput = screen.getByLabelText(/last name/i)
})

test ("Form validation is correct", () => {

  render(<App/>)

  fireEvent.change(emailInput, {target: {value: 'notanemail'}})
  expect(emailInput.value).toBe('notanemail')
  fireEvent.click(messageInput)
  fireEvent.keyDown(document,{ key: 'Enter', code: 'Enter' })

  
  const errorMsg = getByTestId(document, "email")
  
})