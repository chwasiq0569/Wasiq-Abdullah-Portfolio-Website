import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import ICoordinateLogo from "../../assets/Companies/icoordinatewhite.png";
import SevenEhvenLogo from "../../assets/Companies/white.png";
import HeroComp from "../util/HeroComp";
import IntroSection from "../util/IntroSection";
import Footer from "../util/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import MeAnim from "../../assets/MeIcon.json";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { changeRouteOne } from "../util/utils";

const HomePage = (props) => {
  const { page, text, pageData } = props;
  const defaultOptionsRandom = {
    loop: true,
    autoplay: true,
    animationData: MeAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "scroll";
    AOS.init();
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    //motion.div is used for route transition
    <motion.div
      className={page === "home" ? "homePage__Wrapper" : "aboutPage__Wrapper"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div
        className={
          page === "home"
            ? "homePage__inner__Wrapper"
            : "aboutPage__inner__Wrapper"
        }
      >
        <HeroComp page={page} text={text} />
        <div className="lowerSection">
          <IntroSection page={page} pageData={pageData} />
          {page === "home" ? (
            <div className="moreAboutMe__Section">
              <h1 className="aboutMe__Text" data-aos="fade-up">
                Wanna Xplore More About Me?
              </h1>
              <div className="container">
                <div
                  className="btn btn-border-4"
                  onClick={() => changeRouteOne("/about", 600, props)}
                >
                  ABOUT ME
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default withRouter(HomePage);
