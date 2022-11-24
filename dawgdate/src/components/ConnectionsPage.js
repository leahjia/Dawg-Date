import React from "react";
import { Navigate } from 'react-router-dom';

import { ProfileList } from "./ProfileList";
import NavBar from "./NavBar";

export default function ConnectionsPage(props) {
	const currentUser = props.currentUser;

	const displayedData = props.profileData.filter((userProfile) => {
		if (currentUser.connections.includes(userProfile.UWNetId)) {
			return true;
		} else {
			return false;
		}
	})

	return (
		<div>
			<header className="navbar-bg">
        <NavBar/>
      </header>
			<main>
				<div className="profile-list">
					<h1>My Connections</h1>
					<ProfileList profileData={displayedData} currentUser={props.currentUser} handleConnectionCallBack={props.handleConnectionCallback}/>
				</div>
			</main>
		</div>
	)

}