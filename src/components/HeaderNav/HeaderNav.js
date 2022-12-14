import React from 'react'
import styles from './HeaderNav.module.css'
import HeaderNavLogo from './HeaderNavLogo.js'
import HeaderNavMenu from './HeaderNavMenu.js'

const HeaderNav = () => {
  return (
    <div className={`${styles['header-nav']} ${styles['header-nav--gradient-top']}`}>
      <HeaderNavLogo/>
      <HeaderNavMenu/>
    </div>
  )
}

export default HeaderNav