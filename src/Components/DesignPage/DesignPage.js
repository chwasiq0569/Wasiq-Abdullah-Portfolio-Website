import React, { useEffect } from "react";
import IntroSection from "../util/IntroSection";
import TiltingEyes from "../util/TiltingEyes/TiltingEyes";
import IllustratorIcon from "../../assets/DesignTools/Illustrator.png";
import PhotoShopIcon from "../../assets/DesignTools/PhotoShop.png";
import XdIcon from "../../assets/DesignTools/ExperienceDesign.png";
import FigmaIcon from "../../assets/DesignTools/Figma.png";
import FramerIcon from "../../assets/DesignTools/framer-512.png";
import AirHuaracheImg from "../../assets/DesignProj/airhuarache.png";
import NikeAirmax from "../../assets/DesignProj/airmax.png";
import CovidTracker from "../../assets/DesignProj/CovidTracker.png";
import SkatedboardBoy from "../../assets/homePage.png";
import "./designPage.scss";
import Footer from "../util/Footer";
import { motion } from "framer-motion";
import DesignPageHero from "./DesignPageHero";

const DesignPage = ({ page, text, pageData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        {/* <HeroComp page={page} text={text} /> */}
        <DesignPageHero page={page} text={text} />
        {/* <div className="ScrollDownBar">
          <div className="iconWrapper">
            <img src={ScrollDownImg} alt="ScrollDownImg" />
          </div>
        </div> */}
        <div className="lowerSection">
          <IntroSection page={page} pageData={pageData} />
          <div className="toolsSection">
            <h1
              className="toolsHead"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Tools I Use as UI/UX Designer
            </h1>
            <TiltingEyes />
            <div className="toolsIconContainer">
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="150"
                data-aos-duration="700"
              >
                <img src={FramerIcon} alt="FramerIcon" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="700"
              >
                <img src={IllustratorIcon} alt="IllustratorIcon" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="250"
                data-aos-duration="700"
              >
                <img src={PhotoShopIcon} alt="PhotoShopIcon" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="700"
              >
                <img src={XdIcon} alt="XdIcon" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="350"
                data-aos-duration="700"
              >
                <img src={FigmaIcon} alt="FigmaIcon" />
              </div>
            </div>
          </div>

          <div className="workSection">
            <h1 className="title_Head">Work</h1>
            <div className="projects">
              <div className="landscapeProj" onClick={() => window.open("https://www.behance.net/gallery/104309977/Nike-Air-Huarache-Page-Design","_blank")}>
                <h1>Air Huarache Page Design</h1>
                <div
                  className="imgWrapper"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"

                >
                  <img src={AirHuaracheImg} alt="AirHuaracheImg" />
                </div>
              </div>
              <div className="twoProjs">
                <div
                  className="leftProj"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  onClick={() => window.open("https://www.behance.net/gallery/104309477/Front-End-Developer-Portfolio-UI","_blank")}
                >
                  <h1 className="titleHead portfoliodesign">
                    Portfolio Design
                  </h1>
                  <div className="imgWrapper">
                    <img src={SkatedboardBoy} alt="SkatedboardBoy" />
                  </div>
                </div>
                <div
                  className="rightProj"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  onClick={() => window.open("https://www.behance.net/gallery/106317571/Ecommerce-Website","_blank")}
                >
                  <h1 className="titleHead">Ecommerce Wesite Design</h1>
                </div>
              </div>
              <div
                className="landscapeProj airmaxdesign"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650"
                onClick={() => window.open("https://www.behance.net/gallery/104338651/Nike-Airmax-Page-Design","_blank")}
              >
                <h1>Nike Airmax Page Design</h1>
                <div className="imgWrapper">
                  <img src={NikeAirmax} alt="NikeAirmax" />
                </div>
              </div>
              <div
                className="landscapeProj coviddesign"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
                onClick={() => window.open("https://www.behance.net/gallery/104342443/Corona-Virus-Tracker-Web-App-Design","_blank")}
              >
                <div className="imgWrapper">
                  <img src={CovidTracker} alt="CovidTracker" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default DesignPage;
