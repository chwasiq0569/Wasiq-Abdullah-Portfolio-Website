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
import CartImg from "../../assets/DesignProj/icons8-fast-cart-64.png";
import IconContainer from "../DeveloperPage/IconContainer";
import ProjectContainer from "./../DeveloperPage/ProjectContainer";

const toolsIconContainer = [
  {
    className: "iconContainer",
    data: "zoom-in",
    delay: "150",
    duration: "700",
    Icon: FramerIcon,
    text: "Framer",
    innerClass: "tooltip",
    altText: "Framer",
  },
  {
    className: "iconContainer",
    data: "zoom-in",
    delay: "200",
    duration: "700",
    Icon: IllustratorIcon,
    text: "Illustrator",
    innerClass: "tooltip",
    altText: "Illustrator Icon",
  },
  {
    className: "iconContainer",
    data: "zoom-in",
    delay: "250",
    duration: "700",
    Icon: PhotoShopIcon,
    text: "PhotoShop",
    innerClass: "tooltip",
    altText: "PhotoShop Icon",
  },
  {
    className: "iconContainer",
    data: "zoom-in",
    delay: "300",
    duration: "700",
    Icon: XdIcon,
    text: "Adobe XD",
    innerClass: "tooltip",
    altText: "Xd Icon",
  },
  {
    className: "iconContainer",
    data: "zoom-in",
    delay: "350",
    duration: "700",
    Icon: FigmaIcon,
    text: "Figma",
    innerClass: "tooltip",
    altText: "Figma Icon",
  },
];

const projectsData = [
  {
    className: "landscapeProj",
    data: "fade-up",
    delay: "1000",
    duration: "650",
    link:
      "https://www.behance.net/gallery/104309977/Nike-Air-Huarache-Page-Design",
    Img: AirHuaracheImg,
    altText: "AirHuaracheImg",
    text: "Air Huarache Page Design",
    innerClass: "imgWrapper",
    innerdata: "fade-up",
    innerduration: "1000",
    innerdelay: "400",
  },
  {
    className: "leftProj",
    data: "fade-right",
    delay: "300",
    duration: "700",
    link:
      "https://www.behance.net/gallery/104309477/Front-End-Developer-Portfolio-UI",
    Img: SkatedboardBoy,
    altText: "SkatedboardBoy Image",
    text: "Portfolio Desgin UI",
    innerClass: "imgWrapper",
    innerTextClass: "titleHead portfoliodesign",
    innerdata: "",
    innerduration: "",
    innerdelay: "",
  },
  {
    className: "rightProj",
    data: "fade-left",
    delay: "300",
    duration: "700",
    link: "https://www.behance.net/gallery/106317571/Ecommerce-Website",
    Img: CartImg,
    altText: "Cart Image",
    text: "Ecommerce Wesite Design",
    innerClass: "imgWrapper",
    innerTextClass: "titleHead",
    innerdata: "",
    innerduration: "",
    innerdelay: "",
  },
  {
    className: "landscapeProj airmaxdesign",
    data: "fade-up",
    delay: "650",
    duration: "1000",
    link: "https://www.behance.net/gallery/104338651/Nike-Airmax-Page-Design",
    Img: NikeAirmax,
    altText: "NikeAirmax Image",
    text: "Nike Airmax Page Design",
    innerClass: "imgWrapper",
    innerTextClass: "titleHead",
    innerdata: "fade-up",
    innerduration: "1000",
    innerdelay: "400",
  },

  {
    className: "landscapeProj coviddesign",
    data: "fade-up",
    delay: "750",
    duration: "1000",
    link:
      "https://www.behance.net/gallery/104342443/Corona-Virus-Tracker-Web-App-Design",
    Img: CovidTracker,
    altText: "CovidTracker Image",
    text: "",
    innerClass: "imgWrapper",
    innerTextClass: "",
    innerdata: "",
    innerduration: "",
    innerdelay: "",
  },
];

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
