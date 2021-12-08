import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

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
  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for Submitting the form!";
    } else {
      return "Welcome, Please Submit the Form";
    }
  };

  return (
    <div>
      <form className="" onSubmit={createUser}>
        <h3 className="text-2xl font-bold">{formMessage()}</h3>
        <div className="flex justify-between">
          <label className="pt-4">First Name: </label>
          <input
            className="form-input appearance-none rounded border-double m-2 "
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="pt-4">Last Name: </label>
          <input
            className="form-input appearance-none rounded border-double m-2 "
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="pt-4">Email Address: </label>
          <input
            className="form-input rounded m-2"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="pt-4">Password: </label>
          <input
            className="form-input rounded m-2"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <label className="pt-4">Confirm Password: </label>
          <input
            className="form-input rounded m-2"
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
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
