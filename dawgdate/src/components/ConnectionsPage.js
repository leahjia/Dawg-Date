import React from "react";

import { ProfileList } from "./ProfileList.js";
import NavBar from "./NavBar.js";

export default function ConnectionsPage(props) {
	const currentUser = props.currentUser;

	const displayedData = props.profileData.filter((userProfile) => {
		// currentUser (from firebase) does not have a currentUserConnections prop
		return props.currentUserConnections ? props.currentUserConnections.includes(userProfile.UWNetId) : false
	})

	return (
		<div>
			<header className="navbar-bg">
				<NavBar />
			</header>
			<main>
				<div className="profile-list">
					<h1>My Connections</h1>
					<ProfileList profileData={displayedData} currentUser={props.currentUser} currentUserConnections={props.currentUserConnections} handleConnectionCallback={props.handleConnectionCallback} />
				</div>
			</main>
		</div>
	)

}