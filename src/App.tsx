import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./Components/Nav";
import axios from "axios";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/user");

        const user = response.data;

        setUser(user);

        console.log(response);
      } catch (error) {
        setUser(null);
      }
    })();
  }, [login]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav setLogin={setLogin} user={user} />
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route path="/login" component={() => <Login setLogin={setLogin} />} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/reset/:token" component={Reset} />
      </BrowserRouter>
    </div>
  );
}

export default App;
