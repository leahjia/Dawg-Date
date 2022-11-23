import React from "react";

export default function HomePage(props) {
    <section className="search-container">
    <div className="search-bar">
        <input type="search" id="search-input" placeholder="Search profile names here" />
        <button className="search-button" aria-label="Search">Search</button>
    </div>
    <div className="filter-group">
        <button className="filter" aria-label="all-filter">All</button>
        <button className="filter" aria-label="major-filter">Same Major</button>
        <button className="filter" aria-label="interest-filter">Same Interest</button>
        <button className="filter" aria-label="age-filter">Same Age</button>
    </div>
</section>

}