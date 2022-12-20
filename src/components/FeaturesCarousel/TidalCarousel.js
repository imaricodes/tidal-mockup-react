import React from 'react'
// import { motion } from "framer-motion";
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