import React, { useRef, useState } from "react";
import styles from "./style/navbar.module.css";
import logoDs from "../../asset/img/fordata-red-black.png";
// import logoDs from "../../asset/img/full logo-red-blue.svg";
import logoDsAlt from "../../asset/img/fordata-white.png";
// import logoDsAlt from "../../asset/img/full logo-white-blue.svg";
import logo from "../../asset/img/fordata-red-white.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [screenSizeChange, setScreenSizeChange] = useState(window.innerWidth);

  let navBar = useRef(null);
  const dropDownCompany = useRef(null);
  const dropDownServices = useRef(null);
  const togCompany = useRef(null);
  const togServices = useRef(null);
  const overlay = useRef(null);
  const [fixedNav, setFixedNav] = useState("");

  //
  window.addEventListener("resize", (e) => {
    return setScreenSizeChange(window.innerWidth);
  });

  const scrollPositionHandler = () => {
    // console.log(window.scrollY);
    if (window.scrollY > window.innerHeight / 2) {
      // setFixedNav(styles.fixedClass + " " + styles.activateFixed);
    } else if (window.scrollY > window.innerHeight / 5) {
      // console.log("fixed");
      // setFixedNav(styles.fixedClass);
    } else {
      setFixedNav(" ");
    }
  };
  window.addEventListener("scroll", scrollPositionHandler);
  //   console.log(screenSizeChange);
  const toggler = () => {
    //if on large screen disable this function
    if (screenSizeChange > 1000) return null;
    navBar.current.classList.toggle(styles.closeNav);
    overlay.current.classList.toggle(styles.overlayOpen);
  };
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
    <>
      <section className={styles.sectionNav}>
        <div className={styles.cWrapper + " container"}>
          <div className={styles.topNav}>
            <div className={styles.brand}>
              {screenSizeChange >= 1000 ? (
                <img src={logoDsAlt} alt="logo" />
              ) : (
                <img src={logoDs} alt="logo" />
              )}
            </div>
            <div className={styles.topRight}>
              <ul className={styles.ulContact}>
                <li className={styles.item}>
                  <a>
                    <i className="fa fa-play mr-4"></i>Start your project today
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="tel:+2349021318226">+2349021318226</a>
                </li>
              </ul>
              <ul className={styles.ulSocials}>
                <li className={styles.item}>
                  <a>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className={styles.item}>
                  <a>
                    <i className="fa fa-skype"></i>
                  </a>
                </li>
                <li className={styles.item}>
                  <a>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <hr></hr>
            </div>
          </div>
          <div className={styles.bottomNav + " " + fixedNav} ref={navBar}>
            <div className={styles.brand}>
              <img src={logo} />
              <i
                className={styles.secondaryToggler + " fa fa-times"}
                onClick={toggler}
              ></i>
            </div>
            <div
              className={styles.overlayMobileUL}
              ref={overlay}
              onClick={toggler}
            ></div>
            <ul className={styles.bottomUl}>
              <li className={styles.itemLi}>
                <Link to="/#" className="text-white">
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
                    <a href="/#about" onClick={toggler}>
                      <i className="fa fa-angle-right"></i>About us
                    </a>
                  </li>
                  <li className={styles.dropDownItem}>
                    <Link to="/#" onClick={toggler}>
                      <i className="fa fa-angle-right"></i>Our Team
                    </Link>
                  </li>
                  <li className={styles.dropDownItem}>
                    <Link to="/#" onClick={toggler}>
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
                    <a href="/#data-engineering" onClick={toggler}>
                      <i className="fa fa-angle-right"></i>Data Engineering
                    </a>
                  </li>
                  <li className={styles.dropDownItem}>
                    <a href="/#ml-ai" onClick={toggler}>
                      <i className="fa fa-angle-right"></i>ML &amp; AI
                      Interpretation
                    </a>
                  </li>
                  <li className={styles.dropDownItem}>
                    <a href="/#data-visualization" onClick={toggler}>
                      <i className="fa fa-angle-right"></i>Data Visualization
                    </a>
                  </li>
                  <li className={styles.dropDownItem}>
                    <a href="/#business-analysis" onClick={toggler}>
                      <i className="fa fa-angle-right"></i>Business Analysis
                    </a>
                  </li>
                  <li className={styles.dropDownItem}>
                    <a href="/#software-solutions" onClick={toggler}>
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
            <div className={styles.contact}></div>
          </div>
          <div className={styles.togglerWrapper}>
            <div className={styles.ctaGetInTouch}>
              <a>Get in touch</a>
            </div>
            <i className="fa fa-bars" onClick={toggler}></i>
          </div>
          <div className={styles.downNav}></div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
