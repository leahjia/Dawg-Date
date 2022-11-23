import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import SelfProfilePage from './SelfProfilePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';
import ConnectionsPage from './ConnectionsPage.js';

export default function App(props) {
  // hard coded user
  const [currentUser, setCurrentUser] = useState(props.profileData[0]);

  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<HomePage profileData={props.profileData} currentUser={currentUser}/>} />
        <Route path="/profile" element={<OtherProfilePage currentUser={currentUser}/>} />
        <Route path="/connections" element={<ConnectionsPage profileData={props.profileData} currentUser={currentUser}/>} />
        <Route path="/:username" element={<OtherProfilePage currentUser={currentUser}/>} />
      </Routes>
      <Footer/>
    </div>

  )

}
