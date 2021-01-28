import React, { useState } from "react";
import SectionFive from "./sections/sectionFive/SectionFive";
import SectionFour from "./sections/sectionFour/SectionFour";
import SectionOne from "./sections/SectionOne";
import SectionThree from "./sections/sectionThree/SectionThree";
import SectionTwo from "./sections/sectionTwo/SectionTwo";
import SectionSix from "./sections/sectionSix/SectionSix";
import SectionSeven from "./sections/sectionSeven/SectionSeven";
import Footer from "./sections/footer/Footer";
import FixedNav from "./Header/FixedNav";
import ScrollToTop from "./ScrollToTop";
import SectionEight from "./sections/sectionEight/SectionEight";
import ConstructionNotice from "./sections/ConstructionNotice";
import Messenger from "./sections/messenger/Messenger";
//
const Home = () => {
  const [notice, setNotice] = useState(false);
  return (
    <div>
      <>
        <FixedNav />
        {/* <section> */}
        <SectionOne />
        {/* About Us */}
        <SectionThree />
        {/* Our services*/}
        <SectionTwo />
        {/* choose us */}
        <SectionEight />
        {/* Work Process */}
        <SectionFour />
        {/* Industries */}
        <SectionFive />
        {/* Skills & facts */}
        <SectionSix />
        {/* Plans Pricing */}
        <SectionSeven />
        {/* footer */}
        <Footer />
        <ScrollToTop />
        <Messenger />
        {notice ? <ConstructionNotice setNotice={setNotice} /> : null}
      </>
    </div>
  );
};

export default Home;
