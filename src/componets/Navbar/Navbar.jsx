import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getimageurl } from "../../utils";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {/* <img  className={styles.menuBtn} src="src/assets/nav/menuIcon.png
" alt="menu-button" /> */}
        {/* <img
          className={styles.menuBtn}
          src={getimageurl("nav/menuIcon.png")}
          alt="menu-button"
        /> */}
        <img
          className={styles.menuBtn}
          src={menuopen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setmenuopen(!menuopen)}
        />

        <ul className={`${styles.menuitems} ${menuopen && styles.menuOpen}`}onClick={()=> setmenuopen(false)} >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#expreience">Expreience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
