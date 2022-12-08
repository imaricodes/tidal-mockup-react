import React from "react";
import styles from "./GridCard.module.css";

const GridCard = () => {
  return (
    <div className={`${styles["card"]} `}>

        <div className={`${styles["flex-column"]} ${styles["background-image"]} `}>
          <h2 className={styles["heading-intermediate"]}>
            Innovative Audio Formats
          </h2>
          <p className={styles["heading-intermediate"]}>
            Listen to the music exactly as the artist intended in HiFi, MQA, or
            immersive sound formats like Dolby Atmos or 360 Reality Audio.
          </p>
          <p className={styles["card-link"]}> Learn More</p>
        </div>
  
    </div>
  );
};

export default GridCard;
