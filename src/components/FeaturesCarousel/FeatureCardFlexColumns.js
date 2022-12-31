import React, { useEffect, useRef } from "react";

import styles from "./FeatureCardFlexColumns.module.css";
import cardstyles from "./FeatureCardFlexColumnsCard.module.css";

const FeatureCardFlexColumns = ({ card }) => {
  const cardRef = useRef();

  useEffect(() => {
    cardRef.current.classList.add(styles[`${card.class}`]);
    console.log(cardRef.current);
  }, []);

  return (
    <div
      className={` 
      ${styles["card"]} 
      ${styles["scroll-item-snap-align-center"]}  
      ${styles["display-contents"]} 
      ${styles["flex-column"]}
      
      `}
    >
      <div
        ref={cardRef}
        className={`
        ${styles["card-columm-grid"]}
        ${styles["background-image"]}
        ${styles["carousel-slide"]} 
        ${styles["background"]} 
        ${styles["scroll-item-snap-align-center"]}
        `}
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
