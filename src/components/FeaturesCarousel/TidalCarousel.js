import React from 'react'
import CarouselGrid from './CarouselGrid.js'
import styles from './TidalCarousel.module.css'


const TidalCarousel = () => {


  return (
    <div className={`${styles['width']}`} >
    
      <CarouselGrid />
    </div>
  )
}

export default TidalCarousel