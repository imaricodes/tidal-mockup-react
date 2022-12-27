import React from "react";
import styles from "./FeatureCard.module.css";
import FeatureCardFlexColumns from "./FeatureCardFlexColumns";



/** 
 * //TODO: Need receive these props from GridCard.js:
 * url for image, h2, p/text (content), p/link(content)
 * each card will be created dynamically in the carousel grid component
 * 
 * 
 */

const FeatureCard = ({card}) => {

  return (
    <div className={styles["display-contents"]}
    >
      <FeatureCardFlexColumns {...{card}} />
    </div>
  );
};

export default FeatureCard;
