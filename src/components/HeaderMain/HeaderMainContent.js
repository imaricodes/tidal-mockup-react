import React from "react";
import styles from "./HeaderMainContent.module.css";

const HeaderMainContent = () => {
  return (
    <div className={styles["header-main-content"]}>
      <h1 className={styles['header-title']}>For your music</h1>
      <p>A streaming service for all music fans.</p>
    </div>
  );
};

export default HeaderMainContent;
