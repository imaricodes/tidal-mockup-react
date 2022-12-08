import React from 'react'
import styles from './Main.module.css'
import HeaderMainWrapper from '../HeaderMain/HeaderMainWrapper'
import TidalCarousel from '../FeaturesCarousel/TidalCarousel'
import FeaturesCarouselWrapper from '../FeaturesCarousel/FeaturesCarouselWrapper.js'
const Main = () => {
  return (
    <div>
        <HeaderMainWrapper/>
        <FeaturesCarouselWrapper/>

    </div>
  )
}

export default Main