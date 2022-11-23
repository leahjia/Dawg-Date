import React from 'react';

import NavBar from './NavBar.js';

export default function LandingPage(props) {

	return (
		<div>
			<div className='landing'>
				<NavBar variant='landing'/>
				<main>
					<div className="container">
						<h1 className="welcome">Welcome to a <em>better</em> dating experience for University of Washington Students</h1>
						<a className="create-account" href="">Create account</a>
					</div>
				</main>
			</div>
			<LandingAbout />
		</div>

	)
}

function LandingAbout(props) {

	return(
		<section className="about">
			<h2>About DawgDate</h2>
			<div className="about-container">
				<div className="about-card">
					<div className="card-image-bg">
						<img src="img/lock.png" className="about-image" />
					</div>
					<p>DawgDate provides a secure platform exclusively for University of Washington students to safely meet eachother.</p>
				</div>
				<div className="about-card">
					<div className="card-image-bg">
						<img src="img/search.png" className="about-image" />
					</div>
					<p>DawgDate is a platform that focuses on <em>you</em>. Save time and find others based on your own preferences.</p>
				</div>
			</div>
		</section>
	)
}