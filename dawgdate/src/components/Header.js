import React from 'react';

export function Header(props) {
    const groupName = "Group BB-1";
  
    return (
      <header className="text-light py-3">
        <div className="container">
          <h1>DawgDate</h1>
          <p>{groupName}</p>
          <p>
            <a className="btn btn-success d-none d-md-inline d-lg-none" href="http://getbootstrap.com/">dawgDate draft 2</a>
          </p>
        </div>
      </header>
    )
  }
  