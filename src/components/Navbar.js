import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Student Dashboard</a>
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}