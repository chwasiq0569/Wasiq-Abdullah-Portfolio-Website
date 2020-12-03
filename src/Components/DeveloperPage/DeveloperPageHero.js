import React from "react";
import { useRef, useEffect } from "react";
import BoyImg from "../../assets/Developer/pose-2-p-500.png";
import DashboardImg from "../../assets/Developer/dashboard-p-800.png";
import UpperCloudImg from "../../assets/Developer/uppercloud.png";
import ChairImg from "../../assets/Developer/chair.png";
import LowerCloud from "../../assets/Developer/lowercloud.png";
import GearImg from "../../assets/Developer/gear.png";
import "./developerPage.scss";
import Parallax from "parallax-js"; // Now published on NPM
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

const DeveloperPageHero = ({ page, pageData, text }) => {
  const isHidden = useMediaQuery({
    query: "(max-device-width: 1025px)",
  });
  const dontAnimate = useMediaQuery({
    query: "(max-device-width: 760px)",
  });

  let refer = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let img4 = useRef(null);
  let img5 = useRef(null);
  let img6 = useRef(null);
  let heroTxt = useRef(null);
  let textBg = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
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
        start: "240vh 45%",
        end: "340vh center",
        toggleActions: "play pause reverse none",
        scrub: 2,
      },
    });
    tl.to(heroTxt, {
      transformOrigin: "center center",
      y: "-60vw",
      ease: "sine.out",
      opacity: 0,
    }).to(".img", {
      scale: 0.95,
      opacity: 0,
      duration: 2.5,
      ease: "power4.out",
    });
    const scene = document.getElementById("scene");
    const parallax = new Parallax(scene, {
      relativeInput: true,
    });
    parallax.friction(0.02, 0.02);
    return () => {
      parallax.disable();
    };
  }, [isHidden]);

  return (
    <div className="herowrapper">
      <h1 className="bgHeadinglight" ref={(el) => (textBg = el)}>
        DO WHAT YOU LOVE & ACHIEVE YOUR GOALS.
      </h1>
      <ul className="heroSection" id="scene" data-clip-relative-input="true">
        <li
          className="developer__heading"
          ref={(el) => (dontAnimate ? (heroTxt = null) : (heroTxt = el))}
          data-depth="-0.07"
        >
          {text}
        </li>
        <li
          className={
            dontAnimate
              ? "BoyImg__Wrapper layer imgg"
              : "BoyImg__Wrapper layer img"
          }
          data-depth="-0.20"
          ref={(el) => (dontAnimate ? (img1 = null) : (img1 = el))}
        >
          <img src={BoyImg} alt="BoyImg" />
        </li>
        <li
          className={
            dontAnimate
              ? "Dashboard__Wrapper layer imgg"
              : "Dashboard__Wrapper layer img"
          }
          data-depth="0.15"
          ref={(el) => (dontAnimate ? (img2 = null) : (img2 = el))}
        >
          <img src={DashboardImg} alt="DashboardImg" />
        </li>
        <li
          className={
            dontAnimate
              ? "UpperCloud__Wrapper layer imgg"
              : "UpperCloud__Wrapper layer img"
          }
          data-depth="0.50"
          ref={(el) => (dontAnimate ? (img3 = null) : (img3 = el))}
        >
          <img src={UpperCloudImg} alt="UpperCloudImg" />
        </li>
        <li
          className={
            dontAnimate
              ? "Chair__Wrapper layer imgg"
              : "Chair__Wrapper layer img"
          }
          data-depth="-0.35"
          ref={(el) => (dontAnimate ? (img4 = null) : (img4 = el))}
        >
          <img src={ChairImg} alt="ChairImg" />
        </li>
        <li
          className={
            dontAnimate
              ? "LowerCloud__Wrapper layer imgg"
              : "LowerCloud__Wrapper layer img"
          }
          data-depth="0.35"
          ref={(el) => (dontAnimate ? (img5 = null) : (img5 = el))}
        >
          <img src={LowerCloud} alt="LowerCloud" />
        </li>
        <li
          className={
            dontAnimate
              ? "GearImg__Wrapper layer imgg"
              : "GearImg__Wrapper layer img"
          }
          data-depth="-0.70"
          ref={(el) => (dontAnimate ? (img6 = null) : (img6 = el))}
        >
          <img src={GearImg} alt="GearImg" />
        </li>
      </ul>
    </div>
  );
};

export default DeveloperPageHero;
