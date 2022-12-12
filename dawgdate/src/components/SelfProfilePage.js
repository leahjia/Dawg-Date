import React from "react";
import { useNavigate } from "react-router-dom";

export default function SelfProfilePage(props) {
  const person = props.currentUser;

  const selfImg = [
    "img/engineering-online-mechanical-29Apr2019.jpeg",
    "img/w-day.jpeg",
    "img/gaming_setup.avif",
    "img/man_singing.jpg",
  ];
  const photoElems = selfImg.map((image, index) => {
    return (
      <div key={index} className="col-lg-6 mb-2 pr-lg-1">
        <img src={image} alt={index} className="img-fluid rounded shadow-sm" />
      </div>
    );
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "./EditForm.js";
    navigate(path);
  };

  return (
    <div>
      <div className="snippet-body">
        <div className="row py-5 px-4">
          <div className="col-md-5 mx-auto">
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-head">
                  <div className="profile mr-3">
                    <img
                      src={person.img}
                      alt={person.name}
                      width="130"
                      className="rounded mb-2 img-thumbnail"
                    />
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-md btn-block"
                      onClick={routeChange}
                    >
                      Edit profile
                    </a>
                  </div>{" "}
                  <div className="media-body mb-5 text-white">
                    <h4 className="mt-0 mb-0">{person.name}</h4>
                    <p className="small mb-4">{person.hometown}</p>
                  </div>
                </div>
              </div>
              <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">4</h5>
                    <small className="text-muted">Photos</small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {person.connections.length}
                    </h5>
                    <small className="text-muted">Connections</small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {person.pronouns}
                    </h5>
                    <small className="text-muted">Pronouns</small>
                  </li>
                </ul>
              </div>
              <div className="px-4 py-3">
                <h5 className="mb-0">About</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                  <p className="font-italic mb-0">{person.birthdate}</p>
                  <p className="font-italic mb-0">{person.major}</p>
                </div>
                <div className="mb-0">
                  <h5>Bio</h5>
                  <p className="font-italic mb-0">{person.bio}</p>
                </div>
                <div className="py-4 px-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Photos</h5>
                    <a href="#" className="btn btn-link text-muted">
                      Show all
                    </a>
                  </div>
                  <div className="row object-fit: cover">{photoElems}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
