import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="mx-auto shadow rounded mx-auto w-50 px-3 py-5 my-5 ">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control w-75"
          placeholder="username"
        />
      </div>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control w-75"
          placeholder="password"
        />
      </div>
      <div className="mb-3 form-check">
        <Link to="/register">Don't have an account.</Link>
      </div>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-primary" onClick={signInUsingGoogle}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
