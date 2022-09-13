import React, { Component } from "react";

// Stateless Functional Component

const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-secondary badge-pill">{totalCount}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
