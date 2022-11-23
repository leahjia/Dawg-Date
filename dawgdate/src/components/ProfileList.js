import React from 'react';
import { Link } from 'react-router-dom'; 


function ProfileCard(props) {
    const profileData = props.profileData;
    const userAge = (function(date) {
      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    })(profileData.birthdate);

    const handleConnect = function (event) {
      
    }
  
    return (
      <div className="profile">
        <Link to={"/:"+profileData.UWNetId}>
          <img src={"img/" + profileData.img} alt={profileData.name + " Profile Picture"} />
          <figcaption>Image from Unsplash</figcaption>
          <h2 class="profile-name">{profileData.name} | {userAge} ({profileData.pronouns})</h2>
          <p class="profile-description">{profileData.bio}</p>
        </Link>
        <button className="btn like-button" onClick={handleClick}>
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