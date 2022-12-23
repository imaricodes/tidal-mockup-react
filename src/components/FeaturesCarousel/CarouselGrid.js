import React from 'react'
import FeatureCard from './FeatureCard'
import styles from './CarouselGrid.module.css'

const cardContent = [
  
  {
    gridNumber: 1,
    header: "1 90+ million songs",
    bodyText: "1With over 90 million tracks, exclusive releases, and tons of interviews and music videos, TIDAL brings you closer to the artists you listen to.",
    linkText: "> 1Learn More"
  },
  {
    gridNumber: 2,
    header: "2Innovative audio formats.",
    bodyText: "2Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: ">2 Learn More"
  },
  {
    gridNumber: 3,
    header: "3Innovative audio formats.",
    bodyText: "3Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> 3Learn More"
  },
  {
    gridNumber: 4,
    header: "4Innovative audio formats.",
    bodyText: "4Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> 4Learn More"
  },
  {
    gridNumber: 5,
    header: "5Innovative audio formats.",
    bodyText: "5Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> 5Learn More"
  },
  {
    gridNumber: 6,
    header: "6Innovative audio formats.",
    bodyText: "6Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> 6Learn More"
  },
  {
    gridNumber: 7,
    header: "7Innovative audio formats.",
    bodyText: "7Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
    linkText: "> 7Learn More"
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