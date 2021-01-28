import React from "react";

const Cursor = ({ pos }) => {
  const styles = {
    position: {
      left: pos.x,
      top: pos.y,
    },
  };

  return <div className={"cursor"} style={styles.position}></div>;
};

export default Cursor;
