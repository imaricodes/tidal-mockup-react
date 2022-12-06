import React from 'react'
import styles from './HeaderMainMedia.module.css'
import TidalImage from './TidalImage'

const HeaderMainMedia = () => {
  return (
    <div className={styles['media-wrapper']}>
      <TidalImage />
    </div>
  )
}

export default HeaderMainMedia