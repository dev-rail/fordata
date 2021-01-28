import React from "react";
import styles from "./sectionEight.module.css";
import decor from "../../../asset/img/decor-1.png";

const SectionEight = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row mb-4 pb-4">
          <div className="col-lg-6">
            <div className={styles.itemRow11}>
              <p>
                <i className="bi bi-arrow-bar-right mr-4"></i>Why Choose us
              </p>
              <h2>Reason for people choosing our company</h2>
              <div>
                <img src={decor} alt="rings" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.itemRow12}>
              <p>
                &quot;<i>Data</i> is what you need to do <i>analytics</i>,{" "}
                <i>information</i> is what you need to do <i>business</i>.&quot;
                We are seasoned big data professionals offering our client
                modern digital solutions
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className={styles.itemRow2}>
              <h2>Global Experience</h2>
              <div>
                <i className="bi bi-globe"></i>
                <p>
                  Here at FORDATA, we believe &quot;the world is one big data
                  problem.&quot; We offer our solutions to local and
                  international community.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.itemRow2}>
              <h2>High-Quality Results</h2>
              <div>
                <i className="bi bi-patch-check"></i>
                <p>
                  With our cutting-edge technology driven approach, our client
                  are sure of getting quality result for sustainable business
                  growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.itemRow2}>
              <h2>Support Team</h2>
              <div>
                <i className="bi bi-people"></i>
                <p>
                  Our team of data engineers, software engineers, human resource
                  manager &amp; consultants are always available to work with
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
