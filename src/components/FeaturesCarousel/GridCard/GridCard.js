import React from "react";
import styles from "./GridCard.module.css";
import {motion} from 'framer-motion'

const GridCard = props => {
  return (
    <motion.div className={`${styles["card"]} ${styles["scroll-item"]}`}>

      {props.children}
  
    </motion.div>
  );
};

export default GridCard;
