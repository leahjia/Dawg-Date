import React from 'react';
import { Link } from 'react-router-dom';


function ProfileCard(props) {

  const currentUser = props.currentUser;
  const profileData = props.profileData;
  const userAge = function (date) {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }(profileData.birthdate);

  console.log(props.currentUserConnections);

  let heartColor = 'grey';
  if (props.currentUserConnections.includes(profileData.UWNetId)) {
    heartColor = 'red';
  }

  const handleConnect = function (event) {
    const userString = event.currentTarget.getAttribute('user');
    console.log(userString);
    props.handleConnectionCallback(userString);
  }

  return (
    <div className="profile">
      <Link to={"/user/" + profileData.UWNetId}>
        <img src={profileData.img} alt={profileData.name} />
        <figcaption>Image from Unsplash</figcaption>
        <h2 className="profile-name">{profileData.name} | {userAge} ({profileData.pronouns})</h2>
      </Link>
      <p className="profile-description">{profileData.bio}</p>
      <button user={profileData.UWNetId} className="btn like-button" onClick={handleConnect}>
        <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
      </button>
    </div>
  )
}

export function ProfileList(props) {

  const componentArray = props.profileData.map((profileObj) => {
    const component = (
      <ProfileCard
        profileData={profileObj}
        currentUser={props.currentUser}
        currentUserConnections={props.currentUserConnections}
        handleConnectionCallback={props.handleConnectionCallback}
        key={profileObj.UWNetId}
      />
    )
    return component;
  })

  return (
    <div className="row">
      {componentArray}
    </div>
  )
}