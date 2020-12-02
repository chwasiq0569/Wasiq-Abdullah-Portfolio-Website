import React, { useEffect } from "react";
import ICoordinateLogo from "../../assets/Companies/icoordinatewhite.png";
import SevenEhvenLogo from "../../assets/Companies/white.png";
import HeroComp from "../util/HeroComp";
import IntroSection from "../util/IntroSection";
import Footer from "../util/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import MeAnim from "../../assets/MeIcon.json";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import AboutPageHero from "./AboutPageHero";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

const AboutPage = (props) => {
  const meGif = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const { page, text, pageData } = props;
  //used to render lottie animations
  const defaultOptionsRandom = {
    loop: true,
    autoplay: true,
    animationData: MeAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const changeRoute = (route) => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setTimeout(() => props.history.push(route), 600);
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
                <h1>DUANE-FURLONG-STUDIO</h1>
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

          <div className="moreAboutMe__Section">
            <h1 className="aboutMe__Text">My Portfolios</h1>
            <div className="portfolioBoxes">
              <div
                className="leftBox"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="300"
                onClick={() => changeRoute("/designer")}
              >
                Designer
              </div>
              <div
                className="rightBox"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                onClick={() => changeRoute("/developer")}
              >
                Developer
              </div>
            </div>
          </div>

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
                    - I want to become Full-Stack Developer and expert in
                    JavaScript.
                  </li>
                  <li>
                    - To Learn enough continuous integration to successfully
                    deploy such a solution in support of a client project.
                  </li>
                  <li>
                    - To build a startup, kind of sass app that will help other
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
                  width={meGif ? 275 : 350}
                  height={meGif ? 300 : 400}
                  options={defaultOptionsRandom}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default withRouter(AboutPage);
