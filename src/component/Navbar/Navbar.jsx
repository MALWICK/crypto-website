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
      <div className={Styles.menu__options}>
        <div className={Styles.iconMenu}>
          <div className={Styles.menu__icon}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
        <div className={Styles.dropdown}>
          <ul>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
