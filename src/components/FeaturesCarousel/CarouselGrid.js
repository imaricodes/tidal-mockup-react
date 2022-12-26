import React, { useContext } from "react";
import FeatureCardWrapper from "./FeatureCardWrapper";
import styles from "./CarouselGrid.module.css";
import { CardContext } from "./CardContext/CardContext";

const CarouselGrid = () => {
  const [cards, setCards] = useContext(CardContext);



  return (
    <div
      className={`${styles["grid"]} ${styles["snap-type-x-mandatory"]} ${styles["flex-column"]}`}
    >
      {cards.map((card, index) => (
      
          <FeatureCardWrapper key={index} gridNumber={card.gridNumber} />
  
      ))}
    </div>
  );
};

export default CarouselGrid;
