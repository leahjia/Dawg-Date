import React from "react";
import SelfProfilePage from './SelfProfilePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import Search from './Search.js';
import { ProfileList } from './ProfileList.js';

export default function HomePage(props) {
    <section className="search-container">
        <div className="search-bar">
            <input type="search" id="search-input" placeholder="Search profile names here" />
            <button className="search-button" aria-label="Search">Search</button>
        </div>
        <div className="filter-group">
            <button className="filter" aria-label="all-filter">All</button>
            <button className="filter" aria-label="major-filter">Same Major</button>
            <button className="filter" aria-label="interest-filter">Same Interest</button>
            <button className="filter" aria-label="age-filter">Same Age</button>
        </div>
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

    </section>

}