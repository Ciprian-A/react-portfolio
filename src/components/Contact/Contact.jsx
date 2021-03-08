import React from 'react'
import styles from './Contact.module.scss';
import SectionHeader from '../SectionHeader';
import contact from '../../assets/contact.svg';
import github from '../../assets/github.svg';
import email from '../../assets/email.svg';
import linkedin from '../../assets/in.svg';
import Parallax from 'react-rellax';



const Contact = () => {
  // console.log(window.screen.width)

  
  const title = <h2 style={{color: "#182A3E", textDecoration:"underline", textDecorationColor:"black"}}
  >CONTACT</h2>
  return (
    <div id='contact' className={styles.contactContainer}>
    <Parallax
            speed={0}
            percentage={0} 
          >
      <SectionHeader
        title={title}
      />
      </Parallax>
      <Parallax
            speed={-1}
            percentage={0.6} 
          >
      <h5>PLEASE FEEL FREE TO CONTACT ME VIA THE LINKS BELOW FOR ANY PROJECT COLLABORATION</h5>
      </Parallax>
      <Parallax
            speed={0}
            percentage={0} 
          >
      <div className={styles.contactMe}>
        <img src={contact} alt="contact" className={styles.contact}/>
        <a href="https://github.com/Ciprian-A" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className={styles.github}/>
        </a>
        <a href="mailto:ciprianoffice10@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="email" className={styles.email}/>
        </a>
        <a href="https://www.linkedin.com/in/ciprian-andrei-8381231b9" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className={styles.linkedin}/>
        </a>
      </div>
      </Parallax>
      
    </div>
  )
}

export default Contact
