import React from 'react';
import Styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={Styles.navbar}>
      <h1>React.</h1>
      <div className={Styles.list}>
        <ul>
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
