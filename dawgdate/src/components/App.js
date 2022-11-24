import React, { useState } from 'react';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';
import ConnectionsPage from './ConnectionsPage.js';
import MyProfile from './MyProfile.js';

import SAMPLE_PROFILES from '../profile-data.json';

export default function App(props) {
  // hard coded user
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserConnections, setCurrentUserConnections] = useState(null);

  const handleConnection = function (connectee) {
    const newConnections = [...currentUserConnections];
    if (currentUserConnections.includes(connectee)) {
      newConnections.splice(newConnections.indexOf(connectee), 1);
    } else {
      newConnections.push(connectee);
    }
    console.log(newConnections);
    setCurrentUserConnections(newConnections);
  }

  return (
    <div>
      <Routes>
        <Route index element={<LandingPage handleLoginCallback={setCurrentUser} handleConnectionsCallback={setCurrentUserConnections} />} />
        <Route element={<RequireAuth currentUser={currentUser}/>}>
          <Route path="/home" element={<HomePage profileData={props.profileData} currentUser={currentUser} currentUserConnections={currentUserConnections} handleConnectionCallback={handleConnection}/>} />
          <Route path="/profile" element={<MyProfile currentUser={currentUser}/>} />
          <Route path="/connections" element={<ConnectionsPage profileData={props.profileData} currentUser={currentUser} currentUserConnections={currentUserConnections} handleConnectionCallback={handleConnection}/>} />
          <Route path="/user/:UWNetId" element={<OtherProfilePage profileData={props.profileData} currentUser={currentUser}/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )

}

function RequireAuth(props) {
  if(props.currentUser == null) {
    return <Navigate to="/" />
  } else {
    return <Outlet />
  }
}

export function getUser(userString) {
  const person = SAMPLE_PROFILES.filter((userProfile) => {
		if (userString === userProfile.UWNetId) {
			return true;
		} else {
			return false;
		}
	})[0];
  return person;
}