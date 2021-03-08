import React from 'react'
import styles from './HorizontalLine.module.scss';


const HorizontalLine = () => {
  return (
    <div className={styles.lineContainer}>
      <hr className={styles.line}/>
    </div>
  )
}

export default HorizontalLine
