import React from "react";

export default function NavBar(props) {
    return (
        <nav>
            <div className="navbar">
                <a href="index.html">
                    {/* <img src="img/logo.png" className="logo"> */}
                    <h1 className="name">DawgDate</h1>
                </a>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">CONNECTIONS</a></li>
                    <li><a href="">CHAT</a></li>
                    <li><a href="personalprofile.html">MY PROFILE</a></li>
                </ul>
            </div>
        </nav>
    )

}