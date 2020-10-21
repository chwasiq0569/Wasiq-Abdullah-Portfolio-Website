import React, { useEffect } from "react";
// import HeroComp from "../util/HeroComp";
import DeveloperPageHero from "./DeveloperPageHero";
import "../util/introSection.scss";
import Footer from "./../util/Footer";
import ScrollDownImg from "../../assets/DownwardIcon.png";
import VsCode from "../../assets/devtools/visualStudio.png";
import Github from "../../assets/devtools/github.png";
import Postman from "../../assets/devtools/icons8-postman-api-128.png";
import Npm from "../../assets/devtools/npm.png";
import WebPack from "../../assets/devtools/icons8-webpack-512.png";
import TiltingEyes from "./../util/TiltingEyes/TiltingEyes";
//projects
import CovidTrackerImg from "../../assets/DeveloperProj/CovidTracker2.png";
import VirtualChatRoomImg from "../../assets/DeveloperProj/VirtualChatRoom.png";
import EcommerceApp from "../../assets/DeveloperProj/EcommerceApp.png";
import MovieStreamApp from "../../assets/DeveloperProj/MovieStreamApp.jpg";
import HTMLIcon from "../../assets/DeveloperLanguages/html5.png";
import CSSIcon from "../../assets/DeveloperLanguages/css.png";
import WordpressIcon from "../../assets/DeveloperLanguages/wordpress.png";
import JSIcon from "../../assets/DeveloperLanguages/javascript.png";
import BootstrapIcon from "../../assets/DeveloperLanguages/bootstrap.png";
import ReactIcon from "../../assets/DeveloperLanguages/react.png";
import NodeJSIcon from "../../assets/DeveloperLanguages/nodejs.png";
import JavaIcon from "../../assets/DeveloperLanguages/java.png";
import SassIcon from "../../assets/DeveloperLanguages/sass.png";
import ReduxIcon from "../../assets/DeveloperLanguages/redux.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { motion } from "framer-motion";
import IntroSection from './../util/IntroSection';

const DeveloperPage = ({ page, text, pageData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      className="developerPage__Wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="developerPage__inner__Wrapper">
        <DeveloperPageHero page={page} text={text} pageData={pageData} />

        <div className="lowerSection">
          <IntroSection page={page} pageData={pageData} />
          {/* ////////////////////////// */}

          <div className="toolsSection">
            <h1
              className="toolsHead"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Languages/Libraries/Frameworks I Use as Developer
            </h1>
            <TiltingEyes />
            <div className="toolsIconContainer">
              <div className="Row1">
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  data-aos-duration="700"
                >
                  <div className="tooltip">HTML5</div>
                  <img src={HTMLIcon} alt="FramerIcon" />
                </div>
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="700"
                >
                  <div className="tooltip">CSS3</div>
                  <img src={CSSIcon} alt="IllustratorIcon" />
                </div>
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  data-aos-duration="700"
                >
                  <div className="tooltip">Javascript</div>
                  <img src={JSIcon} alt="PhotoShopIcon" />
                </div>
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="700"
                >
                  <div className="tooltip">Wordpress</div>
                  <img src={WordpressIcon} alt="XdIcon" />
                </div>
              </div>
              <div className="Row2">
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="350"
                  data-aos-duration="700"
                >
                  <div className="tooltip">Bootstrap</div>
                  <img src={BootstrapIcon} alt="FramerIcon" />
                </div>
                <div
                  className="iconContainer middleBigIcon"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="700"
                >
                  <div className="react-tooltip">React-JS</div>
                  <img src={ReactIcon} alt="XdIcon" />
                </div>
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                  data-aos-duration="700"
                >
                  {/* <img src={NodeJSIcon} alt="FigmaIcon" /> */}
                  <div className="gsap-tooltip">GSAP</div>
                  <p>GSAP</p>
                </div>
              </div>
              <div className="Row3">
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="700"
                >
                  <div className="tooltip">NodeJS</div>
                  <img src={NodeJSIcon} alt="FramerIcon" />
                </div>
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="550"
                  data-aos-duration="700"
                >
                  <div className="tooltip">Java</div>
                  <img src={JavaIcon} alt="IllustratorIcon" />
                </div>
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="700"
                >
                  <div className="tooltip">Sass</div>
                  <img src={SassIcon} alt="PhotoShopIcon" />
                </div>
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="650"
                  data-aos-duration="700"
                >
                  <div className="tooltip">Redux</div>
                  <img src={ReduxIcon} alt="XdIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="toolsSection2">
            <h1
              className="toolsHead"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Tools I Use as Developer
            </h1>
            <div className="toolsIconContainerDev">
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <div className="tooltip">VS-CODE</div>
                <img src={VsCode} alt="VsCode" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                <div className="tooltip">Webpack</div>
                <img src={WebPack} alt="WebPack" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="1000"
              >
                <div className="tooltip">Postman</div>
                <img src={Postman} alt="Postman" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="1200"
                data-aos-duration="1000"
              >
                <div className="tooltip">Github</div>
                <img src={Github} alt="Github" />
              </div>
              <div
                className="iconContainer"
                data-aos="zoom-in"
                data-aos-delay="1400"
                data-aos-duration="1000"
              >
                <div className="tooltip">NPM</div>
                <img src={Npm} alt="Npm" />
              </div>
            </div>
          </div>

          <div className="workSectionDev">
            <h1 className="titleHead">Work</h1>
            <div className="projects">
              <div
                className="landscapeProj movieStreamProj"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                onClick={() => window.open("https://coronavirustracker-2bc65.web.app/","_blank")}
              >
                <div className="imgWrapper">
                  <img src={CovidTrackerImg} alt="AirHuaracheImg" />
                </div>
              </div>
              <div className="twoProjs">
                <div 
                  className="leftProj"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  onClick={() => window.open("https://social-networking-app-38daf.web.app/","_blank")}
                >
                  <h1 className="titleHead portfoliodesign">
                    Chat Room App
                  </h1>
                  <div className="imgWrapper">
                    <img src={VirtualChatRoomImg} alt="SkatedboardBoy" />
                  </div>
                </div>
                <div
                  className="rightProj"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  onClick={() => window.open("https://ecommerce-app-553b9.web.app/","_blank")}
                >
                  <h1 className="titleHead">Ecommerce App</h1>
                  <div className="imgWrapper">
                    <img src={EcommerceApp} alt="SkatedboardBoy" />
                  </div>
                </div>
              </div>

              <div
                className="landscapeProj coviddesign"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
                onClick={() => window.open("https://streamproject-4ce54.web.app/","_blank")}
              >
                <h1 className="titleHead">Stream App</h1>
                <div className="imgWrapper">
                  <img src={MovieStreamApp} alt="CovidTracker" />
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

export default DeveloperPage;
