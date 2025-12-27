import React from "react";
import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import resumeIcon from "../../assets/contact/RESUME.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:rupakkumar995554@gmail.com">rupakkumar995554@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/rupak-kumar-a989a0336">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/rupakkumar05">github.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.resume} src={resumeIcon} alt="Resume icon" />
          <a href="https://drive.google.com/file/d/1m1lZNUPtZkAdSsTdYNWqDCwOGXKmiuOa/view?usp=drive_link">Download Resume</a>
        </li>
      </ul>
    </footer>
  );
};
