import React, { useEffect, useState } from "react";

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth';
import { getDatabase, onValue, ref as dbRef, set as firebaseSet } from 'firebase/database';
import EditForm from "./EditForm";

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
  const [about, setAbout] = useState()
  const [Bio, setBio] = useState()
  const [editing, setEditing] = useState(false)

//   useEffect(() => {
//     const aboutRef = dbRef(getDatabase(), "userData/" + currentUser.uid + "/" + "about");
//     const bioRef = dbRef(getDatabase(), "userData/" + currentUser.UWNetId + "/" + "bio");
//     console.log(bioRef)
// 
//     //when db value changes
//     const offFunctionAbout = onValue(aboutRef, (snapshot) => { setAbout(snapshot.val()) })
//     const offFunctionBio = onValue(bioRef, (snapshot) => { setBio(snapshot.val()) })
// 
//     function cleanup() {
//       console.log("component is being removed");
//       //when the component goes away, we turn off the listener
//       offFunctionAbout();
//       offFunctionBio();
//     }
//     return cleanup; //return instructions on how to turn off lights
//   }, [])

  return (
    <div>
      <div className="snippet-body"><div className="row py-5 px-4"><div className="col-md-5 mx-auto"><div className="bg-white shadow rounded overflow-hidden">
        <div className="px-4 pt-0 pb-4 cover">
          <div className="media align-items-end profile-head">
            <div className="profile mr-3">
              <img src={previewImageUrl} alt={currentUser.name} width="130" className="rounded mb-2 img-thumbnail" />
              <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Upload Image</label>
              <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
              <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange} />
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
          <EditForm currentUser={currentUser}></EditForm>
        </div>
      </div></div></div></div>
    </div>
  );
}
