import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import SelfProfilePage from './SelfProfilePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import Search from './Search.js';
import { ProfileList } from './ProfileList.js';


export default function App(props) {

  return (
    <div classNameName="container">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<SelfProfilePage />} />
        <Route path="/:username" element={<OtherProfilePage />} />
      </Routes>

      <main>
        <section>
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
        </section>
      </main>
      <Footer></Footer>

    </div>
  )

}
