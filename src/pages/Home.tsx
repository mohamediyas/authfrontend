import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ user }: { user: any }) => {
  let message;

  if (user) {
    message = `Hi ${user.firstName} ${user.lastName}`;
  } else {
    message = "You are not logged in";
  }

  return (
    <div className="container">
      <h1>{message}</h1>
    </div>
  );
};

export default Home;
