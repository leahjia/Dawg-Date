import React, { useState } from "react";

export default function Search(props) {
    const [select, setSelect] = useState('')

    const handleSelect = (event) => {
        setSelect(event.target.value)
    }
    const uniMajors = [...new Set(props.profileData.map(p => p.major))]
    const majorElems = uniMajors.map((major) => {
        return <option key={major} value={major}>{major}</option>
    })
    const uniGenders = [...new Set(props.profileData.map(p => p.gender))]
    const genderElems = uniGenders.map((gender) => {
        return <option key={gender} value={gender}>{gender}</option>
    })
    const uniHometowns = [...new Set(props.profileData.map(p => p.hometown))]
    const hometownElems = uniHometowns.map((hometown) => {
        return <option key={hometown} value={hometown}>{hometown}</option>
    })

    return (
        <section className="search-container">

            <div className="search-bar">
                <input type="search" id="search-input" placeholder="Search profile names here" />
                <button className="search-button" aria-label="Search">Search</button>
            </div>
            <div className="filter-group">
                <select id="teamSelect" className="filter" aria-label="major-filter" value={select} onChange={handleSelect}>
                    <option value="" >Major</option>{majorElems}</select>
                <select id="teamSelect" className="filter" aria-label="major-filter" value={select} onChange={handleSelect}>
                    <option value="" >Gender</option>{genderElems}</select>
                <select id="teamSelect" className="filter" aria-label="major-filter" value={select} onChange={handleSelect}>
                    <option value="" >Area</option>{hometownElems}</select>
            </div>
        </section>
    )
}