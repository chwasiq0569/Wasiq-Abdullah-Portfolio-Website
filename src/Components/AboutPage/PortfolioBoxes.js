import React from "react";
import { changeRouteOne } from "./../util/utils";

const PortfolioBoxes = (props) => {
  return (
    <div className="moreAboutMe__Section">
      <h1 className="aboutMe__Text">My Portfolios</h1>
      <div className="portfolioBoxes">
        <div
          className="leftBox"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="300"
          onClick={() => changeRouteOne("/designer", 0, props)}
        >
          Designer
        </div>
        <div
          className="rightBox"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          onClick={() => changeRouteOne("/developer", 0, props)}
        >
          Developer
        </div>
      </div>
    </div>
  );
};

export default PortfolioBoxes;
