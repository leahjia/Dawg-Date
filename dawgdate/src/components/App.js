import React, { useState } from 'react';

import { Header } from './Header.js';
import { ProfileList } from './ProfileList.js';
import Footer from './Footer.js'
import LandingPage from './LandingPage.js';


export default function App(props) {
    const [currentUrl, setCurrentUrl] = useState('');
    const pages = ['landing', 'home'];
    const currentPage = 'landing';

    if (currentPage == pages[0]) {
      return <LandingPage />
    } else {
      return (
        <div>
          <Header />
          <ProfileList />
          <Footer />
        </div>
      )
    }
  }
  