import React, { useEffect } from "react";
import IntroSection from "../util/IntroSection";
import "./designPage.scss";
import Footer from "../util/Footer";
import { motion } from "framer-motion";
import DesignPageHero from "./DesignPageHero";
import WorkSection from "./WorkSection";
import ToolsComponent from "./ToolsComponent";

const DesignPage = ({ page, text, pageData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "scroll";
  }, []);

  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="designPage__Wrapper"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 2, ease: "easeIn" }}
    >
      <div className="designPage__inner__Wrapper">
        <DesignPageHero page={page} text={text} />
        <div className="lowerSection">
          <IntroSection page={page} pageData={pageData} />
          <ToolsComponent />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default DesignPage;
