import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let data = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };

    const response = await axios.post(
      "http://localhost:7000/api/register",
      data
    );

    setRedirect(true);

    console.log(response);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <form onSubmit={submit} className="form-signin">
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>

      <input
        type="text"
        className="form-control"
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <input
        type="text"
        className="form-control"
        placeholder="secound name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password Confirm"
        required
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
