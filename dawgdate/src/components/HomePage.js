import React, { useState } from "react";
import NavBar from './NavBar.js';
import Search from './Search.js';
import { ProfileList } from './ProfileList.js';

export default function HomePage(props) {
	const currentUser = props.currentUser;
    const [select, setSelect] = useState('')
    const [category, setCategory] = useState('')
    function applyFilter(val, cate) {
        setSelect(val)
        setCategory(cate)
    }
    const displayedData = props.profileData.filter(t => {
		if (currentUser.UWNetId === t.UWNetId || currentUser.connections.includes(t.UWNetId)) {
			  return false;
		} else if (select == '') {
        return true;
		} else {
        if (category == "majorSelect")
          return t.major == select
        else if (category == "genderSelect")
          return t.gender == select
        else if (category == "hometownSelect")
          return t.hometomn == select
        }
    })

    return (
      <div>
        <header className="navbar-bg">
          <NavBar />
        </header>
        <main>
          <Search profileData={props.profileData} applyFilterCallback={applyFilter} />
				  <div className="profile-list">
				  	<h1>Possible Connections</h1>
				  	<ProfileList profileData={displayedData} currentUser={props.currentUser}/>
          </div>
        </main>
      </div>
    )

}