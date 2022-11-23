import React from "react";
import NavBar from './NavBar.js';
import Search from './Search.js';
import { ProfileList } from './ProfileList.js';

export default function HomePage(props) {
    return (
        <div>
			<header className="navbar-bg">
				<NavBar></NavBar>
			</header>

			<main>
				<section className="search-container">
					<Search></Search>
				</section>
				<section className="profile-list">
					<h1>People You May Know</h1>
					<ProfileList></ProfileList>
				</section>
			</main>
        </div>
    )

}