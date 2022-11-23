import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';
import ConnectionsPage from './ConnectionsPage.js';

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
    setCurrentUserConnections(newConnections);
  }

  const loggedIn = currentUser != null;

  return (
    <div>
      <Routes>
        <Route index element={<LandingPage handleLoginCallback={setCurrentUser}/>} />
        <Route path="/home" element={<HomePage profileData={props.profileData} currentUser={currentUser} handleConnectionCallBack={setCurrentUser}/>} />
        <Route path="/profile" element={<SelfProfilePage currentUser={currentUser}/>} />
        <Route path="/connections" element={<ConnectionsPage profileData={props.profileData} currentUser={currentUser} handleConnectionCallBack={handleConnection}/>} />
        <Route path="/:username" element={<OtherProfilePage currentUser={currentUser}/>} />
      </Routes>
      <Footer/>
    </div>

  )

}
