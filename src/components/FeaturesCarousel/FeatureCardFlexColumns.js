import React, { useEffect, useRef } from "react";

import styles from "./FeatureCardFlexColumns.module.css";
import listensPic from "../../assets/listens.png";
import cardstyles from "./FeatureCardFlexColumnsCard.module.css";

const FeatureCardFlexColumns = ({ card }) => {
  const cardRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    cardRef.current.classList.add(styles[`${card.class}`]);

    if (card.class === "listens") {
      console.log("yes it does");
      imageRef.current.classList.add(styles["display-block"]);
    }
  }, []);

  //if card class is 'listens' add new dom element

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
      >
      <div
        ref={imageRef}
        className={`
        ${styles["card-listens-image-wrapper-grid"]}
        ${styles["tidal-image-wrapper"]}
        ${styles["display-none"]}
      
      `}
      >
        <img src={listensPic} alt="listens-card-image" />
      </div>



      </div>

     

      <h2
        className={`${styles["card-heading"]} ${styles["card-header-grid"]}
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
