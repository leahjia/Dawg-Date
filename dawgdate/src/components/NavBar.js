import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar(props) {

    let navLinks;

    if (props.variant === 'landing') {
        navLinks = (
          <ul>
            <li><Link to="/home">LOGIN</Link></li>
          </ul>
        )
    } else {
        navLinks = (
          <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/connections">CONNECTIONS</Link></li>
            <li><Link to="/profile">MY PROFILE</Link></li>
            <li><Link to="/">LOG OUT</Link></li>
          </ul>
        )
    }

    return (
      <nav>
        <div className="navbar">
          <Link to="/home">
            <img src="img/logo.png" className="logo" />
            <h1 className="name">DawgDate</h1>
          </Link>
          {navLinks}
        </div>
      </nav>
    )
}