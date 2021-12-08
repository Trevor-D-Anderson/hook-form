import React, { useState } from "react";

const regexEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
const regexPassword = new RegExp(
  /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/
);

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setHasBeenSubmitted(true);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2 && e.target.value.length > 0) {
      setFirstNameError("First Name must be 2 or more characters");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2 && e.target.value.length > 0) {
      setLastNameError("Last Name must be 2 or more characters");
    } else {
      setLastNameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (regexEmail.test(e.target.value)) {
      setEmailError("");
    } else if (e.target.value < 1) {
      setEmailError("");
    } else {
      setEmailError("Email must be valid");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (regexPassword.test(e.target.value)) {
      setPasswordError("");
    } else if (e.target.value < 1) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must be more than 8 characters and contain 1 of Each of the following: Lowercase letter, Uppercase Letter, Number"
      );
    }
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1 || e.target.value === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Passwords Must Match");
    }
  };
  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for Submitting the form!";
    } else {
      return "Welcome, Please Submit the Form";
    }
  };

  return (
    <div className="max-w-md">
      <form className="" onSubmit={createUser}>
        <h3 className="text-2xl font-bold">{formMessage()}</h3>
        <div className="flex justify-between">
          <label className="pt-4">First Name: </label>
          <input
            className="form-input appearance-none rounded border-double m-2 "
            type="text"
            value={firstName}
            onChange={handleFirstName}
          />
        </div>
        {firstNameError ? <p>{firstNameError}</p> : null}
        <div className="flex justify-between">
          <label className="pt-4">Last Name: </label>
          <input
            className="form-input appearance-none rounded border-double m-2 "
            type="text"
            value={lastName}
            onChange={handleLastName}
          />
        </div>
        {lastNameError ? <p>{lastNameError}</p> : null}
        <div className="flex justify-between">
          <label className="pt-4">Email Address: </label>
          <input
            className="form-input rounded m-2"
            value={email}
            type="text"
            onChange={handleEmail}
          />
        </div>
        {emailError ? <p>{emailError}</p> : null}
        <div className="flex justify-between">
          <label className="pt-4">Password: </label>
          <input
            className="form-input rounded m-2"
            value={password}
            type="password"
            onChange={handlePassword}
          />
        </div>
        {passwordError ? <p className="break-words">{passwordError}</p> : null}
        <div className="flex justify-between">
          <label className="pt-4">Confirm Password: </label>
          <input
            className="form-input rounded m-2"
            value={confirmPassword}
            type="password"
            onChange={handleConfirmPassword}
          />
        </div>
        {confirmPasswordError ? <p>{confirmPasswordError}</p> : null}
        <button
          className="w-28 border shadow-md rounded bg-gray-200 hover:bg-gray-100"
          type="submit"
        >
          Create User
        </button>
      </form>
      <div>
        <h2 className="text-xl mt-4">First Name: {firstName}</h2>
        <h2 className="text-xl mt-4">Last Name: {lastName}</h2>
        <h2 className="text-xl mt-4">Email: {email}</h2>
        <h2 className="text-xl mt-4">Password: {password}</h2>
        <h2 className="text-xl mt-4">Confirm Password: {confirmPassword}</h2>
      </div>
    </div>
  );
};

export default UserForm;
