import React from "react";
import FeatureCard from "./FeatureCard.js";
import styles from "./FeatureCardWrapper.module.css";

const FeatureCardWrapper = ({ card }) => {
  return (
    <div
      className={`${styles["scroll-snap-align-center"]} ${styles["display-contents"]} `}
      style={{ "--gridNumber": card.gridNumber }}
    >
      <FeatureCard {...{ card }} />
      {/* { console.log("featureCard ", props.gridNumber) } */}
    </div>
  );
};

export default FeatureCardWrapper;
