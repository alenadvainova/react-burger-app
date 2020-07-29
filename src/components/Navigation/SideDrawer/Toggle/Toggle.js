import React from "react";

import styles from "./Toggle.module.css";

const toggle = (props) => (
  <div onClick={props.clicked} className={styles.Toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggle;
