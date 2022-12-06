import React from 'react'
import styles from './HeaderNavLogo.module.css'
// import tidalLogo from '/Users/imarichildress/Documents/dev-projects/portfolio/tidal/tidal-react/src/assets/tidal-vector-logo.svg'

// import { ReactComponent as TidalLogo } from '.../assets/tidal-vector-log.svg';
import TidalLogo from '../../assets/tidal-vector-logo.svg';


const HeaderNavLogo = () => {
  return (
    <div className={[styles['header-nav-logo']]}>
      <img src={TidalLogo} alt={'tidal logo'} className={styles['img__tidal-logo']}/>
    </div>
  )
}

export default HeaderNavLogo