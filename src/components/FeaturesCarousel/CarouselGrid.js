import React from 'react'
import FeatureCard from './FeatureCard'
import styles from './CarouselGrid.module.css'

const CarouselGrid = () => {
  return (
    <div className={styles['grid']}>

        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        {/* <GridCard /> */}
    </div>
  )
}

export default CarouselGrid