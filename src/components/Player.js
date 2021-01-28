import React from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./sections/sectionThree/sectionThree.module.css";

const Player = () => {
  return (
    <div className={styles.video}>
      <ReactPlayer url="https://youtu.be/Uq-6G3EOfOc" width="100%" />;
    </div>
  );
};

export default Player;
// Lazy load the YouTube player
//https://www.youtube.com/watch?v=ysz5S6PUM-U
//https://drive.google.com/file/d/1W6vqG4GLIPLeSG_0OCY4BbNSg8rXpuSd/view?usp=sharing
