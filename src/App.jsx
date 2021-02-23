import React from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className={styles.appContainer}>
    <NavBar />
    <Home />
    </div>
  );
}

export default App;
