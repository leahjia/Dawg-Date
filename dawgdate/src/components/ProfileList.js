import React from 'react';
import profile_data from '../profile-data.json';

function ProfileCard(props) {
    const theName = props.profiledata.name;
    const theDescript = props.profiledata.description;
  
    let cssProfiles = "card col-6"; 
    if(props.nowShowing) { //logic!
      cssProfiles += " bg-warning bg-gradient"
    }
  
    return (
      <div className={cssProfiles}>
        <img src={"/"+props.profiledata.img} alt="person picture" />
        <h3>{theName}: {theDescript}</h3>
      </div>
    )
  }
  
  export function ProfileList(props) {
  
    const componentArray = profile_data.map((profileObj) => {
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