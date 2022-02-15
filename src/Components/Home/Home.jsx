import React from "react";
import useAuth from "./../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Home Component.</h1>
      <h3>{user.displayName}</h3>
    </div>
  );
};

export default Home;
