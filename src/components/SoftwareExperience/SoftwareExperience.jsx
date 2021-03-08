import React from 'react'
import styles from './SoftwareExperience.module.scss';
import SectionHeader from '../SectionHeader';
import software from '../../assets/software.svg';
import Parallax from 'react-rellax';


const SoftwareExperience = () => {

  const title = <h2 style={{color: "white"}}>SOFTWARE EXPERIENCE</h2>

  return (

    <article className={styles.softwareComponent}> 
      <section>
        <Parallax
          speed={-1.5}
          percentage={-1}
        >
          <div className={styles.imgContainer}>
            <img src={software} className={styles.software} alt='software'/>
          </div>
        </Parallax>
        <div className={styles.softwareText}>
          <Parallax
            speed={5}
            percentage={0.85} 
          >
            <SectionHeader
              title={title}
            />
          </Parallax>
          <Parallax
            speed={4}
            percentage={0.85}
          >
            <h6>During the intensive online courses at "_Nology" and
            "The Jump Digital School" I have been exposed to the following
            technologies which I have used in various projects
            and weekly challenges:
            </h6>
          </Parallax>
          <br/>
          <Parallax
            speed={3}
            percentage={0.85}
          >
            <h5>Coding Languages:</h5>
            <p>Javascript ES6+, CSS3, HTML5</p>
          </Parallax>
          <br/>
          <Parallax
            speed={2}
            percentage={0.85}
          >
            <h5>Front-End Libraries & Frameworks:</h5>
            <p>React, AOS, GSAP, Anime.JS, Sass(SCSS), Materialize, Bootstrap</p>
          </Parallax>
          <br/>
          <Parallax
            speed={1}
            percentage={0.85}
          >
            <h5>Back-end Development:</h5>
            <p>Rest APIs using Node.js (with Express), Google
            Firebase - Authorisation & Authentication, Firestore
            Document Database, Hosting</p>
          </Parallax>
          <br/>
          <Parallax
            speed={0}
            percentage={0.85}
          >
          <h5>Software Development:</h5>
            <p>Git & GitHub, NPM, Yarn, Babel, SPAs, unit testing
            (Jest & Enzyme), OOP, Agile, Scrum, Pair
            programming, VS Code, Figma.</p>
          </Parallax>
        </div>
      </section>
    </article>
  )
}

export default SoftwareExperience
