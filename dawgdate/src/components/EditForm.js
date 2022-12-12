import React, { useState } from "react";

export default function EditForm(props) {
  const [name, setName] = useState(props.currentUser.name);
  const [hometown, setHometown] = useState(props.currentUser.hometown);
  const [birthdate, setBirthdate] = useState(props.currentUser.birthdate);
  const [major, setMajor] = useState(props.currentUser.major);
  const [bio, setBio] = useState(props.currentUser.bio);
  const [pronouns, setPronouns] = useState(props.currentUser.pronouns);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      hometown: hometown,
      birthdate: birthdate,
      major: major,
      bio: bio,
      pronouns: pronouns,
    };
    props.onUpdateUser(data);
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Hometown:</label>
          <input
            type="text"
            className="form-control"
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Birthdate:</label>
          <input
            type="text"
            className="form-control"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Major:</label>
          <input
            type="text"
            className="form-control"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea
            className="form-control"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pronouns:</label>
          <input
            type="text"
            className="form-control"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
