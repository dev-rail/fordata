import React from "react";
import styles from "./sectionFive.module.css";
const Svg = () => {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      id="blobSvg"
      className={styles.svg}
    >
      <path
        id="blob"
        d="M423.5,286.5Q464,323,410,328Q356,333,340,348Q324,363,313.5,410.5Q303,458,270.5,424Q238,390,195.5,430Q153,470,144,422Q135,374,99,362.5Q63,351,91.5,311.5Q120,272,118,250Q116,228,102.5,195.5Q89,163,129.5,163Q170,163,170,115Q170,67,202,61Q234,55,266,57.5Q298,60,316.5,90Q335,120,342,146.5Q349,173,356,192Q363,211,373,230.5Q383,250,423.5,286.5Z"
        fill="#d1d8e0"
      ></path>
    </svg>
  );
};

export default Svg;
