import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';
import ConnectionsPage from './ConnectionsPage.js';
import MyProfile from './MyProfile.js';
import SignInPage from './SignInPage.js';

import SAMPLE_PROFILES from '../profile-data.json';

export default function App(props) {
  // hard coded user
  const [currentUser, setCurrentUser] = useState(SAMPLE_PROFILES[0]) //default to null user
  const [currentUserConnections, setCurrentUserConnections] = useState(null);

  console.log("rendering app with", currentUser);

  const navigateTo = useNavigate(); //navigation hook

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log("logged in as", firebaseUser.displayName);
        console.log("firebaseUser print: ", firebaseUser);
        firebaseUser.UWNetId = firebaseUser.uid
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png"

        setCurrentUser(firebaseUser);
      } else {
        console.log("logged out");
        setCurrentUser(SAMPLE_PROFILES[0]);
      }
    })
  }, []) //array is list of variables that will cause this to rerun if changed
  const loginUser = (userObj) => {
    console.log("logging in as", userObj.UWNetId);
    setCurrentUser(userObj);
    if (userObj.UWNetId !== null) {
      navigateTo('/home');
    }
  }


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
        <Route index element={<LandingPage currentUser={currentUser} handleLoginCallback={setCurrentUser} handleConnectionsCallback={setCurrentUserConnections} />} />
        <Route path="/signin" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />
        <Route element={<RequireAuth currentUser={currentUser} />}>
          <Route path="/home" element={<HomePage profileData={props.profileData} currentUser={currentUser} currentUserConnections={currentUserConnections} handleConnectionCallback={handleConnection} />} />
          <Route path="/profile" element={<MyProfile currentUser={currentUser} />} />
          <Route path="/connections" element={<ConnectionsPage profileData={props.profileData} currentUser={currentUser} currentUserConnections={currentUserConnections} handleConnectionCallback={handleConnection} />} />
          <Route path="/user/:UWNetId" element={<OtherProfilePage profileData={props.profileData} currentUser={currentUser} />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )

}

function RequireAuth(props) {
  if (props.currentUser.UWNetId === null) {
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