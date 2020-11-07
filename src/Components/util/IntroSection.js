import React, { useEffect } from "react";
import "./introSection.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const IntroSection = ({ page, pageData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="intro__Section">
      <p
        className={
          page === "home" || page === "design" ? "introBlack" : "introWhite"
        }
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {pageData.introTitle}
      </p>
      <h3
        className={
          page === "home" || page === "design"
            ? "intro__HeadlineBlack"
            : "intro__HeadlineWhite"
        }
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {pageData.introHead}
      </h3>
      <h5
        className={
          page === "home" || page === "design"
            ? "intro__DescBlack"
            : "intro__DescWhite"
        }
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        {pageData.introDesc}
      </h5>
    </div>
  );
};

export default IntroSection;
