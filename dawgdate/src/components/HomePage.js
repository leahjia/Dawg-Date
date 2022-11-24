import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import NavBar from './NavBar.js';
import Search from './Search.js';
import { ProfileList } from './ProfileList.js';

export default function HomePage(props) {
  const currentUser = props.currentUser;
  const [input, setInput] = useState('')
  const [select, setSelect] = useState('')
  const [category, setCategory] = useState('')
  function applyFilter(val, cate) {
    setSelect(val)
    setCategory(cate)
  }

  const displayedData = props.profileData.filter(t => {
    if (currentUser.UWNetId === t.UWNetId || props.currentUserConnections.includes(t.UWNetId)) {
        return false;
    } else if (input !== '') {
        return input == t.name
    } else if (select == '') {
        return true;
    } else {
        if (category == "majorSelect")
            return t.major == select
        else if (category == "genderSelect")
            return t.gender == select
        else if (category == "hometownSelect")
            return t.hometown == select
    }
  })

    function applySearch(i) {
      setInput(i)
      displayedData = props.profileData.filter(t => {
          return i == t.name
      })
    }

  return (
    <div>
      <header className="navbar-bg">
        <NavBar />
      </header>
      <main>
        <Search profileData={props.profileData} applyFilterCallback={applyFilter} applySearchCallback={applySearch} />
        <div className="profile-list">
          <h1>People You Might Know</h1>
          <ProfileList profileData={displayedData} currentUser={props.currentUser} currentUserConnections={props.currentUserConnections} handleConnectionCallback={props.handleConnectionCallback} />
        </div>
      </main>
    </div>
  )

}