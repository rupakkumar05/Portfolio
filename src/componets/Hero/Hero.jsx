import React from "react";
import hero from "../../assets/hero/rupak.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rupak</h1>
        <p className={styles.description}>
          I’m a MERN stack developer passionate about building full-stack web
          applications using MongoDB, Express, React, and Node.js. I enjoy
          creating responsive, user-friendly interfaces and robust backends.
        </p>
        <a  href="mailto:rupakkumar995554@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={hero} alt="Hero-image" className={styles.heroimg} />
      <div className={styles.topBlur}></div>
      <div className={styles.BottomBlur}></div>
    </section>
  );
};
