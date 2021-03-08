import React from 'react';
import styles from './Projects.module.scss';
import Button from '../Button'

const Projects = (props) => {

  const { name, description, GitHub, Launch,imageSrc } = props;
  
  return (
    <div className={styles.projectContainer}>
      <div className={styles.imgContainer}>
        <img src={imageSrc} alt={name}/>
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className={styles.btnLinks}>
          <Button
            link={GitHub}
            name='GitHub'
          />
          <Button
            link={Launch}
            name='Launch'
          />
          
        </div>
      </div>
      
    </div>
  )
}

export default Projects
