import React from 'react'
import GridCard from './GridCard/GridCard.js'
import styles from './CarouselGrid.module.css'

const CarouselGrid = () => {
  return (
    <div className={styles['grid']}>

        <GridCard />
        <GridCard />
        <GridCard />
        {/* <GridCard /> */}
    </div>
  )
}

export default CarouselGrid