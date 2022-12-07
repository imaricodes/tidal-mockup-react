import React from "react";
import stylesHeaderMainContent
 from "./HeaderMainContent.module.css";
import Button from "../UI/Button";
import ButtonStrip from "../UI/ButtonStrip";

const HeaderMainContent = () => {
  return (
    <div className={stylesHeaderMainContent
    ["header-main-content"]}>
      <h1 className={stylesHeaderMainContent
        ['header-title']}>For your music</h1>
      <p className={stylesHeaderMainContent
        ['margin-top-nudge']}>A streaming service for all music fans.</p>
      <ButtonStrip>
        <Button class={`${stylesHeaderMainContent
          ['btn__header-content']} ${stylesHeaderMainContent
          ['btn__header-content--padding']}`}>Get Started</Button>
      </ButtonStrip>
    </div>
  );
};

export default HeaderMainContent;
