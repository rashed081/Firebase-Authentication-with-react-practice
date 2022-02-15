import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navbar flex justify-content-center bg-warning">
      <Link to="/" className="mx-2 ">
        Home
      </Link>

      <Link to="/shipping" className="mx-2">
        Shipping
      </Link>
      <Link to="/place-order" className="mx-2">
        Place Order
      </Link>
      {!user?.email && (
        <div>
          <Link to="/login" className="mx-2">
            Login
          </Link>
          <Link to="/register" className="mx-2 ">
            Register
          </Link>
        </div>
      )}

      {user?.email && (
        <button onClick={logOut} className="btn btn-primary">
          Log Out
        </button>
      )}
      <span>{user.displayName}</span>
    </div>
  );
};

export default Header;
