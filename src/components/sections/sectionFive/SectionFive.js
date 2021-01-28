import React from "react";
import styles from "./sectionFive.module.css";
import decor from "../../../asset/img/decor-1.png";
import TransportationSVG from "./TransportationSvg";
import Svg from "./Svg";
import { Link } from "react-router-dom";
import MediaSvg from "./MediaSvg";
import HealthSvg from "./HealthSvg";
import MediaSvg2 from "./MediaSvg2";
const SectionFive = () => {
  return (
    <section className={styles.section} id="industries">
      <div className={"container " + styles.container}>
        <div className={styles.contents}>
          {/* <div className={styles.intro}>
            <p>Industries</p>
            <h2>Industries we are transforming our awesome solutions</h2>
            <img src={decor} />
          </div> */}
          <div className={styles.row + " row text-white"}>
            <div className={"col-lg-6"}>
              <div className={styles.intro}>
                <p>
                  {" "}
                  <i className="bi bi-arrow-bar-right mr-4"></i>Industries
                </p>
                <h2>Industries we are transforming our awesome solutions</h2>
                <div>
                  <img src={decor} alt="rings" />
                </div>
                <div className={styles.industriesCta}>
                  <Link to="/#">All Inductries</Link>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-6"}>
              <div className={styles.item}>
                <div className={styles.up}>
                  <div>
                    <p>Industries</p>
                    <h4>Advertising &amp; Marketing</h4>
                  </div>
                </div>
                <div className={styles.down}>
                  <Svg />
                </div>
                <div className={styles.overlayIconWrapper}>
                  <div className={styles.arrow}>
                    <Link to="/#">
                      <i className={"fa fa-long-arrow-right"}></i>
                    </Link>
                  </div>
                  <MediaSvg />
                </div>
                <div className={styles.slide1}></div>
                <div className={styles.slide2}></div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-6"}>
              <div className={styles.item}>
                <div className={styles.up}>
                  <div>
                    <p>Industries</p>
                    <h4>Financials &amp; Banking</h4>
                  </div>
                </div>
                <div className={styles.down}>
                  <Svg />
                </div>
                <div className={styles.overlayIconWrapper}>
                  <div className={styles.arrow}>
                    <Link to="/#">
                      <i className={"fa fa-long-arrow-right"}></i>
                    </Link>
                  </div>
                  <TransportationSVG />
                </div>
                <div className={styles.slide1}></div>
                <div className={styles.slide2}></div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-6"}>
              <div className={styles.item}>
                <div className={styles.up}>
                  <div>
                    <p>Industries</p>
                    <h4>Health &amp; Medicine</h4>
                  </div>
                </div>
                <div className={styles.down}>
                  <Svg />
                </div>
                <div className={styles.overlayIconWrapper}>
                  <div className={styles.arrow}>
                    <Link to="/#">
                      <i className={"fa fa-long-arrow-right"}></i>
                    </Link>
                  </div>
                  <HealthSvg />
                </div>
                <div className={styles.slide1}></div>
                <div className={styles.slide2}></div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-6"}>
              <div className={styles.item}>
                <div className={styles.up}>
                  <div>
                    <p>Industries</p>
                    <h4>Media &amp; Entertainment</h4>
                  </div>
                </div>
                <div className={styles.down}>
                  <Svg />
                </div>
                <div className={styles.overlayIconWrapper}>
                  <div className={styles.arrow}>
                    <Link to="/#">
                      <i className={"fa fa-long-arrow-right"}></i>
                    </Link>
                  </div>
                  <MediaSvg2 />
                </div>
                <div className={styles.slide1}></div>
                <div className={styles.slide2}></div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-6"}>
              <div className={styles.item}>
                <div className={styles.up}>
                  <div>
                    <p>Industries</p>
                    <h4>Travel &amp; Hospitality</h4>
                  </div>
                </div>
                <div className={styles.down}>
                  <Svg />
                </div>
                <div className={styles.overlayIconWrapper}>
                  <div className={styles.arrow}>
                    <Link to="/#">
                      <i className={"fa fa-long-arrow-right"}></i>
                    </Link>
                  </div>
                  <TransportationSVG />
                </div>
                <div className={styles.slide1}></div>
                <div className={styles.slide2}></div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-6"}>
              <div className={styles.item}>
                <div className={styles.up}>
                  <div>
                    <p>Industries</p>
                    <h4>Transportation &amp; Logistics</h4>
                  </div>
                </div>
                <div className={styles.down}>
                  <Svg />
                </div>
                <div className={styles.overlayIconWrapper}>
                  <div className={styles.arrow}>
                    <Link to="/#">
                      <i className={"fa fa-long-arrow-right"}></i>
                    </Link>
                  </div>
                  <TransportationSVG />
                </div>
                <div className={styles.slide1}></div>
                <div className={styles.slide2}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.turn}></div>
      <div className={styles.turnCounter}></div>
    </section>
  );
};

export default SectionFive;
