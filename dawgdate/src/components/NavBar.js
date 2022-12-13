import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';


const navToggle = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar ul");

navToggle.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
});

export default function NavBar(props) {
  const currentUser = props.currentUser;
  let navLinks;

  // const handleLogin = function () {
  //   props.handleLoginCallback(currentUser)
  // }

  const handleSignOut = (event) => {
    console.log("signing out");
    signOut(getAuth());
  }

  if (props.variant === 'landing') {
    navLinks = (
      <ul>
        {/* <li onClick={handleLogin}><NavLink className="nav-link" to="/home">LOGIN</NavLink></li> */}
        <li><NavLink className="nav-link" to="/signin">LOGIN</NavLink></li>
      </ul>
    )
  } else if (props.variant === 'signin') {
    navLinks = (
      <ul>
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
         <li><NavLink
          className={"nav-link " + (({ isActive }) => isActive ? "active" : undefined)}
          to="/edit">EDIT PROFILE</NavLink></li>
        <li><NavLink
          className={"nav-link " + (({ isActive }) => isActive ? "active" : undefined)}
          to="/"><button className="btn" onClick={handleSignOut}>LOG OUT</button></NavLink></li>
      </ul>
    )
  }

  return (
    <nav>
      <div className="navbar">
        <button className="hamburger">&#9776;</button>
        <Link to="/home">
          <img src="/img/logo.png" alt="logo" className="logo" />
          <h1 style={{ display: 'inline', marginLeft: '1rem' }} className="name">DawgDate</h1>
        </Link>
        {navLinks}
      </div>
    </nav>
  );
}