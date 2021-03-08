import React from 'react';
import styles from './About.module.scss';
import programmer from '../../assets/programmer.svg';
import SectionHeader from '../SectionHeader';
import SoftwareExperience from '../SoftwareExperience';
import Parallax from 'react-rellax';



const About = () => {

  const title = <h2>ABOUT ME</h2>
  return (
    <article id='about' className={styles.aboutComponent}>
      
      <section>
        <div className={styles.aboutText}>
          <Parallax
            speed={5}
            percentage={0.85}
            className={styles.parallax}
          >
            <SectionHeader
              title={title}
            />
          </Parallax>
          <Parallax
            speed={4}
            percentage={0.85}
            className={styles.parallax}
          >
            <p>I am a tech enthusiast and a Software Developer graduate from "_nology Software Development Bootcamp".
            </p>
          </Parallax>
          <br/>
          <Parallax
            speed={3}
            percentage={0.85}
          >
          <p>The bootcamp was a full time 12 week course that emulated a day-to-day web dev working environment.
          </p>
          </Parallax>
          <br/>
          <br/>
          <Parallax
            speed={2}
            percentage={0.85}
          >
          <p>It was an exciting experience where we covered mainly front-end tools (i.e: HTML, CSS, Javascript, React.Js) but we also had exposure to the backend part (Node.Js, Express and REST API ).
          </p>
          </Parallax>
          <br/>
          <br/>
          <Parallax
            speed={1}
            percentage={0.85}
          >
          <p>As I am constantly eager to learn and expand my skillset, I am currently learning C# and PHP to increase my backend knowledge as well.
          </p>
        </Parallax>
        </div>
        <Parallax
            speed={-1.5}
            percentage={0.2}
          >
        <div className={styles.imgContainer}>
          <img src={programmer} className={styles.programmer} alt='programmer'    
          />
        </div>
        </Parallax>
      </section>
      <SoftwareExperience />
    </article>
  )
}

export default About
