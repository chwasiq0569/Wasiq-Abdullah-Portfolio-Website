import React, { useEffect } from "react";
import DeveloperPageHero from "./DeveloperPageHero";
import "../util/introSection.scss";
import Footer from "./../util/Footer";
import TiltingEyes from "./../util/TiltingEyes/TiltingEyes";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { motion } from "framer-motion";
import IntroSection from "./../util/IntroSection";
import IconContainer from "../util/IconContainer/IconContainer";
import {
  row1,
  row2,
  row3,
  toolsIcons,
} from "../util/ImagesAndIconsData/Developer/DeveloperIcons";
import ProjectContainer from "../util/ProjectContainer.js/ProjectContainer";
import { projectsData } from "../util/ImagesAndIconsData/Developer/ProjectsData";

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
                    key={r.Icon}
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
                    key={r.Icon}
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
                    key={r.Icon}
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
                  key={t.Icon}
                  className={t.className}
                  data={t.data}
                  delay={t.delay}
                  duration={t.duration}
                  text={t.text}
                  Icon={t.Icon}
                  altText={t.altText}
                  innerClass={t.innerClass}
                  innerTextClass={t.innerTextClass}
                />
              ))}
            </div>
          </div>

          <div className="workSectionDev">
            <h1 className="titleHead">Work</h1>
            <div className="projects">
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
                innerTextClass={projectsData[0].innerTextClass}
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
                  innerTextClass={projectsData[1].innerTextClass}
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
                  innerTextClass={projectsData[2].innerTextClass}
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
                innerTextClass={projectsData[3].innerTextClass}
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
