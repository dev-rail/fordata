import React, { useEffect, useRef } from "react";
import Navbar from "../Header/Navbar";
import styles from "./sectionOne.module.css";
import shape55 from "../../asset/img/shape-55.png";
// import shape56 from "../../asset/img/new-blob-red.svg";
import shape56 from "../../asset/img/shape-56.png";
import banner_1_1 from "../../asset/img/banner-1-1.png";
import banner_1_2 from "../../asset/img/banner-1-2.png";
import banner_1_3 from "../../asset/img/banner-1-3.png";
import banner_1_4 from "../../asset/img/banner-1-4.png";
import banner_1_5 from "../../asset/img/banner-1-5.png";
import banner_1_6 from "../../asset/img/banner-1-6.png";
import pie_chart_1 from "../../asset/img/pie-chart-1.png";
import arrow_4 from "../../asset/img/arrow-4.png";
import dollar_1 from "../../asset/img/dollar-1.png";
import dollar_2 from "../../asset/img/dollar-2.png";
import dollar_3 from "../../asset/img/dollar-3.png";
import dollar_4 from "../../asset/img/dollar-4.png";
import dollar_5 from "../../asset/img/dollar-5.png";
// import wheel_1 from "../../asset/img/wheel-1.png";
import wheel_2 from "../../asset/img/wheel-2.png";
import wheel_3 from "../../asset/img/wheel-3.png";
import wheel_4 from "../../asset/img/wheel-4.png";
import wheel_5 from "../../asset/img/wheel-5.png";

import { Link } from "react-router-dom";
import {
  fromTopCoin1,
  fromTopCoinThree,
  fromTopCoinEight,
  fromTopCoinSixteen,
  fromTopCoinFull,
} from "../Animation";
const SectionOne = () => {
  let oneCoin = useRef(null);
  let threeCoin = useRef(null);
  let eightCoin = useRef(null);
  let sixteenCoin = useRef(null);
  let fullCoin = useRef(null);
  // let oneCoin = useRef(null);
  useEffect(() => {
    fromTopCoin1(oneCoin.current);
    fromTopCoinThree(threeCoin.current);
    fromTopCoinEight(eightCoin.current);
    fromTopCoinSixteen(sixteenCoin.current);
    fromTopCoinFull(fullCoin.current);
  }, []);
  return (
    <>
      <section className={styles.sectionOne}>
        <div className={styles.navWrapper}>
          <Navbar />
        </div>
        <div className={styles.main + " container"} id="home">
          <div className={styles.contents}>
            <div className={"row"}>
              <div className={styles.col1 + " col-lg-6"}>
                <div className={styles.item1}>
                  <div className={styles.item1Wrapper}>
                    <h1>Turn data into insight with For|Data</h1>
                    <p>
                      FOR|DATA brings the power of data science and artificial
                      intelligence to every business.
                    </p>
                    <div className={styles.ctaDiv + " d-flex flex-wrap"}>
                      <div className={styles.learnMoreWrapper}>
                        <button className="btn">
                          <Link to="/#">Learn More</Link>
                        </button>
                      </div>
                      <div className={styles.getStartedWrapper}>
                        <button className="btn">
                          <Link to="/#">Get Started</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                  <img src={wheel_2} alt="wheel" className={styles.wheel_2} />
                  <img src={wheel_3} alt="wheel" className={styles.wheel_3} />
                  <img src={wheel_4} alt="wheel" className={styles.wheel_4} />
                  <img src={wheel_5} alt="wheel" className={styles.wheel_5} />
                </div>
              </div>
              <div className={styles.col2 + " col-lg-6"}>
                <div className={styles.item2}>
                  <div className={styles.item2Wrapper}>
                    <img
                      src={banner_1_1}
                      alt="banner-screen-big"
                      className={styles.banner_1_1}
                    />
                    <img
                      src={banner_1_2}
                      alt="banner-screen-big"
                      className={styles.banner_1_2}
                    />
                    <img
                      src={banner_1_3}
                      alt="banner-laptop-big"
                      className={styles.banner_1_3}
                    />
                    <img
                      src={banner_1_4}
                      alt="banner-lady-light"
                      className={styles.banner_1_4}
                    />
                    <img
                      src={banner_1_5}
                      alt="banner-man-up"
                      className={styles.banner_1_5}
                    />
                    <img
                      src={banner_1_6}
                      alt="banner-man-chart"
                      className={styles.banner_1_6}
                    />
                    <img
                      src={pie_chart_1}
                      alt="pie chart"
                      className={styles.pie_chart_1}
                    />
                    <div className={styles.coinWrapper}>
                      <img
                        src={arrow_4}
                        alt="arrow 4"
                        className={styles.arrow_4}
                      />
                      <img
                        src={dollar_1}
                        alt="arrow 4"
                        className={styles.dollar_1}
                        ref={threeCoin}
                      />
                      <img
                        src={dollar_5}
                        alt="arrow 4"
                        className={styles.dollar_5}
                        ref={oneCoin}
                      />
                      <img
                        src={dollar_4}
                        alt="arrow 4"
                        className={styles.dollar_4}
                        ref={fullCoin}
                      />
                      <img
                        src={dollar_3}
                        alt="arrow 4"
                        className={styles.dollar_3}
                        ref={sixteenCoin}
                      />
                      <img
                        src={dollar_2}
                        alt="arrow 4"
                        className={styles.dollar_2}
                        ref={eightCoin}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main ends */}
        <div className={styles.doughnutOne}>
          <img src={shape55} />
        </div>
        <div className={styles.doughnutTwo}>
          <img src={shape56} />
        </div>
      </section>
    </>
  );
};

export default SectionOne;
