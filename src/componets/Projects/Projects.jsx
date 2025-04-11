import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

// Dynamically import project images
const projectImages = import.meta.glob("../../assets/project/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export const Projects = () => {
  const project = {
    title: "Airbnb Clone",
    description: "Developed a full-stack Airbnb clone",
    skills: [],
    sourceLink: "https://github.com/rupakkumar05/airnbn",
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard project={project} />
      </div>
    </section>
  );
};
