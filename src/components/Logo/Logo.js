import React from "react";

import styles from "./Logo.module.css";
import logoImg from "../../assets/images/logo.png";

const logo = (props) => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={logoImg} alt="Burger company" />
  </div>
);

export default logo;
