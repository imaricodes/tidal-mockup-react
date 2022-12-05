import React from 'react'
import styles from './Layout.module.css'
import HeaderNav from './HeaderNav/HeaderNav'
import Main from './Main/Main'



const Layout = () => {
  return (
    <div>
        <HeaderNav />
        <Main/>
    </div>
    
  )
}

export default Layout