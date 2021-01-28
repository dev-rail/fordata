import React, { useState } from "react";

const ScrollToTop = () => {
  const [scroll, setScroll] = useState("");

  const scrollPositionHandler = () => {
    // console.log(window.scrollY);
    if (window.scrollY > window.innerHeight / 2) {
      setScroll("show-scroll");
    } else {
      setScroll("hide-scroll");
    }
  };
  window.addEventListener("scroll", scrollPositionHandler);
  //   console.log(screenSizeChange);
  return (
    <a href="#home">
      <div className={`scrollToTop + ${scroll}`}>
        <i className="bi bi bi-arrow-bar-up arrowUp"></i>
      </div>
    </a>
  );
};

export default ScrollToTop;
