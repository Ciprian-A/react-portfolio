import React from 'react';
import styles from './ProjectList.module.scss';
import Projects from '../Projects';
import projectsData from '../../data/projectsData';
import SectionHeader from '../SectionHeader';
// import Parallax from 'react-rellax';

const ProjectList = () => {
  const title = <h2>PROJECTS</h2>;
  return (
    <div id='projects' className={styles.projectList}>
      <SectionHeader title={title} />

      <section className={styles.grid}>
        {projectsData.map((project) => (
          <Projects
            key={project.id}
            name={project.name}
            description={project.description}
            GitHub={project.gitLink}
            Launch={project.liveSite}
            imageSrc={project.imageSrc}
          />
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
