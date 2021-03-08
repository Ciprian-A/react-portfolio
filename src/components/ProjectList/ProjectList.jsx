import React from 'react';
import styles from './ProjectList.module.scss';
import Projects from '../Projects';
import projectsData from '../../data/projectsData';
import SectionHeader from '../SectionHeader';
import Parallax from 'react-rellax';




const ProjectList = () => {
  
      
  const title = <h2>PROJECTS</h2>
  return (
  
    <div id='projects' className={styles.projectList}>
      <Parallax
        speed={1.2}
        percentage={0.7}
        className={styles.parallax}
      >
        <SectionHeader
          title={title}
        />
      </Parallax>
      <Parallax
        speed={-0.7}
        percentage={0}
        className={styles.parallax}
      >
        <section className={styles.grid}>
          {projectsData.map(project => (
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
      </Parallax>
    </div>
  )
}

export default ProjectList
