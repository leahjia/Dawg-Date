import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function NavBar(props) {
  const currentUser = props.currentUser;

  let navLinks;
  // let hardCodedUser = { "UWNetId": "person1", "name": "Wayne", "gender": "Male", "pronouns": "he/him", "bio": " If you’re looking for a guy who will sweetly kiss your forehead and hold your hand, I’m not your guy.", "birthdate": "2001-05-23", "hometown": "Bellevue, WA", "major": "Biology", "profile-pic": "person-1.avif", "connections": ["person2", "person3"], "img": "/img/person-1.avif" };

  const handleLogin = function () {
    console.log("current user object: ", currentUser)
    // props.handleLoginCallback(hardCodedUser)
    // props.handleConnectionsCallback(hardCodedUser.connections)
    props.handleLoginCallback(currentUser)
    props.handleConnectionsCallback(currentUser.connections)
  }

  const handleSignOut = (event) => {
    console.log("signing out");
    signOut(getAuth());
  }

  if (props.variant === 'landing') {
    navLinks = (
      <ul>
        {/* <li onClick={handleLogin}><NavLink className="nav-link" to="/home">LOGIN</NavLink></li> */}
        <li onClick={handleLogin}><NavLink className="nav-link" to="/signin">LOGIN</NavLink></li>
      </ul>
    )
  } else {
    navLinks = (
      <ul>
        <li><NavLink
          className={"nav-link " + (({ isActive }) => isActive ? "active" : undefined)}
          to="/home">HOME</NavLink></li>
        <li><NavLink
          className={"nav-link " + (({ isActive }) => isActive ? "active" : undefined)}
          to="/connections">CONNECTIONS</NavLink></li>
        <li><NavLink
          className={"nav-link " + (({ isActive }) => isActive ? "active" : undefined)}
          to="/profile">MY PROFILE</NavLink></li>
        {/* {currentUser.UWNetId &&
          <> */}
            <li><NavLink
              className={"nav-link " + (({ isActive }) => isActive ? "active" : undefined)}
              to="/"><button className="btn" onClick={handleSignOut}>LOG OUT</button></NavLink></li>
          {/* </>
        } */}
        {/* {!currentUser.UWNetId && */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              {/* <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} /> */}
            </NavLink>
          </li>
        {/* } */}
      </ul>
    )
  }

  return (
    <nav>
      <div className="navbar">
        <Link to="/home">
          <img src="/img/logo.png" alt="logo" className="logo" />
          <h1 style={{ display: 'inline', marginLeft: '1rem' }} className="name">DawgDate</h1>
        </Link>
        {navLinks}
      </div>
    </nav>
  )
}