import React from 'react'
import styles from './TidalImage.module.css'
import devices from '../../assets/devices.png'
import devicesSingleCol from '../../assets/devices-single-col.jpg'

const TidalImage = () => {
  return (
    <div>
        <img src={devices} alt={'devices'} className={styles['display-2col']}/>
        <img src={devicesSingleCol} alt={'devices'} className={styles['display-1col']}/>
    </div>
  )
}

export default TidalImage