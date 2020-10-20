import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./tiltingEyes.scss";

const TiltingEyes = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".outer"), {
      max: 60,
      speed: 400,
      perspective: 200,
      reverse: true,
    });
  }, []);
  return (
    <>
      <div className="eyes">
        <div className="outer" data-tilt-full-page-listening>
          <div className="inner">
            <div className="shine"></div>
          </div>
        </div>
        <div className="outer" data-tilt-full-page-listening>
          <div className="inner">
            <div className="shine"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiltingEyes;
