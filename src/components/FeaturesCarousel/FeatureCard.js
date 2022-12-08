import React from "react";
import styles from "./FeatureCard.module.css";
import GridCard from "./GridCard/GridCard";

const FeatureCard = () => {
  return (
    <GridCard>
      <div
        className={`${styles["flex-column"]} ${styles["background-image"]} `}
      >
        <h2 className={styles["heading-intermediate"]}>
          Innovative Audio Formats
        </h2>
        <p className={styles["heading-intermediate"]}>
          Listen to the music exactly as the artist intended in HiFi, MQA, or
          immersive sound formats like Dolby Atmos or 360 Reality Audio.
        </p>
        <p className={styles["card-link"]}> Learn More</p>
      </div>
    </GridCard>
  );
};

export default FeatureCard;
