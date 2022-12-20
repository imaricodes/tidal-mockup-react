import React from "react";
import styles from "./GridCard.module.css";


const GridCard = props => {
  return (
    <div className={`${styles["card"]} ${styles["scroll-item"]}`}>

      {props.children}
  
    </div>
  );
};

export default GridCard;
