import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import SelfProfilePage from './SelfProfilePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';


export default function App(props) {

  return (
    <div>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<SelfProfilePage />} />
        <Route path="/:username" element={<OtherProfilePage />} />
      </Routes>
      <Footer />
    </div>

  )

}
