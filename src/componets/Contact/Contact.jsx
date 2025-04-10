import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./src/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="rupakkumar995554@gmail.com">rupakkumar995554@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="./src/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rupak-kumar-a989a0336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com </a>
        </li>
        <li className={styles.link}>
          <img src="./src/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/rupakkumar05">github.com </a>
        </li>
        <li className={styles.link}>
        <img className={styles.resume} src="./src/assets/contact/RESUME.png" alt="Github icon" />
          <a href="https://drive.google.com/file/d/1VxxHvGNNC_J4kK5RloOkg4m0n2Uybe8z/view?usp=sharing">Download Resume</a>
        </li>
      </ul>
    </footer>
  );
};