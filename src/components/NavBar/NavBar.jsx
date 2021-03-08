import React, {useState, useEffect} from 'react';
import styles from './NavBar.module.scss'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.svg';


const NavBar = () => {
  const [ navbar, setNavbar ] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
      prevScrollpos = currentScrollPos;
    }
    
  }, [])

  return (
    <>
      <Navbar collapseOnSelect fixed='top' className={navbar ? `${styles.navbar}` : `${styles.hidden}`} expand="sm" variant='dark'>
        <Navbar.Brand href="#home">
          <img src={logo} className={styles.logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
              <Nav.Link className={styles.navLinks} href="#home">HOME</Nav.Link>
              <Nav.Link className={styles.navLinks} href="#projects">PROJECTS</Nav.Link>
              <Nav.Link className={styles.navLinks} href="#about">ABOUT</Nav.Link>
              <Nav.Link className={styles.navLinks} href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar;
