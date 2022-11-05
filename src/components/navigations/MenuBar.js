import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

import "./MenuBar.css";

function MenuBar({ signOut }) {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="home/">
          FilmHUB
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Form">Upload New Project</a>
          </li>
          <li>
            <a href="/AboutUs">About Us</a>
          </li>
          <li>
            <a href="/ContactUS">Contact Us</a>
          </li>
          <li>
            <a onClick={signOut}>Sign Out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withAuthenticator(MenuBar);
