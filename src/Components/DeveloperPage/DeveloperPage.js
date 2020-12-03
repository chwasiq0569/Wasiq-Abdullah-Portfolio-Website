import React, { useEffect } from "react";
// import HeroComp from "../util/HeroComp";
import DeveloperPageHero from "./DeveloperPageHero";
import "../util/introSection.scss";
import Footer from "./../util/Footer";

import TiltingEyes from "./../util/TiltingEyes/TiltingEyes";
//projects
import CovidTrackerImg from "../../assets/DeveloperProj/CovidTracker2.png";
import MovieStreamApp from "../../assets/DeveloperProj/MovieStreamApp.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { motion } from "framer-motion";
import IntroSection from "./../util/IntroSection";
import CartImg from "../../assets/DesignProj/icons8-fast-cart-64.png";
import ChatRoomIcon from "../../assets/DeveloperProj/icons8-chat-room-100.png";
import IconContainer from "./IconContainer";
import { row1, row2, row3, toolsIcons } from "./IconsData";
import ProjectContainer from "./ProjectContainer";

const projectsData = [
  {
    className: "landscapeProj movieStreamProj",
    data: "fade-up",
    delay: "400",
    duration: "1000",
    link: "https://coronavirustracker-2bc65.web.app/",
    Img: CovidTrackerImg,
    altText: "Covid-Tracker Image",
    text: "",
    innerClass: "hideInfo",
  },
  {
    className: "leftProj",
    data: "fade-right",
    delay: "300",
    duration: "700",
    link: "https://social-networking-app-38daf.web.app/",
    altText: "Covid-Tracker Image",
    text: "Chat Room App",
    Img: ChatRoomIcon,
    altText: "Chat Room App Image",
    innerClass: "titleHead portfoliodesign",
  },
  {
    className: "rightProj",
    data: "fade-left",
    delay: "300",
    duration: "700",
    link: "https://ecommerce-app-553b9.web.app/",
    Img: CartImg,
    altText: "Ecommerce App Image",
    text: "Ecommerce App",
    altText: "Ecommerce App Image",
    innerClass: "titleHead",
  },
  {
    className: "landscapeProj coviddesign",
    data: "fade-up",
    delay: "750",
    duration: "1000",
    link: "https://streamproject-4ce54.web.app/",
    Img: MovieStreamApp,
    altText: "Stream App Image",
    text: "Stream App",
    altText: "Stream App Image",
    innerClass: "titleHead",
  },
];

const DeveloperPage = ({ page, text, pageData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "scroll";
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
                {row1.map((r) => (
                  <IconContainer
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
              </div>
              <div className="Row2">
                {row2.map((r) => (
                  <IconContainer
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
                <div
                  className="iconContainer"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                  data-aos-duration="700"
                >
                  <div className="gsap-tooltip">GSAP</div>
                  <p>GSAP</p>
                </div>
              </div>
              <div className="Row3">
                {row3.map((r) => (
                  <IconContainer
                    className={r.className}
                    data={r.data}
                    delay={r.delay}
                    duration={r.duration}
                    text={r.text}
                    Icon={r.Icon}
                    altText={r.altText}
                    innerClass={r.innerClass}
                  />
                ))}
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
              {toolsIcons.map((t) => (
                <IconContainer
                  className={t.className}
                  data={t.data}
                  delay={t.delay}
                  duration={t.duration}
                  text={t.text}
                  Icon={t.Icon}
                  altText={t.altText}
                  innerClass={t.innerClass}
                />
              ))}
            </div>
          </div>

          <div className="workSectionDev">
            <h1 className="titleHead">Work</h1>
            <div className="projects">
              {/* <div className="twoProjs">
                {projectsData.map((pd) => (
                  <div
                    className={pd.className}
                    data-aos={pd.data}
                    data-aos-delay={pd.delay}
                    data-aos-duration={pd.duration}
                    onClick={() => window.open(pd.link, "_blank")}
                  >
                    <h1 className={pd.innerClass}>{pd.text}</h1>
                    <div className="imgWrapper">
                      <img src={pd.Img} alt={pd.altText} />
                    </div>
                  </div>
                ))}
              </div> */}
              <ProjectContainer
                className={projectsData[0].className}
                data={projectsData[0].data}
                delay={projectsData[0].delay}
                duration={projectsData[0].duration}
                link={projectsData[0].link}
                text={projectsData[0].text}
                innerClass={projectsData[0].innerClass}
                Img={projectsData[0].Img}
                altText={projectsData[0].altText}
              />
              <div className="twoProjs">
                <ProjectContainer
                  className={projectsData[1].className}
                  data={projectsData[1].data}
                  delay={projectsData[1].delay}
                  duration={projectsData[1].duration}
                  link={projectsData[1].link}
                  innerClass={projectsData[1].innerClass}
                  Img={projectsData[1].Img}
                  altText={projectsData[1].altText}
                  text={projectsData[1].text}
                />
                <ProjectContainer
                  className={projectsData[2].className}
                  data={projectsData[2].data}
                  delay={projectsData[2].delay}
                  duration={projectsData[2].duration}
                  link={projectsData[2].link}
                  innerClass={projectsData[2].innerClass}
                  Img={projectsData[2].Img}
                  altText={projectsData[2].altText}
                  text={projectsData[2].text}
                />
              </div>
              <ProjectContainer
                className={projectsData[3].className}
                data={projectsData[3].data}
                delay={projectsData[3].delay}
                duration={projectsData[3].duration}
                link={projectsData[3].link}
                innerClass={projectsData[3].innerClass}
                Img={projectsData[3].Img}
                altText={projectsData[3].altText}
                text={projectsData[3].text}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default DeveloperPage;
