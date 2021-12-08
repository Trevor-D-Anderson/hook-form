import React, { useState } from "react";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    console.log("Welcome", newUser);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form className="" onSubmit={createUser}>
        <div className="flex justify-between">
          <label className="pt-4">Username: </label>
          <input
            className="form-input appearance-none rounded border-double m-2 "
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button
          className="w-28 border shadow-md rounded bg-gray-200 hover:bg-gray-100"
          type="submit"
        >
          Create User
        </button>
      </form>
      <div>
        <h2>Username: {username}</h2>
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
      </div>
    </div>
  );
};

export default UserForm;
