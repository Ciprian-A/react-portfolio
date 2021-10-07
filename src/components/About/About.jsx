import React from 'react';
import styles from './About.module.scss';
import programmer from '../../assets/programmer.svg';
import SectionHeader from '../SectionHeader';
import SoftwareExperience from '../SoftwareExperience';
import HorizontalLine from '../HorizontalLine'
import Parallax from 'react-rellax';

const About = () => {
  const title = <h2>ABOUT ME</h2>;
  console.log(window.innerWidth);
  return (
    <article id='about' className={styles.aboutComponent}>
      <section>
        <Parallax speed={-1.4} percentage={0.4}>
          <div className={styles.aboutText}>
            <SectionHeader title={title} />
            <br />
          
            <p>
              I'm Ciprian, a tech savvy and a Software Development Bootcamp
              graduate.
            </p>
            <br />
            <p>
              I developed a curiosity for coding and, while I was working
              full-time, I began learning the basics of HTML, CSS and Javascript
              through "freeCodeCamp" and "Codecademy". As I enjoyed the problem
              solving and visual design aspects I decided to enroll on a
              Software Development Bootcamp and change my career.
            </p>
            <br />
            <br />
            <p>
              I am currently looking for an opportunity to showcase my skills
              and, as the industry is constantly evolving, I am motivated to
              continuously develop new skills and add value to my future team!.
            </p>
            <br />

          </div>
        </Parallax>
        <Parallax speed={1} percentage={2}>

          <div className={styles.imgContainer}>
            <img
              src={programmer}
              className={styles.programmer}
              alt='programmer'
            />
          </div>
        </Parallax>
      </section>
      <HorizontalLine />
      <SoftwareExperience />
    </article>
  );
};

export default About;
