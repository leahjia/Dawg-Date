import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  let navLinks;
  let hardCodedUser = { "UWNetId": "person1", "name": "Wayne", "gender": "Male", "pronouns": "he/him", "bio": " If you’re looking for a guy who will sweetly kiss your forehead and hold your hand, I’m not your guy.", "birthdate": "2001-05-23", "hometown": "Bellevue, WA", "major": "Biology", "profile-pic": "person-1.avif", "connections": ["person2", "person3"], "img": "/img/person-1.avif" };

  const handleLogin = function () {
    props.handleLoginCallback(hardCodedUser)
    props.handleConnectionsCallback(hardCodedUser.connections)
  }

  if (props.variant === 'landing') {
    navLinks = (
      <ul>
        <li onClick={handleLogin}><Link to="/home">LOGIN</Link></li>
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
          <img src="img/logo.png" alt="logo" className="logo" />
          <h1 className="name">DawgDate</h1>
        </Link>
        {navLinks}
      </div>
    </nav>
  )
}