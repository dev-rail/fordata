import React, { useRef, useState } from "react";

import styles from "./style/fixedNav.module.css";
import logoDs from "../../asset/img/fordata-red-black.png";
import { Link } from "react-router-dom";

const FixedNav = () => {
  const [open, setOpen] = useState(false);
  const [screenSizeChange, setScreenSizeChange] = useState(window.innerWidth);

  let navBar = useRef(null);
  const dropDownCompany = useRef(null);
  const dropDownServices = useRef(null);
  const togCompany = useRef(null);
  const togServices = useRef(null);
  const [fixedNav, setFixedNav] = useState("");

  //
  window.addEventListener("resize", (e) => {
    return setScreenSizeChange(window.innerWidth);
  });

  const scrollPositionHandler = () => {
    // console.log(window.scrollY);
    if (window.scrollY > window.innerHeight / 2) {
      setFixedNav(styles.slideIn);
    } else {
      setFixedNav(styles.slideOut);
    }
  };
  window.addEventListener("scroll", scrollPositionHandler);
  //   console.log(screenSizeChange);

  const togglerCompany = () => {
    //if on large screen disable this function
    if (screenSizeChange > 1000) return null;
    dropDownCompany.current.classList.toggle(styles.expand);
    togCompany.current.classList.toggle(styles.iRotate);
  };
  const togglerServices = () => {
    //if on large screen disable this function
    if (screenSizeChange > 1000) return null;
    dropDownServices.current.classList.toggle(styles.expandServices);
    togServices.current.classList.toggle(styles.iRotate);
  };
  return (
    <div className={styles.fixedNavigation + " " + fixedNav} ref={navBar}>
      <div className="container">
        <div className={styles.bottomNav}>
          <div className={styles.brand}>
            <img src={logoDs} alt="logo" />
          </div>
          <ul className={styles.bottomUl}>
            <li className={styles.itemLi}>
              <Link to="/#" className="">
                Home
              </Link>
            </li>
            <li className={styles.itemLi}>
              <span>
                Company{" "}
                <i
                  className="fa fa-arrow-down"
                  ref={togCompany}
                  onClick={togglerCompany}
                ></i>
              </span>
              <ul className={styles.DropDownUl} ref={dropDownCompany}>
                <li className={styles.dropDownItem}>
                  <Link to="/#about">
                    <i className="fa fa-angle-right"></i>About us
                  </Link>
                </li>
                <li className={styles.dropDownItem}>
                  <Link to="/#">
                    <i className="fa fa-angle-right"></i>Our Team
                  </Link>
                </li>
                <li className={styles.dropDownItem}>
                  <Link to="/#">
                    <i className="fa fa-angle-right"></i>Get In Touch
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.itemLi}>
              <span>
                Services{" "}
                <i
                  className="fa fa-arrow-down"
                  ref={togServices}
                  onClick={togglerServices}
                ></i>
              </span>
              <ul className={styles.DropDownUl} ref={dropDownServices}>
                <li className={styles.dropDownItem}>
                  <a href="/#data-engineering">
                    <i className="fa fa-angle-right"></i>Data Engineering
                  </a>
                </li>
                <li className={styles.dropDownItem}>
                  <a href="/#ml-ai">
                    <i className="fa fa-angle-right"></i>ML &amp; AI
                    Interpretation
                  </a>
                </li>
                <li className={styles.dropDownItem}>
                  <a href="/#data-visualization">
                    <i className="fa fa-angle-right"></i>Data Visualization
                  </a>
                </li>
                <li className={styles.dropDownItem}>
                  <a href="/#business-analysis">
                    <i className="fa fa-angle-right"></i>Business Analysis
                  </a>
                </li>
                <li className={styles.dropDownItem}>
                  <a href="/#software-solutions">
                    <i className="fa fa-angle-right"></i>Software Solutions
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.itemLi}>
              <a href="/#pricing">Pricing</a>
            </li>
            <li className={styles.itemLi}>
              <a href="/#industries">Industries</a>
            </li>
          </ul>
          <div className={styles.getInTouch}>Get in touch</div>
        </div>
      </div>
    </div>
  );
};

export default FixedNav;
