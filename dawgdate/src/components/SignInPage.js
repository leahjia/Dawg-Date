import React from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

import DEFAULT_USERS from '../profile-data.json';

export default function SignInPage(props) {
  const currentUser = props.currentUser;
  const loginFunction = props.loginCallback;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.UWNetId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    loginFunction(selectedUserObj)
  }

  const auth = getAuth();

  const uiConfigObj = {
    signInOptions: [ 
      { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }, 
      { provider: GoogleAuthProvider.PROVIDER_ID }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
  }

  if (currentUser.UWNetId) { //if I'm signed in
    console.log("current id: ", currentUser.UWNetId)
    return <Navigate to="/profile" />
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">

        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj} />

      </div>
    </div>
  )
}