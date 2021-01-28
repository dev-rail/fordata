import React, { useEffect, useRef, useState } from "react";
import styles from "./sectionThree.module.css";
import video1 from "../../../asset/img/video-1.jpg";
import Player from "../../Player";
import decor from "../../../asset/img/decor-1.png";
import {
  fromBottom,
  fromBottom_2,
  fromBottom_3,
  fromLeft,
  fromTop,
  opacity,
  textIntro,
} from "../../Animation";
const SectionThree = () => {
  const [item, setItem] = useState("mission");
  const displayHandler = (item) => {
    switch (item) {
      case "mission":
        return <Mission />;
        break;
      case "vision":
        return <Vision />;
        break;
      case "cores":
        return <Cores />;
        break;

      default:
        break;
    }
  };
  return (
    <section id="about">
      <div className={"container"}>
        <div className={styles.menuWrapper}>
          {displayHandler(item)}
          <div className={styles.switcher}>
            <Switcher setItem={setItem} item={item} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;

const Mission = () => {
  let mission = useRef(null);
  let li_1 = useRef(null);
  let li_2 = useRef(null);
  let li_3 = useRef(null);
  let p = useRef(null);
  let h2 = useRef(null);
  let rings = useRef(null);
  useEffect(() => {
    textIntro(mission.current);
    fromBottom(li_1.current);
    fromBottom_2(li_2.current);
    fromBottom_3(li_3.current);
    fromLeft(p.current);
    fromTop(h2.current);
    opacity(rings.current);
  }, []);
  return (
    <div className={styles.contentWrapper} ref={mission}>
      <div className={"row"}>
        <div className={"col-lg-5"}>
          <div className={styles.item}>
            <div className={styles.desc}>
              <p>
                <i className="bi bi-arrow-bar-right mr-4"></i>ABOUT COMPANY
              </p>
              <h2 ref={h2}>
                Our mission is to bring AI solutions and proper data management
                to businesses in africa.
              </h2>
              <div className={styles.rings} ref={rings}>
                <img src={decor} />
              </div>
            </div>
            <p ref={p}>
              Based in Lagos, Nigeria. For|Data brings together experts in Data
              science/analytics, software engineering and consultancy. We were
              founded to design, formulate and make available high-end customer
              data analytics and business insights accessible to every small,
              middle, and enterprise company/business in Africa. We knew that
              between us we had the capacity to tackle the data challenges
              currently faced by most businesses in africa.
            </p>
            {/* <ul>
              <li ref={li_1}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
              <li ref={li_2}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
              <li ref={li_3}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
            </ul> */}
          </div>
        </div>
        <div className={"col-lg-7"}>
          <div className={styles.item}>
            <img src={video1} className={styles.video} />
          </div>
        </div>
      </div>
    </div>
  );
};
const Vision = () => {
  let vision = useRef(null);
  let li_1 = useRef(null);
  let li_2 = useRef(null);
  let li_3 = useRef(null);
  let p = useRef(null);
  let h2 = useRef(null);
  let rings = useRef(null);

  useEffect(() => {
    textIntro(vision.current);
    fromBottom(li_1.current);
    fromBottom_2(li_2.current);
    fromBottom_3(li_3.current);
    fromLeft(p.current);
    fromTop(h2.current);
    opacity(rings.current);
  }, []);
  return (
    <div className={styles.contentWrapper} ref={vision}>
      <div className={"row"}>
        <div className={"col-lg-5"}>
          <div className={styles.item}>
            <div className={styles.desc}>
              <p>
                <i className="bi bi-arrow-bar-right mr-4"></i>ABOUT COMPANY
              </p>
              <h2 ref={h2}>
                Our vision is to turn Africa into a global open source data
                village and elevate every business to its optimal mode.
              </h2>
              <div className={styles.rings} ref={rings}>
                <img src={decor} />
              </div>
            </div>
            <p ref={p}>
              Are things better or worse the second time around, can we really
              do anything more than once. When your vision is crystal clear they
              say it's razor sharp, the focused mind is said to be like a knife,
              but the scalpel is wisdom. Africa has been tackling data problems
              for centuries, it's like a tangled web of knitting wool, we have
              gathered a team of expert knitters to untangle this wool, and we
              are taking it one strand at a time with every client we work with.
            </p>
            {/* <ul>
              <li ref={li_1}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
              <li ref={li_2}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
              <li ref={li_3}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
            </ul> */}
          </div>
        </div>
        <div className={"col-lg-7"}>
          <div className={styles.item}>
            <Player />
            {/* <img src={video1} className={styles.video} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
const Cores = () => {
  let core = useRef(null);
  let li_1 = useRef(null);
  let li_2 = useRef(null);
  let li_3 = useRef(null);
  let p = useRef(null);
  let h2 = useRef(null);
  let rings = useRef(null);
  useEffect(() => {
    textIntro(core.current);
    fromBottom(li_1.current);
    fromBottom_2(li_2.current);
    fromBottom_3(li_3.current);
    fromLeft(p.current);
    fromTop(h2.current);
    opacity(rings.current);
  }, []);
  return (
    <div className={styles.contentWrapper} ref={core}>
      <div className={"row"}>
        <div className={"col-lg-5"}>
          <div className={styles.item}>
            <div className={styles.desc}>
              <p>ABOUT COMPANY</p>
              <h2 ref={h2}>
                Core values is to bring the power of AI to every business
              </h2>
              <div className={styles.rings} ref={rings}>
                <img src={decor} />
              </div>
            </div>
            <p ref={p}>
              As a solution providing company we offer a wide range of
              consulting, development & quality services with 100% satisfaction.
            </p>
            <ul>
              <li ref={li_1}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
              <li ref={li_2}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
              <li ref={li_3}>
                <i className={"fa fa-circle-thin"}></i>
                Idea of denouncing pleasure & praising
              </li>
            </ul>
          </div>
        </div>
        <div className={"col-lg-7"}>
          <div className={styles.item}>
            <img src={video1} className={styles.video} />
          </div>
        </div>
      </div>
    </div>
  );
};
const Switcher = ({ setItem, item }) => {
  return (
    <div className={styles.switchElement}>
      <div className={styles.switchContent}>
        <div
          className={
            item === "mission"
              ? styles.switchItem + " " + styles.activeItem
              : styles.switchItem
          }
          onClick={() => setItem("mission")}
        >
          <span>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            Our Mission
          </span>
          <div className={styles.line}></div>
        </div>
        <div
          className={
            item === "vision"
              ? styles.switchItem + " " + styles.activeItem
              : styles.switchItem
          }
          onClick={() => setItem("vision")}
        >
          <span>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            Our Vision
          </span>
          <div className={styles.line}></div>
        </div>
        <div
          className={
            item === "cores"
              ? styles.switchItem + " " + styles.activeItem
              : styles.switchItem
          }
          onClick={() => setItem("cores")}
        >
          <span>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            Core Values
          </span>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};
