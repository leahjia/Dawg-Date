import React, { useEffect, useState } from "react";

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth';
import { getDatabase, onValue, ref as dbRef, set as firebaseSet } from 'firebase/database';

export default function SelfProfilePage(props) {
  const currentUser = props.currentUser;
  const selfImg = ["img/engineering-online-mechanical-29Apr2019.jpeg", "img/w-day.jpeg", "img/gaming_setup.avif", "img/man_singing.jpg"]
  const photoElems = selfImg.map((image, index) => {
    return (
      <div key={index} className="col-lg-6 mb-2 pr-lg-1">
        <img src={image} alt={index} className="img-fluid rounded shadow-sm" />
      </div>
    )
  })

  useEffect(() => {

    const aboutRef = dbRef(getDatabase(), "userData/" + currentUser.UWNetId + "/" + "about");
    //when db value changes
    const offFunction = onValue(aboutRef, (snapshot) => {
      setabout(snapshot.val())
    })

    const bioRef = dbRef(getDatabase(), "userData/" + currentUser.UWNetId + "/" + "bio");
    //when db value changes
    const offFunction2 = onValue(bioRef, (snapshot) => {
      setBio(snapshot.val());
    })

    function cleanup() {
      console.log("component is being removed");
      //when the component goes away, we turn off the listener
      offFunction();
      offFunction2();
    }
    return cleanup; //return instructions on how to turn off lights





  }, [])

  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = props.currentUser.userImg || "/img/profile-default.jpeg"
  const [previewImageUrl, setPreviewImageUrl] = useState(initialURL)
  const handleChange = (event) => {
    if (event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      // console.log(URL.createObjectURL(imageFile));
      setPreviewImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    // console.log("Uploading", imageFile);
    const storage = getStorage();
    // console.log(currentUser)
    const userImageRef = storageRef(storage, "/userImages/" + currentUser.UWNetId + ".png");
    await uploadBytes(userImageRef, imageFile);

    const downloadUrlString = await getDownloadURL(userImageRef)
    // console.log(downloadUrlString)
    await updateProfile(currentUser, { photoURL: downloadUrlString })
    const userDbRef = dbRef(getDatabase(), "userData/" + currentUser.UWNetId + "/" + "imgUrl");
    firebaseSet(userDbRef, downloadUrlString);
  }

  const showAboutValue = async (e) => {

  }
  const showBioValue = async (e) => {

  }
  const [savedAbout, setSavedAbout] = useState()
  const [about, setabout] = useState()
  const handleAboutChange = async (event) => {
    console.log(currentUser)
    console.log(event.target.value)
    setSavedAbout(true)
    setabout(event.target.value)
  }
  const [savedBio, setSavedBio] = useState()
  const [Bio, setBio] = useState()
  const handleBioChange = async (event) => {
    console.log(event.target.value)
    setSavedBio(true)
    setBio(event.target.value)
  }
  const handleAboutClick = async (event) => {
    const messageRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "about")
    firebaseSet(messageRef, about);
  }
  const handleBioClick = async (e) => {
    const messageRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "Bio")
    firebaseSet(messageRef, Bio);

  }

  return (
    <div>
      <div className="snippet-body">
        <div className="row py-5 px-4">
          <div className="col-md-5 mx-auto">
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-head">
                  <div className="profile mr-3">
                    <img src={previewImageUrl} alt={currentUser.name} width="130" className="rounded mb-2 img-thumbnail" />
                    <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Upload Image</label>
                    <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
                    <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange} />
                    {/* <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a> */}
                  </div>{" "}
                  <div className="media-body mb-5 text-white">
                    <h4 className="mt-0 mb-0">{currentUser.name}</h4>
                    <p className="small mb-4">{currentUser.hometown}</p>
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
                    {/* <h5 className="font-weight-bold mb-0 d-block">{currentUser.connections.length}</h5> */}
                    <small className="text-muted">Connections</small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">{currentUser.pronouns}</h5>
                    <small className="text-muted">Pronouns</small>
                  </li>
                </ul>
              </div>
              <div className="px-4 py-3">
                <h5 className="mb-0">About</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                  <input
                    className="font-italic m-3 mb-5 block px-4"
                    type="text"
                    placeholder="Add your introduction here"
                    value={about}
                    onChange={handleAboutChange} ></input>
                  <button className="btn btn-sm btn-secondary" onClick={handleAboutChange}>Cancel</button>
                  <button className="btn btn-sm btn-success" onClick={handleAboutClick}>Save About</button>

                  <p className="font-italic mb-0">{currentUser.birthdate}</p>
                  <p className="font-italic mb-0">{currentUser.major}</p>
                </div>

                <div className="mb-0">
                  <h5>Bio</h5>

                  <input
                    className="font-italic m-3 mb-5 block px-4"
                    type="text"
                    placeholder="Add your bio here"
                    value={Bio}
                    onChange={handleBioChange} ></input>

                  <button className="btn btn-sm btn-secondary" onClick={handleBioChange}>Cancel</button>
                  <button className="btn btn-sm btn-success" onClick={handleBioClick}>Save Bio</button>

                  <p className="font-italic mb-0">{currentUser.bio}</p>
                </div>

                <div className="py-4 px-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Photos</h5>
                    <a href="#" className="btn btn-link text-muted">Show all</a>
                  </div>
                  <div className="row">
                    {photoElems}
                  </div>
                  {/* <div className="row object-fit: cover">{photoElems}</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
