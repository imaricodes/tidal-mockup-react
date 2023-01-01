import React, { useContext } from "react";
import FeatureCardWrapper from "./FeatureCardWrapper";
import styles from "./CarouselGrid.module.css";
import { CardContext } from "./CardContext/CardContext";

const CarouselGrid = () => {
  const [cards, setCards] = useContext(CardContext);


 console.log(`new cards ${cards}`)

  return (

   
    <div
      className={`${styles["grid"]} ${styles["snap-type-x-mandatory"]} ${styles["flex-column"]}`}
    >
      <p>goodbye</p>
  
      {
      cards.map((card, index) => (
        
          <FeatureCardWrapper key={index} {...{ card }} />
        ))
      
      }

    </div>
  );
};

export default CarouselGrid;
