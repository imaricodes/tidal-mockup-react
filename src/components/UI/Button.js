import React from 'react';
import styles from './Button.module.css'

const Button = props => {
  return (
    <button type={props.type}  className={`${props.class} ${styles.btn}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
