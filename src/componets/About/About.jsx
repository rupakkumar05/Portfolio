import React from "react";
import styles from "./About.module.css";
import hero from "../../assets/hero/rupak.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={hero}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive websites and optimizing sites.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a backend developer focused on developing fast and optimized back-end systems and APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
