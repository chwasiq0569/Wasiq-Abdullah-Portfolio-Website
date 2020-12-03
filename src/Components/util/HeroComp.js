import React from "react";
import SkateBoardBoy from "../../assets/homePage.png";

import { useRef, useEffect, useState } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import "./heroComp.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const HeroComp = (props) => {
  // here parallax effect is disabled on tablets and mobile devices
  const dontAnimate = useMediaQuery({
    query: "(max-device-width: 760px)",
  });
  let img = useRef(null);
  let heroTxt = useRef(null);
  let textBg = useRef(null);
  const { page, text } = props;
  useEffect(() => {
    console.log("dontAnimate: ", dontAnimate);
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.to(textBg, {
      scrollTrigger: {
        trigger: textBg,
        start: "40% center",
        toggleActions: "play pause reverse none",
        scrub: 1,
      },
      transformOrigin: "center center",
      ease: "power3.in",
      opacity: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        transformOrigin: "top top",
        trigger: heroTxt,
        // start: "60% 40%",
        start: "240vh 45%",
        end: "340vh center",
        toggleActions: "play pause reverse none",
        scrub: 2.5,
      },
    });
    tl.to(heroTxt, {
      transformOrigin: "center center",
      y: "-60vw",
      opacity: 0,
      scale: "0.75",
      ease: "sine.out",
    }).to(img, {
      scale: 0.95,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });
    const scene = document.getElementById("scene");
    const parallax = new Parallax(scene, {
      relativeInput: true,
    });
    parallax.friction(0.01, 0.02);
    return () => {
      parallax.disable();
    };
  }, []);
  return (
    <div className="hero__wrapper">
      <h1
        className={
          page === "home" || page === "about"
            ? "bgHeadingdark"
            : "bgHeadinglight"
        }
        ref={(el) => (textBg = el)}
      >
        DO WHAT YOU LOVE & ACHIEVE YOUR GOALS.{" "}
      </h1>
      <ul className="hero__Section" id="scene" data-clip-relative-input="true">
        <li className="hello__heading layer" data-depth="-0.10">
          <h1
            id="heroTxt"
            ref={(el) => (dontAnimate ? (heroTxt = null) : (heroTxt = el))}
          >
            {text}
          </h1>
        </li>
        <li className="skateBoardBoyImg__Wrapper layer" data-depth="0.50">
          <img
            id="myImg"
            ref={(el) => (dontAnimate ? (img = null) : (img = el))}
            src={SkateBoardBoy}
            alt="SkateBoardBoy"
          />
        </li>
      </ul>
    </div>
  );
};

export default withRouter(HeroComp);
