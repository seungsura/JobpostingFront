import React from "react";
import styles from "../styles/MainBody.module.css";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

function MainBody () {
  return (
    <div className={styles.MainBody}>
    <LeftBody />
    <RightBody />
  </div>
  );
}

export default MainBody;
