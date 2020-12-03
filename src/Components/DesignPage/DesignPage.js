import React, { useEffect } from "react";
import IntroSection from "../util/IntroSection";
import "./designPage.scss";
import Footer from "../util/Footer";
import { motion } from "framer-motion";
import DesignPageHero from "./DesignPageHero";
import IconContainer from "../util/IconContainer/IconContainer";
import ProjectContainer from "../util/ProjectContainer.js/ProjectContainer";
import { toolsIconContainer } from "./../util/ImagesAndIconsData/Design/DesignIcons";
import { projectsData } from "./../util/ImagesAndIconsData/Design/ProjectsData";

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
          <div className="toolsSection">
            <h1
              className="toolsHead"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Tools I Use as UI/UX Designer
            </h1>
            {/* <TiltingEyes /> */}
            <div className="toolsIconContainer">
              {toolsIconContainer.map((t) => (
                <IconContainer
                  className={t.className}
                  data={t.data}
                  delay={t.delay}
                  duration={t.duration}
                  Icon={t.Icon}
                  text={t.text}
                  innerClass={t.innerClass}
                  altText={t.altText}
                />
              ))}
            </div>
          </div>

          <div className="workSection">
            <h1 className="title_Head">Work</h1>
            <div className="projects">
              <ProjectContainer
                className={projectsData[0].className}
                data={projectsData[0].data}
                delay={projectsData[0].delay}
                duration={projectsData[0].duration}
                link={projectsData[0].link}
                text={projectsData[0].text}
                innerClass={projectsData[0].innerClass}
                innerTextClass={projectsData[0].innerTextClass}
                Img={projectsData[0].Img}
                altText={projectsData[0].altText}
                innerdata={projectsData[0].innerdata}
                innerduration={projectsData[0].innerduration}
                innerdelay={projectsData[0].innerdelay}
              />

              <div className="twoProjs">
                <ProjectContainer
                  className={projectsData[1].className}
                  data={projectsData[1].data}
                  delay={projectsData[1].delay}
                  duration={projectsData[1].duration}
                  link={projectsData[1].link}
                  text={projectsData[1].text}
                  innerClass={projectsData[1].innerClass}
                  innerTextClass={projectsData[1].innerTextClass}
                  Img={projectsData[1].Img}
                  altText={projectsData[1].altText}
                  innerdata={projectsData[1].innerdata}
                  innerduration={projectsData[1].innerduration}
                  innerdelay={projectsData[1].innerdelay}
                />
                <ProjectContainer
                  className={projectsData[2].className}
                  data={projectsData[2].data}
                  delay={projectsData[2].delay}
                  duration={projectsData[2].duration}
                  link={projectsData[2].link}
                  text={projectsData[2].text}
                  innerClass={projectsData[2].innerClass}
                  innerTextClass={projectsData[2].innerTextClass}
                  Img={projectsData[2].Img}
                  altText={projectsData[2].altText}
                  innerdata={projectsData[2].innerdata}
                  innerduration={projectsData[2].innerduration}
                  innerdelay={projectsData[2].innerdelay}
                />
              </div>
              <ProjectContainer
                className={projectsData[3].className}
                data={projectsData[3].data}
                delay={projectsData[3].delay}
                duration={projectsData[3].duration}
                link={projectsData[3].link}
                text={projectsData[3].text}
                innerClass={projectsData[3].innerClass}
                innerTextClass={projectsData[3].innerTextClass}
                Img={projectsData[3].Img}
                altText={projectsData[3].altText}
                innerdata={projectsData[3].innerdata}
                innerduration={projectsData[3].innerduration}
                innerdelay={projectsData[3].innerdelay}
              />
              <ProjectContainer
                className={projectsData[4].className}
                data={projectsData[4].data}
                delay={projectsData[4].delay}
                duration={projectsData[4].duration}
                link={projectsData[4].link}
                text={projectsData[4].text}
                innerClass={projectsData[4].innerClass}
                innerTextClass={projectsData[4].innerTextClass}
                Img={projectsData[4].Img}
                altText={projectsData[4].altText}
                innerdata={projectsData[4].innerdata}
                innerduration={projectsData[4].innerduration}
                innerdelay={projectsData[4].innerdelay}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default DesignPage;
