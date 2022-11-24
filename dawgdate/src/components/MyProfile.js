import React from "react";

import NavBar from "./NavBar";
import SelfProfilePage from "./SelfProfilePage";

export default function MyProfile(props) {

	return (
		<div>
			<header className="navbar-bg">
        <NavBar/>
      </header>
			<main>
				<div className="profile-list">
					<h1>My Profile</h1>
                    <SelfProfilePage profileData={ props.profileData} />
				</div>
			</main>
		</div>
	)

}