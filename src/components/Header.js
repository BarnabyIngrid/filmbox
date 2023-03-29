import React from "react";
// this would allow us to create nav links
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Film Box</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
