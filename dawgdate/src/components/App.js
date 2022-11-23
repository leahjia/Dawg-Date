import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import SelfProfilePage from './SelfProfilePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';

import USERS from '../profile-data.json';


export default function App(props) {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<HomePage profileData={props.profileData} />} />
        <Route path="/profile" element={<SelfProfilePage />} />
        <Route path="/:username" element={<OtherProfilePage />} />
      </Routes>
      <Footer />
    </div>

  )

}
