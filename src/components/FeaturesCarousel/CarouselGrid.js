import React from 'react'
import FeatureCard from './FeatureCard'
import styles from './CarouselGrid.module.css'


const CarouselGrid = () => {
  return (
    <div className={`${styles['grid']} ${styles['snap-type-x-mandatory']}`} >

        <FeatureCard key ={'1'} />
        <FeatureCard key ={'2'} />
        <FeatureCard key ={'3'} />
        <FeatureCard key ={'4'}/>
        <FeatureCard key ={'5'}/>
        <FeatureCard key ={'6'}/>
        <FeatureCard key ={'7'}/>
       
    </div>
  )
}

export default CarouselGrid