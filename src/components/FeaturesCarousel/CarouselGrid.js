import React from 'react'
import FeatureCard from './FeatureCard'
import styles from './CarouselGrid.module.css'
import { motion } from "framer-motion";

const CarouselGrid = () => {
  return (
    <motion.div className={`${styles['grid']} ${styles['snap-type-x-mandatory']}`} drag="x" dragConstraints={{right: 0}} >

        <FeatureCard key ={'1'} />
        <FeatureCard key ={'2'} />
        <FeatureCard key ={'3'} />
        <FeatureCard key ={'4'}/>
        <FeatureCard key ={'5'}/>
        <FeatureCard key ={'6'}/>
        <FeatureCard key ={'7'}/>
       
    </motion.div>
  )
}

export default CarouselGrid