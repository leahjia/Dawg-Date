import React from 'react';
import profile_data from '../profile-data.json';

function ProfileCard(props) {
    const theName = props.profiledata.name;
    const theDescript = props.profiledata.bio;
  
    let cssProfiles = "card col-4"; 
    if(props.nowShowing) { //logic!
      cssProfiles += " bg-warning bg-gradient"
    }
  
    return (
      <div className={cssProfiles}>
        <img src={"img/"+props.profiledata.img} alt="person picture" />
        <h3>{theName}: {theDescript}</h3>
      </div>
    )
  }
  
  export function ProfileList(props) {
  
    const componentArray = props.userData.map((profileObj) => {
      const component = (
        <ProfileCard 
          profiledata={profileObj} 
          key={profileObj.name}
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