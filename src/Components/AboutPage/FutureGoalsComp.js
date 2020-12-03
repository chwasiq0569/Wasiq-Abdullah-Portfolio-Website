import React from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";
import MeAnim from "../../assets/MeIcon.json";

const FutureGoalsComp = () => {
  const meGif = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  //used to render lottie animations
  const defaultOptionsRandom = {
    loop: true,
    autoplay: true,
    animationData: MeAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
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
              - I want to become Full-Stack Developer and expert in JavaScript.
            </li>
            <li>
              - To Learn enough continuous integration to successfully deploy
              such a solution in support of a client project.
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
  );
};

export default FutureGoalsComp;
