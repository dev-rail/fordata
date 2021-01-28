import React, { useEffect, useRef } from "react";
import styles from "./sectionTwo.module.css";
import network from "../../../asset/img/network.svg";
import machineLearning from "../../../asset/img/machine-learning.svg";
import dataScience from "../../../asset/img/data-science.svg";
import support from "../../../asset/img/support.svg";
import { Link } from "react-router-dom";
import decor from "../../../asset/img/decor-1.png";

const SectionTwo = () => {
  let section = useRef(null);

  return (
    <section className={styles.section} ref={section}>
      <div className="container">
        <div className={styles.introSection}>
          <p>
            <i className="bi bi-arrow-bar-right mr-4"></i>our services
          </p>
          <h2>Data sceince solutions for startup and enterprises</h2>
          <img src={decor} alt="rings" />
          <p className={styles.desc}>
            As a solution providing company we offer a range consulting,
            development quality testing services with 100% satisfaction. We are
            more than just a solution.
          </p>
        </div>
        {/* intro ends */}
        <div className={styles.cardSection}>
          <div className={"row"}>
            <div className={"col-lg-4 col-md-6"} id="data-engineering">
              <div className={styles.item}>
                <Link to="/#">Data Engineering</Link>
                <div className={styles.iconWrapper}>
                  <div className={styles.imgWrapper}>
                    <img src={network} alt="BI" />
                  </div>
                  <div className={styles.rotateWrapper}>
                    <i className={"fa fa-circle"}></i>
                  </div>
                </div>
                <div className={styles.subServices}>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Data Pipeline
                    (ETL).
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Data
                    Management
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Data
                    Warehousing.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-4 col-md-6"} id="ml-ai">
              <div className={styles.item}>
                <Link to="/#">Machine Learning/ A.I Interpretation</Link>
                <div className={styles.iconWrapper}>
                  <div className={styles.imgWrapper}>
                    <img src={machineLearning} alt="BI" />
                  </div>
                  <div className={styles.rotateWrapper}>
                    <i className={"fa fa-circle"}></i>
                  </div>
                </div>
                <div className={styles.subServices}>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Predictive
                    Analysis.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Descriptive
                    Analysis.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Workflow
                    Automation.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-4 col-md-6"} id="data-visualization">
              <div className={styles.item}>
                <Link to="/#">Data Visualization</Link>
                <div className={styles.iconWrapper}>
                  <div className={styles.imgWrapper}>
                    <img src={dataScience} alt="BI" />
                  </div>
                  <div className={styles.rotateWrapper}>
                    <i className={"fa fa-circle"}></i>
                  </div>
                </div>
                <div className={styles.subServices}>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Dashboard.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Infographics.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Triggers &amp;
                    Alert.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-4 col-md-6"} id="business-analysis">
              <div className={styles.item}>
                <Link to="/#">Business Analysis</Link>
                <div className={styles.iconWrapper}>
                  <div className={styles.imgWrapper}>
                    <img src={support} alt="BI" />
                  </div>
                  <div className={styles.rotateWrapper}>
                    <i className={"fa fa-circle"}></i>
                  </div>
                </div>
                <div className={styles.subServices}>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>BI
                    Implementation.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Data &amp;
                    Insights Strategy.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Customer
                    Assessments.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-4 col-md-6"} id="software-solutions">
              <div className={styles.item}>
                <Link to="/#">Software Solutions</Link>
                <div className={styles.iconWrapper}>
                  <div className={styles.imgWrapper}>
                    <img src={support} alt="BI" />
                  </div>
                  <div className={styles.rotateWrapper}>
                    <i className={"fa fa-circle"}></i>
                  </div>
                </div>
                <div className={styles.subServices}>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Web
                    Development
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Application
                    Development.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Frontend
                    Development.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Backend
                    Development.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>Middleware.
                  </p>
                  <p>
                    <i className="bi bi-arrow-bar-right mr-1"></i>API
                    Development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
