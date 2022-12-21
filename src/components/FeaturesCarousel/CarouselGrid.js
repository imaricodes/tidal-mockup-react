import React from 'react'
import FeatureCard from './FeatureCard'
import styles from './CarouselGrid.module.css'

const cardContent = [
  
  {
    gridNumber: 1,
    header: "90+ million songs",
    bodyText: "With over 90 million tracks, exclusive releases, and tons of interviews and music videos, TIDAL brings you closer to the artists you listen to.",
    linkText: "> Learn More"
  },
  {
    gridNumber: 2,
    header: "Innovative audio formats.",
    bodyText: "Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> Learn More"
  },
  {
    gridNumber: 3,
    header: "Innovative audio formats.",
    bodyText: "Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> Learn More"
  },
  {
    gridNumber: 4,
    header: "Innovative audio formats.",
    bodyText: "Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> Learn More"
  },
  {
    gridNumber: 5,
    header: "Innovative audio formats.",
    bodyText: "Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> Learn More"
  },
  {
    gridNumber: 6,
    header: "Innovative audio formats.",
    bodyText: "Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> Learn More"
  },
  {
    gridNumber: 7,
    header: "Innovative audio formats.",
    bodyText: "Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> Learn More"
  },
  
]



const CarouselGrid = () => {

  
  return (
    <div className={`${styles['grid']} ${styles['snap-type-x-mandatory']}`} >

      {cardContent.map((data, index) => (
            // console.log(data.bodytext)
            <FeatureCard
              key={index}
              gridNumber={index + 1}
              header={data.header}
              bodyText={data.bodyText}
              linkText={data.linkText}
              
            />
          )
        )
      
      }
       
    </div>
  )
}

export default CarouselGrid