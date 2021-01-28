import React, { useRef } from "react";
import Controller from "./Controller";
import styles from "./messenger.module.css";
import Modal from "./Modal";
const Messenger = () => {
  let msgBox = useRef(null);
  const handleMessageBox = () => {
    msgBox.current.classList.toggle(styles.open);
  };
  return (
    <section className={styles.section}>
      <div className={styles.msgBoxWrapper} ref={msgBox}>
        <Modal />
      </div>
      <Controller handleMessageBox={handleMessageBox} />
    </section>
  );
};

export default Messenger;
