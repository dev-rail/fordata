import React from "react";
import styles from "./sectionSeven.module.css";
import decor from "../../../asset/img/decor-1.png";
import wheel3B from "../../../asset/img/wheel-3.png";
import wheel5R from "../../../asset/img/wheel-2.png";
import { Link } from "react-router-dom";

const SectionSeven = () => {
  return (
    <section className={styles.section} id="pricing">
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-6 col-md-5"}>
            <div className={styles.intro}>
              <p>
                <i className="bi bi-arrow-bar-right mr-4"></i>Our Plans &amp;
                Pricing
              </p>
              <h2>Our affordable pricing plans</h2>
              <img src={decor} alt="icon" />
              <p className={styles.desc}>
                We are experts in the automation of extracting business
                intelligence from data, cleanup and redesign of messy systems;
                and optimization of profit through data analysis using machine
                learning and artificial intelligence interpretation.
              </p>
              <div className={styles.wheels}>
                <img src={wheel3B} alt="wheel" />
                <img src={wheel5R} alt="wheel" />
              </div>
            </div>
          </div>
          <div className={"col-lg-2 col-md-1"}></div>
          <div className={"col-lg-4 col-md-6"}>
            <div className={styles.item}>
              <div className={styles.front}>
                <div className={styles.up}>
                  <p>
                    <i className={"bi bi-hourglass-top"}></i>Monthly
                  </p>
                  <div className={styles.priceTag}>
                    <s>N</s>120,000<sup></sup>
                  </div>
                </div>
                <div className={styles.down}>
                  <div className={styles.content}>
                    <ul>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>ML &amp; AI Solutions</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Power BI &amp; Tableau visualizations</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Data Analysis</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Data Servers/API Management</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Business insights/ Recomendations</p>
                      </li>
                    </ul>
                    <div className={styles.cta}>
                      <Link to="/#">
                        <i className="bi bi-box-arrow-in-right mr-4"></i>Learn
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Cards */}
        <div className={"row"}>
          <div className={"col-lg-4 col-md-6"}>
            <div className={styles.item}>
              <div className={styles.front}>
                <div className={styles.up}>
                  <p>
                    <i className={"bi bi-hourglass-top"}></i>Quarterly
                  </p>
                  <div className={styles.priceTag}>
                    <s>N</s>300,000<sup></sup>
                  </div>
                </div>
                <div className={styles.down}>
                  <div className={styles.content}>
                    <ul>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>ML &amp; AI Solutions</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Power BI &amp; Tableau visualizations</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Data Analysis</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Data Servers/API Management</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Business insights/ Recomendations</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Database development /API Building.</p>
                      </li>
                    </ul>
                    <div className={styles.cta}>
                      <Link to="/#">
                        <i className="bi bi-box-arrow-in-right mr-4"></i>Learn
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className={"col-lg-4 col-md-6"}>
            <div className={styles.item}>
              <div className={styles.front}>
                <div className={styles.up}>
                  <p>
                    <i className={"bi bi-hourglass-bottom"}></i>Yearly
                  </p>
                  <div className={styles.priceTag}>
                    <s>N</s>1,000,000<sup></sup>
                  </div>
                </div>
                <div className={styles.down}>
                  <div className={styles.content}>
                    <ul>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>ML &amp; AI Solutions</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Power BI &amp; Tableau visualizations</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Data Analysis</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Data Servers/API Management</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Business insights/ Recomendations</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Database development /API Building.</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Market Research/ Survey.</p>
                      </li>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Qualitative/ Quantitative Research.</p>
                      </li>
                      {/* <li className={"v-hidden"}>{"hidden"}</li>
                      <li className={"v-hidden"}>{"hidden"}</li> */}
                    </ul>
                    <div className={styles.cta}>
                      <Link to="/#">
                        <i className="bi bi-box-arrow-in-right mr-4"></i>Learn
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={"col-lg-4 col-md-6"}>
            <div className={styles.item}>
              <div className={styles.front}>
                <div className={styles.up}>
                  <p>
                    <i className={"bi bi-hourglass-bottom"}></i>Special Package
                  </p>
                  <div className={styles.priceTag}>
                    <s>N</s>
                    <p>Contact Us</p>
                  </div>
                </div>
                <div className={styles.down}>
                  <div className={styles.content}>
                    <ul>
                      <li className="d-flex">
                        <i className={"bi bi-check2-circle"}></i>
                        <p>Request for custom services</p>
                      </li>
                      <li className={"v-hidden"}>{"hidden"}</li>
                      <li className={"v-hidden"}>{"hidden"}</li>
                      <li className={"v-hidden"}>{"hidden"}</li>
                      <li className={"v-hidden"}>{"hidden"}</li>
                      <li className={"v-hidden"}>{"hidden"}</li>
                    </ul>
                    <div className={styles.cta}>
                      <Link to="/#">
                        <i className="bi bi-box-arrow-in-right mr-4"></i>Learn
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
