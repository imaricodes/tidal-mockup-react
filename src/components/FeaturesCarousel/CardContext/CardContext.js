import React, {createContext, useState} from "react";


export const CardContext = createContext();



export const CardProvider = (props) => {

  const [cards, setCards] = useState([
  
    {
      gridNumber: 1,
      header: "90+ million songs",
      bodyText: "With over 90 million tracks, exclusive releases, and tons of interviews and music videos, TIDAL brings you closer to the artists you listen to.",
      linkText: "",
      class: "songs",
    },
    {
      gridNumber: 2,
      header: "Innovative audio formats.",
      bodyText: "Listen to music exactly as the artist intended in HiFi, MQA, or immersive sound formats like Dolby Atmos or 360 Reality Audio.",
      linkText: "> Learn More",
      class: "audio",
    },
    {
      gridNumber: 3,
      header: "Your listening counts.",
      bodyText: "With the goal of empowering artists and fans, TIDAL gives you more ways of supporting the artists you love.",
      linkText: "> Learn More",
      class: "listens",
    },
    {
      gridNumber: 4,
      header: "Anytime. Anywhere.",
      bodyText: "Listen on your terms on any device, whether you’re offline, off-the-beaten path, at home or in the car.",
      linkText: "> See our Supported Devices",
      class: "devices",
    },
    {
      gridNumber: 5,
      header: "Mixes and Radio.",
      bodyText: "Get a personalized curation of songs and videos with My Mix, or discover new music with Artist Radio.",
      linkText: "> Learn More",
      class: "mixes",
    },
    {
      gridNumber: 6,
      header: "Hand-picked playlists.",
      bodyText: "Check out original playlists hand-picked by our team of experts, or stream guest playlists curated by the artists you love.",
      linkText: "",
      class: "playlists",
    },
    {
      gridNumber: 7,
      header: "Videos and Livestreams.",
      bodyText: "Watch over 450,000 high-quality videos, including music videos, original content, exclusive livestreams and events.",
      linkText: "",
      class: "videos",
    },
    
  ])

    return (
      <CardContext.Provider value={[cards, setCards]}>
        {props.children}
      </CardContext.Provider>
    );
};



