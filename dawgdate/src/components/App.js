import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { deleteUser, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set as firebaseSet, get, onValue, remove } from 'firebase/database';

import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import OtherProfilePage from './OtherProfilePage.js';
import Footer from './Footer.js';
import ConnectionsPage from './ConnectionsPage.js';
import MyProfile from './MyProfile.js';
import SignInPage from './SignInPage.js';
import EditForm from './EditForm.js';

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(null) //default to null user
  const [userList, setUserList] = useState(null);

  console.log("rendering app with", currentUser);

  const navigateTo = useNavigate(); //navigation hook

  const db = getDatabase();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userRef = ref(db, 'userData/'+firebaseUser.uid)
        get(userRef)
          .then((response) => {
            console.log("this is the currentUser " + response.val());
            setCurrentUser(response.val());
          })
      } else {
        console.log("logged out");
        setCurrentUser(null);
      }
    })
    const userListRef = ref(db, 'userData');
    onValue(userListRef, ((snapshot) => {
      console.log('running')
      const userEntries = Object.entries(snapshot.val());
      const userList = userEntries.map((entry) => {
        return entry[1];
      })
      console.log(userList);
      setUserList(userList);
    }))
  }, []) //array is list of variables that will cause this to rerun if changed


  const handleConnection = function (connectee) {
    const newConnections = [...currentUser.connections];

    if (currentUser.connections.includes(connectee)) {
      newConnections.splice(newConnections.indexOf(connectee), 1);
    } else {
      newConnections.push(connectee);
    }
  }

  const sendRequest = function (connectee) {
    firebaseSet(ref(db, 'userData/' +currentUser.uid+'/sentConnections/'+connectee), true);
    firebaseSet(ref(db, 'userData/' +connectee+'/receivedConnections/'+currentUser.uid), true);
    
  }

  const acceptRequest = function (connectee) {
    firebaseSet(ref(db, 'userData/' +currentUser.uid+'/receivedConnections/'+connectee), null);
    firebaseSet(ref(db, 'userData/' +connectee+'/sentConnections/'+currentUser.uid), null);
    firebaseSet(ref(db, 'userData/' +currentUser.uid+'/connections/'+connectee), true);
    firebaseSet(ref(db, 'userData/' +connectee+'/connections/'+currentUser.uid), true);
  }

  const removeConnection = function (connectee) {
    firebaseSet(ref(db, 'userData/' +connectee+'/connections/'+currentUser.uid), null);
    firebaseSet(ref(db, 'userData/' +currentUser.uid+'/connections/'+connectee), null);
  }

  return (
    <div>
      <Routes>
        <Route index element={<LandingPage currentUser={currentUser} />} />
        <Route path="/signin" element={<SignInPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route element={<RequireAuth currentUser={currentUser} />}>
          <Route path="/home" element={<HomePage profileData={userList} currentUser={currentUser} sendRequest={sendRequest} />} />
          <Route path="/profile" element={<MyProfile currentUser={currentUser} />} />
          <Route path="/connections" element={<ConnectionsPage profileData={userList} currentUser={currentUser} acceptRequest={acceptRequest} removeConnection={removeConnection}/>} />
          <Route path="/user/:UWNetId" element={<OtherProfilePage profileData={userList} currentUser={currentUser} />} />
          <Route path="/edit" element={<EditForm currentUser={currentUser}/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )

}

function RequireAuth(props) {
  if (props.currentUser === null) {
    return <Navigate to="/" />
  } else {
    return <Outlet />
  }
}

export function getUser (userList, userString) {
  const person = userList.filter((userProfile) => {
    if (userString === userProfile.UWNetId) {
      return true;
    } else {
      return false;
    }
  })[0];
  return person;
}