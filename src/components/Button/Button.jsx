import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  console.log(props);
  return (
    <button
      className={props.isOutline ? styles.outline_btn : styles.primary_btn}
    >
      <span>{props.icon}</span>
      <span>{props.text}</span>
    </button>
  );
}

export default Button;
