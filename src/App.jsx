import React from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import HorizontalLine from './components/HorizontalLine';
import './data/fa-library';

function App() {
  return (
    <div className={styles.appContainer}>
      <NavBar />
      <Home />
      <HorizontalLine />
      <ProjectList />
      <HorizontalLine />
      <About />
      <HorizontalLine />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
