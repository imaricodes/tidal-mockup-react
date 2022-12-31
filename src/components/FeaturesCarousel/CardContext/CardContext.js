import React, {createContext, useState} from "react";


export const CardContext = createContext();



export const CardProvider = (props) => {

  const [cards, setCards] = useState([
  
    {
      gridNumber: 1,
      header: "90+ million songs",
      bodyText: "1With over 90 million tracks, exclusive releases, and tons of interviews and music videos, TIDAL brings you closer to the artists you listen to.",
      linkText: "> 1Learn More",
      class: "songs",
    },
    {
      gridNumber: 2,
      header: "2Innovative audio formats.",
      bodyText: "2Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
      linkText: ">2 Learn More",
      class: "audio",
    },
    {
      gridNumber: 3,
      header: "3Innovative audio formats.",
      bodyText: "3Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
      linkText: "> 3Learn More",
      class: "listens",
    },
    {
      gridNumber: 4,
      header: "4Innovative audio formats.",
      bodyText: "4Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
      linkText: "> 4Learn More",
      class: "devices",
    },
    {
      gridNumber: 5,
      header: "5Innovative audio formats.",
      bodyText: "5Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
      linkText: "> 5Learn More",
      class: "mixes",
    },
    {
      gridNumber: 6,
      header: "6Innovative audio formats.",
      bodyText: "6Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
      linkText: "> 6Learn More",
      class: "playlists",
    },
    {
      gridNumber: 7,
      header: "7Innovative audio formats.",
      bodyText: "7Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
      linkText: "> 7Learn More",
      class: "videos",
    },
    
  ])

    return (
      <CardContext.Provider value={[cards, setCards]}>
        {props.children}
      </CardContext.Provider>
    );
};



