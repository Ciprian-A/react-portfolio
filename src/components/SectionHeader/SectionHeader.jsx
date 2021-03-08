import React from 'react'
import styles from './SectionHeader.module.scss';

const SectionHeader = ({title}) => {
  return (
    <div className={styles.sectionHeader}>
      {title}
    </div>
  )
}

export default SectionHeader
