import React from 'react'
import styles from './ButtonStrip.module.css'


const ButtonStrip = props => {
  return (
    <div className={styles['button-strip']}>
        {props.children}
    </div>
  
  )
}

export default ButtonStrip