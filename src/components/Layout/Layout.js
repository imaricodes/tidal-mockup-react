import React from 'react'
import styles from './Layout.module.css'

import Main from '../Main/Main'
import HeaderNavWrapper from '../HeaderNav/HeaderNavWrapper'



const Layout = () => {
  return (
    <div className={styles['flex-column']}>
        <HeaderNavWrapper />
        <Main/>
    </div>
    
  )
}

export default Layout