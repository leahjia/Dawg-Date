import React, { useState } from "react";
import NavBar from './NavBar.js';
import Search from './Search.js';
import { ProfileList } from './ProfileList.js';

export default function HomePage(props) {
    const [select, setSelect] = useState('')
    const [category, setCategory] = useState('')
    function applyFilter(val, cate) {
        setSelect(val)
        setCategory(cate)
    }
    const displayedData = props.profileData.filter(t => {
        if (select == '')
            return true
        else {
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
                <NavBar></NavBar>
            </header>
            <main>
                <Search profileData={props.profileData} applyFilterCallback={applyFilter} />
                <section className="profile-list">
                    <h1>People You May Know</h1>
                    <ProfileList profileData={displayedData} currentUser={props.currentUser}/>
                </section>
            </main>
        </div>
    )

}