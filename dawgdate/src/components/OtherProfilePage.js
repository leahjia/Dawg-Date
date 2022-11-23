import React from "react";

import NavBar from "./NavBar.js";

export default function OtherProfilePage(props) {
	const person = props.profileData
	return (
		<div>
			<header className="navbar-bg">
				<NavBar />
			</header>
			<div className="snippet-body">

				<div className="row py-5 px-4"><div className="col-md-5 mx-auto"><div className="bg-white shadow rounded overflow-hidden">
					<div className="px-4 pt-0 pb-4 cover"><div className="media align-items-end profile-head">
							<div className="profile mr-3">
								<img src="img/person-1.avif" alt="..." width="130" className="rounded mb-2 img-thumbnail" />
								<a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
							</div>{" "}
							<div className="media-body mb-5 text-white">
								<h4 className="mt-0 mb-0">Wayne Little</h4>
								<p className="small mb-4">
									<i className="fas fa-map-marker-alt mr-2"></i>Seattle
								</p>
							</div>
						</div>
					</div>
					<div className="bg-light p-4 d-flex justify-content-end text-center">
						<ul className="list-inline mb-0">
							<li className="list-inline-item">
								<h5 className="font-weight-bold mb-0 d-block">4</h5>
								<small className="text-muted">
									<i className="fas fa-image mr-1"></i>Photos
								</small>
							</li>
							<li className="list-inline-item">
								<h5 className="font-weight-bold mb-0 d-block">30</h5>
								<small className="text-muted">
									<i className="fas fa-user mr-1"></i>Connections
								</small>
							</li>
							<li className="list-inline-item">
								<h5 className="font-weight-bold mb-0 d-block">He/Him</h5>
								<small className="text-muted">
									<i className="fas fa-user mr-1"></i>Pronouns
								</small>
							</li>
						</ul>
					</div>
					<div className="px-4 py-3">
						<h5 className="mb-0">About</h5>
						<div className="p-4 rounded shadow-sm bg-light">
							<p className="font-italic mb-0">24 Years Old</p>
							<p className="font-italic mb-0">
								Masters In Mechanical Engineering
							</p>
							<p className="font-italic mb-0">Gamer | Guitarist</p>
							<p className="font-italic mb-0">Interested in Women</p>
						</div>
						<div className="mb-0">
							<h5>Bio</h5>
							<p className="font-italic mb-0">Tall Enough For You</p>
							<p className="font-italic mb-0">
								Looking to meet someone to go on hikes with and take the
								award for cringest couple.
							</p>
						</div>
						<div className="py-4 px-4">
							<div className="d-flex align-items-center justify-content-between mb-3">
								<h5 className="mb-0">Photos</h5>
								<a href="#" className="btn btn-link text-muted">
									Show all
								</a>
							</div>
							<div className="row">
								<div className="col-lg-6 mb-2 pr-lg-1">
									<img
										src="img/engineering-online-mechanical-29Apr2019.jpeg"
										alt=""
										className="img-fluid rounded shadow-sm"
									/>
								</div>
								<div className="col-lg-6 mb-2 pl-lg-1">
									<img
										src="img/w-day.jpeg"
										alt=""
										className="img-fluid rounded shadow-sm"
									/>
								</div>
								<div className="col-lg-6 pr-lg-1 mb-2">
									<img
										src="img/gaming_setup.avif"
										alt=""
										className="img-fluid rounded shadow-sm"
									/>
								</div>
								<div className="col-lg-6 pl-lg-1">
									<img
										src="img/man_singing.jpg"
										alt=""
										className="img-fluid rounded shadow-sm"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				</div>
			</div>
		</div>

	);
}