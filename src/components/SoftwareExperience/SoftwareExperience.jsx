import React from 'react';
import styles from './SoftwareExperience.module.scss';
import SectionHeader from '../SectionHeader';
import software from '../../assets/software.svg';
import Parallax from 'react-rellax';

const SoftwareExperience = () => {
  const title = <h2 style={{ color: 'white' }}>SOFTWARE EXPERIENCE</h2>;

  return (
    <article className={styles.softwareComponent}>
      <section>
        <Parallax speed={1.4} percentage={2}>
          <div className={styles.imgContainer}>
            <img src={software} className={styles.software} alt='software' />
          </div>
        </Parallax>
        <div className={styles.softwareText}>
          <Parallax speed={-2.5} percentage={0.3}>
            <SectionHeader title={title} />

          <br />
          
            <h5>Languages:</h5>
            <p>Javascript ES6+, CSS3, HTML5</p>
          <br />
            <h5>Front-End:</h5>
            <p>
              React, Typescript, Styled-Components, Material UI, AOS,
              Sass(SCSS), Bootstrap
            </p>
          
          <br />
            <h5>Back-end:</h5>
            <p>
              Node.js, Express, REST API, Google Firebase, Firestore, MongoDB,
              Hosting
            </p>
          <br />
            <h5>Software Development:</h5>
            <p>
              Git & GitHub, Jira, Trello, NPM, Yarn, Babel, SPA, TDD, Jest,
              Enzyme, OOP, Agile, Scrum, Pair programming, VS Code, Postman,
              Figma, Canva.
            </p>
          </Parallax>
        </div>
      </section>
    </article>
  );
};

export default SoftwareExperience;
