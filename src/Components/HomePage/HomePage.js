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

  // const changeRouteOne = (route) => {
  //   window.scrollTo(0, 0);
  //   document.body.style.overflow = "hidden";

  //   //before pushing it will wait 600ms
  //   // props.history.push(route);
  //   setTimeout(() => props.history.push(route), 600);
  // };

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
          ) : null
          // <div className="moreAboutMe__Section">
          //   <h1 className="aboutMe__Text">My Portfolios</h1>
          //   <div className="portfolioBoxes">
          //     <div
          //       className="leftBox"
          //       data-aos="fade-down"
          //       data-aos-duration="500"
          //       data-aos-delay="300"
          //       onClick={() => changeRouteOne("/designer", 600, props)}
          //     >
          //       Designer
          //     </div>
          //     <div
          //       className="rightBox"
          //       data-aos="fade-up"
          //       data-aos-duration="500"
          //       data-aos-delay="300"
          //       onClick={() => changeRouteOne("/developer", 600, props)}
          //     >
          //       Developer
          //     </div>
          //   </div>
          // </div>
          }
          {/* {page === "about" ? (
            <div className="workedWith__Section">
              <div className="tileHead">
                <h1>I Worked For</h1>
              </div>
              <div className="brandsLogos">
                <div
                  className="brandsImg__Container"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <img src={ICoordinateLogo} alt="ICoordinateLogo" />
                </div>
                <div
                  className="brandsName__Container"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <h1>iMotion Studios.</h1>
                </div>
                <div
                  className="brandsImg2__Container"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <img src={SevenEhvenLogo} alt="SevenEhvenLogo" />
                </div>
              </div>
            </div>
          ) : null}
          {page === "about" ? (
            <div className="futureGoals__Section">
              <div className="futureHead">
                <h1>Future Goals</h1>
              </div>
              <div className="boxes">
                {" "}
                <div
                  className="leftSide"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="700"
                >
                  <ul>
                    <li>
                      I want to become Full-Stack Developer and to become an
                      expert in JavaScript.
                    </li>
                    <li>
                      To Learn enough continuous integration to successfully
                      deploy such a solution in support of a client project.
                    </li>
                    <li>
                      To build a startup, kind of sass app that will help other
                      programmers to solve their daily life problem.
                    </li>
                  </ul>
                </div>
                <div
                  className="rightSide"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="700"
                >
                  <Lottie
                    width={350}
                    height={400}
                    options={defaultOptionsRandom}
                  />
                </div>
              </div>
            </div>
          ) : null} */}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default withRouter(HomePage);
