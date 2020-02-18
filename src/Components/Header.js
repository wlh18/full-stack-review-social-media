import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-header">
      <div>
        <Link to="/dash">Dashboard</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
