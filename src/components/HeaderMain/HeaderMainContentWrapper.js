import React from 'react'
import styles from './HeaderMainContentWrapper.module.css'
import HeaderMainContent from './HeaderMainContent'
import HeaderMainMedia from './HeaderMainMedia.js'

const HeaderMainContentWrapper = () => {
  return (
    //header content (has text stuff, your music etc)
    //media wrapper (has tidal image)
    <div className={`${styles['wrapper']} ${styles['main-content-wrapper']}`}>
      <HeaderMainContent/>
      <HeaderMainMedia/>
      
      
    </div>
  )
}

export default HeaderMainContentWrapper