import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router";

const Reset = ({ match }: { match: any }) => {
  const [password, setPassword] = useState("");

  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const token = match.params.token;

    await axios.post("http://localhost:7000/api/reset", {
      token,
      password,
      passwordConfirm,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <form onSubmit={submit} className="form-signin">
      <h1 className="h3 mb-3 fw-normal">Please Enter your Password</h1>

      <input
        type="password"
        className="form-control mb-3"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Confirm password"
        required
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Reset your password
      </button>
    </form>
  );
};

export default Reset;
