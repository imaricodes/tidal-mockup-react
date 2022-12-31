import React from "react";

import styles from "./FeatureCardFlexColumns.module.css";
// import { CardContext } from './CardContext/CardContext'

const FeatureCardFlexColumns = ({card}) => {
  // const [cards, setCards] = useContext(CardContext);






  return (
    <div
      className={` ${styles["card"]} ${styles["scroll-item-snap-align-center"]}  ${styles["display-contents"]} ${styles["flex-column"]}`}
    >
      <div
        className={`
        ${styles["card-columm-grid"]}
        ${styles["background-image"]} 
        ${styles["card-card-background-color"]} 
        ${styles["carousel-slide"]} 
        ${styles["background"]} 
        ${styles["scroll-item-snap-align-center"]}
        `}
        // style={{
        //   backgroundImage: 'url("https://via.placeholder.com/346x750.png")',
        // }}
      ></div>

      <h2
        className={`${styles["heading-intermediate"]} ${styles["card-header-grid"]}
        `}
      
      >
      {card.header}
      </h2>
      <p
        className={`${styles["card-text"]} ${styles["card-body-text-grid"]}
        `}
      >
       {card.bodyText}
      </p>
      <p
        className={`${styles["card-link"]} ${styles["card-link-text-grid"]}
        
        `}
      >
        {card.linkText}
        
      </p>
    </div>
  );
};

export default FeatureCardFlexColumns;
