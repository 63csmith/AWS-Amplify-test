import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Header({ signOut }) {
  return (
    <React.Fragment>
      <header className="bg-image">
        <h1>FilmHUB</h1>
        <h2>Placeholder for home page header</h2>
        <button onClick={signOut}>Get Started</button>
      </header>
    </React.Fragment>
  );
}

export default withAuthenticator(Header);
