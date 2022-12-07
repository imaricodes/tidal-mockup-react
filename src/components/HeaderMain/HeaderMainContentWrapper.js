import React from 'react'
import styles from './HeaderMainContentWrapper.module.css'
import HeaderMainContent from './HeaderMainContent'
import HeaderMainMedia from './HeaderMainMedia.js'
import GradientBottom from './GradientBottom.js'

const HeaderMainContentWrapper = () => {
  return (
    //header content (has text stuff, your music etc)
    //media wrapper (has tidal image)
    <div className={`${styles['wrapper']} ${styles['main-content-wrapper']}`}>
      <HeaderMainContent/>
      <HeaderMainMedia/>
      <GradientBottom />
      
      
    </div>
  )
}

export default HeaderMainContentWrapper