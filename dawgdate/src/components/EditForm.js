import React, { useState } from "react";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth';
import { getDatabase, onValue, ref as dbRef, set as firebaseSet } from 'firebase/database';

import NavBar from './NavBar.js';

export default function EditForm(props) {
  const currentUser = props.currentUser
  const [name, setName] = useState(currentUser.name);
  const [hometown, setHometown] = useState(currentUser.hometown);
  const [birthdate, setBirthdate] = useState(currentUser.birthdate);
  const [major, setMajor] = useState(currentUser.major);
  const [about, setAbout] = useState(currentUser.about);
  const [bio, setBio] = useState(currentUser.bio);
  const [pronouns, setPronouns] = useState(currentUser.pronouns);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesubmig: ", currentUser.uid)
    const aboutRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "about")
    firebaseSet(aboutRef, about);
    const bioRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "bio")
    firebaseSet(bioRef, bio);
    const nameRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "name")
    firebaseSet(nameRef, name);
    const hometownRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "hometown")
    firebaseSet(hometownRef, hometown);
    const birthdateRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "birthdate")
    firebaseSet(birthdateRef, birthdate);
    const majorRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "major")
    firebaseSet(majorRef, major);
    const pronounsRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "pronouns")
    firebaseSet(pronounsRef, pronouns);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5 className="mb-0">About</h5>
        <div className="p-4 rounded shadow-sm bg-light">
          {props.editing ? (
            <>
              <input
                className="font-italic m-3 mb-5 block px-4"
                type="text"
                placeholder="Add your introduction here"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></input>
              <div>
              </div>
            </>
          ) : ("No introduction yet")}
          <p className="font-italic mb-0">{currentUser.birthdate}</p>
          <p className="font-italic mb-0">{currentUser.major}</p>
        </div>
        <div className="mb-0">
            <h5>Bio</h5>
            {props.editing ? (
              <>
                <input
                  className="font-italic m-3 mb-5 block px-4"
                  type="text"
                  placeholder="Add your bio here"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)} ></input>
              </>
            ) : ("No bio yet")}

            <p className="font-italic mb-0">{currentUser.bio}</p>
        </div>
        <div className="form-group">
          <h5>Name:</h5>
          <input
            type="text"
            className="font-italic m-3 mb-5 block px-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h5>Hometown:</h5>
          <input
            type="text"
            className="font-italic m-3 mb-5 block px-4"
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h5>Birthdate:</h5>
          <input
            type="text"
            className="font-italic m-3 mb-5 block px-4"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h5>Major:</h5>
          <input
            type="text"
            className="font-italic m-3 mb-5 block px-4"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h5>Bio:</h5>
          <textarea
            className="font-italic m-3 mb-5 block px-4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h5>Pronouns:</h5>
          <input
            type="text"
            className="font-italic m-3 mb-5 block px-4"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
