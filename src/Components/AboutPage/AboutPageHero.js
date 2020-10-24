import React from "react";
import AboutPageBoy from "../../assets/aboutPageImg.png";
import { useRef, useEffect, useState } from "react";
import Parallax from "parallax-js"; // Now published on NPM
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./aboutPage.scss";
import { useMediaQuery } from "react-responsive";

const AboutPageHero = (props) => {

  const dontAnimate = useMediaQuery({
    query: "(max-device-width: 760px)",
  });

  let img = useRef(null);
  let heroTxt = useRef(null);
  let textBg = useRef(null);
  var scrollPos;
  const { page, text, pageData } = props;

  useEffect(() => {
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
      // duration: 2,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        transformOrigin: "top top",
        trigger: heroTxt,
        start: "60% center",
        // end: heroTxt.clientHeight,
        toggleActions: "play pause reverse none",
        // markers: true,
        scrub: 2.5,
      },
    });
    tl.to(heroTxt, {
      transformOrigin: "center center",
      y: "-60vw",
      // position: "relative",
      // top: "-60vw",
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
    parallax.friction(0.010, 0.020);
    return () => {
      parallax.disable();
    };
  }, []);

  return (
    <div className="hero__wrapper">
      <h1 className="bgHeadinglight" ref={(el) => (textBg = el)}>
        DO WHAT YOU LOVE & ACHIEVE YOUR DREAMS.
      </h1>
      <ul className="hero__Section" id="scene" data-clip-relative-input="true">
        <li className="about__heading layer" data-depth="-0.10">
          <h1 style={{color: "#96ffca"}} id="heroTxt" ref={(el) => ( dontAnimate ? heroTxt = null : heroTxt = el)}>
            {text}
          </h1>
        </li>
        <li className="aboutPageBoyImg__Wrapper layer" data-depth="0.50">
          <img ref={(el) => (dontAnimate ? img = null : img = el)} src={AboutPageBoy} alt="AboutPageBoy" />
        </li>
      </ul>
    </div>
  );
};

export default AboutPageHero;