import React, { useState } from "react";
import NavBar from './NavBar.js';
import Search from './Search.js';
import { ProfileList } from './ProfileList.js';

export default function HomePage(props) {
  const currentUser = props.currentUser;
  const [input, setInput] = useState('')
  const [genderSelect, setSelect] = useState('')
  const [majorSelect, setSelect2] = useState('')
  const [hometownSelect, setSelect3] = useState('')
  const [category, setCategory] = useState('')
  const [category2, setCategory2] = useState('')
  const [category3, setCategory3] = useState('')
  function applyFilter(val, cate) {
    setSelect(val)
    setCategory(cate)
    setSelect2(val)
    setCategory2(cate)
    setSelect3(val)
    setCategory3(cate)
  }

  let displayedData = props.profileData.filter(t => {

    // currentUser(from firebase) does not have a currentUserConnections prop
    
    if (props.currentUserConnections) { 
      if (currentUser.UWNetId === t.UWNetId || props.currentUserConnections.includes(t.UWNetId)) {
        return false;
      } else if (input !== '') {
        return input === t.name
      } else if (majorSelect === '') {
        return true;
      } else if (genderSelect === '') {
        return true;
      } else if (hometownSelect === '') {
        return true;
      } else {
        if (category === "majorSelect")
          return t.major === majorSelect
        else if (category2 === "genderSelect")
          return t.gender === genderSelect
        else if (category3 === "hometownSelect")
          return t.hometown === hometownSelect
      }
    }
    return null;
  })

  function applySearch(i) {
    setInput(i)
    displayedData = props.profileData.filter(t => {
      return i === t.name
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