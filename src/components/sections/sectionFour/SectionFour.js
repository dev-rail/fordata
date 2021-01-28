import React, { useState, useEffect, useRef } from "react";
import styles from "./sectionFour.module.css";
import decor from "../../../asset/img/decor-1.png";
import handleViewport from "react-in-viewport";

import SvgData from "./SvgData";
import { fromBottom } from "../../Animation";

const SectionFour = (props) => {
  const { inViewport, forwardedRef } = props;
  //Scroll to view port animation of bars
  let slide1 = useRef(null);
  const [slideMe, setSLideMe] = useState(false);
  useEffect(() => {
    if (inViewport) {
      setSLideMe(true);
    }
  }, [inViewport]);
  useEffect(() => {
    if (slideMe) {
      fromBottom(slide1.current);
    }
  }, [slideMe]);
  return (
    <section className={""} ref={forwardedRef}>
      <div className={"container"}>
        <div className={styles.intro}>
          <p>
            {" "}
            <i className="bi bi-arrow-bar-right mr-4"></i>Our work process
          </p>
          <h2>Data science solutions for startup</h2>
          <img src={decor} alt="rings" />
          <p className={styles.desc}>
            With so much data to sort through, you need something more from your
            data. We approach case studies in three simple steps and then draw
            accurate conclusions from our study, and finally, inform clients on
            decision making processes.
          </p>
        </div>
        <div className={styles.cardWrapper}>
          <div className="row" ref={slide1}>
            <div className={"col-lg-4"}>
              <div className={styles.item}>
                <div className={styles.imgWrapper}>
                  <div className={styles.number}>
                    <span>1</span>
                    <div className={styles.color}></div>
                  </div>
                  <div className={styles.iconDiv}>
                    <SvgData />
                  </div>
                  <div className={styles.svg}></div>
                  <div className={styles.svgColor}></div>
                </div>
                <a>Frame the Problem/ Opportunity</a>
                <p className="mt-4">
                  We begin by asking the right questions to either qualify or
                  disqualify potential solutions to client specific problem or
                  opportunity..
                </p>
                <div className={styles.line}>
                  <i className={"fa fa-angle-right"}></i>
                </div>
              </div>
            </div>
            <div className={"col-lg-4"}>
              <div className={styles.item}>
                <div className={styles.imgWrapper}>
                  <div className={styles.number}>
                    <span>2</span>
                    <div className={styles.color}></div>
                  </div>
                  <div className={styles.iconDiv}>
                    <SvgData />
                  </div>
                  <div className={styles.svg}></div>
                  <div className={styles.svgColor}></div>
                </div>
                <a>Collect the data</a>
                <p className="mt-4">
                  With task clearly defined and our measurement priorities set,
                  now it’s time to collect data from existing databases or
                  sources on hand.
                </p>
                <div className={styles.line}>
                  <i className={"fa fa-angle-right"}></i>
                </div>
              </div>
            </div>
            <div className={"col-lg-4"}>
              <div className={styles.item}>
                <div className={styles.imgWrapper}>
                  <div className={styles.number}>
                    <span>3</span>
                    <div className={styles.color}></div>
                  </div>
                  <div className={styles.iconDiv}>
                    <SvgData clas={styles.svg} />
                  </div>
                  <div className={styles.svg}></div>
                  <div className={styles.svgColor}></div>
                </div>
                <a>Process the data</a>
                <p className="mt-4">
                  We carry out deeper analysis and interpretation of client data
                  using advance data analysis tools and software. Further
                  reasearch is conducted to recommend the best course of action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ViewportBlock = handleViewport(
  SectionFour /** options: {}, config: {} **/
);

export default ViewportBlock;
