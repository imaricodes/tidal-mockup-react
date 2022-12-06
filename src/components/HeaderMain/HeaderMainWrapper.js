import React from 'react'
import styles from './HeaderMainWrapper.module.css'
import HeaderMainContentWrapper from './HeaderMainContentWrapper'

const HeaderMainWrapper = () => {
  return (
    <div className={styles['header-main-wrapper']}>
        <HeaderMainContentWrapper/>
    </div>
  )
}

export default HeaderMainWrapper