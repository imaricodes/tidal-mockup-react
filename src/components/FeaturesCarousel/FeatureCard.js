import React from "react";
import styles from "./FeatureCard.module.css";



/** 
 * //TODO: Need receive these props from GridCard.js:
 * url for image, h2, p/text (content), p/link(content)
 * each card will be created dynamically in the carousel grid component
 * 
 * 
 */

const FeatureCard = props => {

  return (
    <div className={ ` ${styles["card"]} ${styles["scroll-item-snap-align"]} ${styles["card-columm-grid"]}`}

     style={
          {'--grid-number': props.gridNumber,  }
        }
    >
      <div
        className={`
        ${styles["flex-column"]} 
        ${styles["background-image"]}
        `}

       

        style = {{ backgroundImage: 'url("https://via.placeholder.com/346x750.png")' } }
      >
        <h2 className={`${styles["heading-intermediate"]} ${styles["card-header-grid"]}
        
        `}>
          {props.header}
        </h2>
        <p className={`${styles["card-text"]} ${styles["card-body-text-grid"]}
        `}>
          {props.bodyText}
        </p>
        <p className={`${styles["card-link"]} ${styles["card-link-text-grid"]}
        
        `}> {props.linkText}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
