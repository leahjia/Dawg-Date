import React from 'react';

export default function Footer(props) {

  return (
    <footer>
      <div className="footer-info">
        <h3>&copy; DawgDate</h3>
        <p>DawgDate creates a better dating experience on campus for University of Washington students.</p>
        <ul className="links">
          <li><a href="https://www.linkedin.com/school/uw-ischool/" target="_blank"><i
            className="fa fa-linkedin"></i></a></li>
          <li><a href="https://www.facebook.com/UWiSchool" target="_blank"><i
            className="fa fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/uwischool/" target="_blank"><i
            className="fa fa-instagram"></i></a></li>
          <li><a href="https://twitter.com/uw_ischool?s=20&t=6g6UTfndELpQXwPyzvzTog" target="_blank"><i
            className="fa fa-twitter"></i></a></li>
          <li><a href="https://www.youtube.com/user/UWiSchool" target="_blank"><i
            className="fa fa-youtube"></i></a></li>
        </ul>
      </div>
      <div className="copyright">
        <p>COPYRIGHT &copy;2022. DESIGNED BY <i>INFO 340 GROUP BB1</i></p>
      </div>
    </footer>
  )
}