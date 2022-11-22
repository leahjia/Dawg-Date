import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import SelfProfilePage from './SelfProfilePage.js';
import OtherProfilePage from './OtherProfilePage.js';


export default function App(props) {

  return(
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<SelfProfilePage />} />
      <Route path="/:username" element={<OtherProfilePage />} />
    </Routes>
  )

  }
  