import React from 'react'
import HeaderNav from './HeaderNav'
import styles from './HeaderNavWrapper.module.css'

const HeaderNavWrapper = () => {
  return (
    <div className={styles['header-nav-wrapper']}>
        <HeaderNav/>
    </div>
  )
}

export default HeaderNavWrapper