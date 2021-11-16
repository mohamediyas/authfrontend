import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const Login = ({ setLogin }: { setLogin: Function }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [reDirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:7000/api/login", {
      email,
      password,
    });

    setRedirect(true);
    setLogin((prevstate: any) => !prevstate);
  };

  if (reDirect) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={submit} className="form-signin">
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="mb-3">
        <Link to="/forgot">Forgot Passworc</Link>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
