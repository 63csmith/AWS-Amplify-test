import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-image">
        <h1>FilmHUB</h1>
        <h2>Placeholder for home page header</h2>
        <Link to="/">Sign In!</Link>
      </header>
    </React.Fragment>
  );
};

export default Header;
