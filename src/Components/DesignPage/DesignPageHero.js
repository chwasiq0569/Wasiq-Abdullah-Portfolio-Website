import React from "react";
import { useRef, useEffect, useState } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import "../util/heroComp.scss";
import EyeComp from "../util/Eye/EyeComp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const DesignPageHero = (props) => {
  console.log("hsitory.location.pathname: ", props.history.location.pathname);
  const dontAnimate = useMediaQuery({
    query: "(max-device-width: 760px)",
  });
  let img = useRef(null);
  let heroTxt = useRef(null);
  let textBg = useRef(null);
  var scrollPos;
  const { page, text, pageData } = props;
  useEffect(() => {
    console.log("dontAnimate: ", dontAnimate);
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.to(textBg, {
      scrollTrigger: {
        trigger: textBg,
        start: "40% center",
        // start: "240vh 45%",
        // end: "340vh center",
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
      // y: "-60vw",
      y: "-30vw",
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
      <h1 className="bgHeadingdark" ref={(el) => (textBg = el)}>
        DO WHAT YOU LOVE & ACHIEVE YOUR GOALS.
      </h1>
      <ul className="hero__Section" id="scene" data-clip-relative-input="true">
        <li className="design__heading layer" data-depth="-0.10">
          <h1
            id="heroTxt"
            ref={(el) => (dontAnimate ? (heroTxt = null) : (heroTxt = el))}
          >
            {text}
          </h1>
        </li>
        <div
          ref={(el) => (dontAnimate ? (img = null) : (img = el))}
          className="designPage__Wrapper layer"
          data-depth="0.30"
        >
          <EyeComp />
        </div>
      </ul>
    </div>
  );
};

export default withRouter(DesignPageHero);
