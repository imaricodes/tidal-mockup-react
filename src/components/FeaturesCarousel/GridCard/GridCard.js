import React from "react";
import styles from "./GridCard.module.css";

const GridCard = props => {
  return (
    <div className={`${styles["card"]} `}>

      {props.children}
  
    </div>
  );
};

export default GridCard;
