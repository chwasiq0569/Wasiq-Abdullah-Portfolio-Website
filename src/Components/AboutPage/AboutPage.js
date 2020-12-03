import React, { useEffect } from "react";
import IntroSection from "../util/IntroSection";
import Footer from "../util/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import AboutPageHero from "./AboutPageHero";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WorkedWithComp from "./WorkedWithComp";
import PortfolioBoxes from "./PortfolioBoxes";
import FutureGoalsComp from "./FutureGoalsComp";
const AboutPage = (props) => {
  const { page, text, pageData } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "scroll";
    AOS.init();
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    <motion.div
      className="aboutPage__Wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="aboutPage__inner__Wrapper">
        <AboutPageHero page={page} text={text} />
        <div className="lowerSection">
          <IntroSection page={page} pageData={pageData} />
          <WorkedWithComp />
          <PortfolioBoxes {...props} />
          <FutureGoalsComp {...props} />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default withRouter(AboutPage);
