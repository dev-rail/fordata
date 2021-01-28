import React, { useEffect, useRef, useState } from "react";
import handleViewport from "react-in-viewport";
import styles from "./sectionSix.module.css";
import illustration from "../../../asset/img/illastration-1.png";
import shape4 from "../../../asset/img/shape-4.png";
import decor from "../../../asset/img/decor-1.png";
import { sliderLength } from "../../Animation";
//components
function SectionSix(props) {
  const { inViewport, forwardedRef } = props;

  //Scroll to view port animation of bars
  let slide3 = useRef(null);
  let slide2 = useRef(null);
  let slide1 = useRef(null);
  const [slideMe, setSLideMe] = useState(false);
  useEffect(() => {
    if (inViewport) {
      setSLideMe(true);
    }
  }, [inViewport]);
  useEffect(() => {
    if (slideMe) {
      sliderLength(slide3.current);
      sliderLength(slide2.current);
      sliderLength(slide1.current);
    }
  }, [slideMe]);
  //cursor hover effect of image
  const [pos, setPos] = useState({ x: "0", y: "0" });
  const styleSkew = {
    skew: {
      transform: `skew(${pos.x}deg,${pos.y}deg)`,
      transition: `0.3s`,
    },
  };
  const handleMouseOver = (e) => {
    let x = 0.01 * Number(e.clientX);
    let y = 0.01 * Number(e.clientY);
    setPos({ x: x, y: y });
  };
  return (
    <section className={styles.section} ref={forwardedRef}>
      <div className={"container"}>
        <div className={styles.contents}>
          <div className={"row"}>
            <div className={"col-lg-6"}>
              <div
                className={styles.item1}
                onMouseMove={(e) => handleMouseOver(e)}
                onMouseLeave={(e) => setPos({ x: "0", y: "0" })}
              >
                <img
                  src={illustration}
                  style={styleSkew.skew}
                  alt="illustration"
                />
              </div>
            </div>
            <div className={"col-lg-6"}>
              <div className={styles.item2}>
                <div className={styles.intro}>
                  <p>
                    {" "}
                    <i className="bi bi-arrow-bar-right mr-4"></i>Skills &amp;
                    Facts
                  </p>
                  <h2>We keep our self updated with latest trends</h2>
                  <img src={decor} alt="rings" />
                  <p className={styles.desc}>
                    As a solution providing company we offer a range consulting,
                    development quality testing services with 100% satisfaction.
                  </p>
                </div>
                <div className={styles.counters}>
                  <div className={styles.countElement}>
                    <div className={styles.left}>90%</div>
                    <div className={styles.right}>
                      <h5>Data Consulting</h5>
                      <div className={styles.rightDown}>
                        <i className={"bi bi-puzzle " + styles.iconBig}></i>
                        <div className={styles.slides + " d-flex"}>
                          <div className={styles.fullLength}></div>
                          <div
                            className={styles.sliderLength86}
                            ref={slide1}
                          ></div>
                          <i className="fa fa-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.countElement}>
                    <div className={styles.left}>96%</div>
                    <div className={styles.right}>
                      <h5>Business Intelligence</h5>
                      <div className={styles.rightDown}>
                        <i className={"bi bi-puzzle " + styles.iconBig}></i>
                        <div className={styles.slides + " d-flex"}>
                          <div className={styles.fullLength}></div>
                          <div
                            className={styles.sliderLength96}
                            ref={slide2}
                          ></div>
                          <i className="fa fa-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.countElement}>
                    <div className={styles.left}>90%</div>
                    <div className={styles.right}>
                      <h5>Machine Learning / Artificial Intelligence</h5>
                      <div className={styles.rightDown}>
                        <i className={"bi bi-puzzle " + styles.iconBig}></i>
                        <div className={styles.slides + " d-flex"}>
                          <div className={styles.fullLength}></div>
                          <div
                            className={styles.sliderLength80}
                            ref={slide3}
                          ></div>
                          <i className="fa fa-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={shape4} className={styles.elipse} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const ViewportBlock = handleViewport(
  SectionSix /** options: {}, config: {} **/
);

export default ViewportBlock;
