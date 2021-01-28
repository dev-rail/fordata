import React from "react";
import styles from "./messenger.module.css";
const Controller = ({ handleMessageBox }) => {
  return (
    <div
      className={styles.controllerWrapper}
      onClick={() => handleMessageBox()}
    >
      <i className="fa fa-comments" aria-hidden="true"></i>
    </div>
  );
};

export default Controller;
