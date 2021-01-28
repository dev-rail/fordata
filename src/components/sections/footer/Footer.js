import React from "react";
import styles from "./footer.module.css";
import logoSvg from "../../../asset/img/full logo-red-white.svg";
import rings from "../../../asset/img/decor-1.png";
const Footer = () => {
  const date = new Date();
  let thisYear = date.getFullYear();

  return (
    <div className={styles.footer}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-3 col-md-6"}>
            <div className={styles.item + " " + styles.about}>
              <h3>About Company</h3>
              <img src={rings} alt="logo" />
              <p>
                Our goal is to help our clients achieve and maintain best
                positions in their respective industries by bringing the power
                of data science and artificial intelligence to their business.
              </p>
              <img src={logoSvg} alt="logo" className={"mt-4"} />
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={styles.item + " " + styles.contact}>
              <h3>Contact</h3>
              <img src={rings} alt="logo" />
              <ul>
                <li>
                  <span>
                    <i className={"bi bi-phone"}></i>Phone
                  </span>
                  <a href="tel:+2347068619253">+2349021318226</a>
                </li>
                <li>
                  <span>
                    <i className={"bi bi-at"}></i>Email
                  </span>
                  <a href="mailto:info@fordataservices.com">
                    info@fordataservices.com
                  </a>
                </li>
                <li>
                  <span>
                    <i className={"bi bi-building"}></i>Address
                  </span>
                  <a href="#">Plot 22, Olive Church Street, Ago, Lagos</a>
                </li>
              </ul>
              <div className={styles.socials}>
                <ul>
                  <li>
                    <a>
                      <i className={"fa fa-facebook"}></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className={"bi bi-twitter"}></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className={"bi bi-linkedin"}></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className={"bi bi-whatsapp"}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={styles.item}>
              <h3>Useful Links</h3>
              <img src={rings} alt="logo" />
              <ul>
                <li>
                  <a href="/#home">Home</a>
                </li>
                <li>
                  <a href="/#pricing">Pricing</a>
                </li>
                <li>
                  <a href="/#service">Services</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-condition">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={styles.item}>
              <h3>Subscribe</h3>
              <img src={rings} alt="logo" />
              <div className={styles.formWrapper}>
                <div className={styles.emailDiv}>
                  <i className={"bi bi-at"}></i>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className={styles.submit}>
                  <input type="submit" value="Subscribe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightWrapper}>
        <div className={"container"}>
          <div className={styles.content}>
            <div>
              All right researved. For|Data <span>{thisYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
