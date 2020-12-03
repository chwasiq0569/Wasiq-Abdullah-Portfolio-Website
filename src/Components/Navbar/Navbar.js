import React, { useEffect, useRef, useState } from "react";
import logoImg from "../../assets/FinalBoldLogo.png";
import WhitelogoImg from "../../assets/BoldLogoWhite.png";
import "./navbar.scss";
import { Link, withRouter } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactComponent as Arrow } from "../../assets/next.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import ChildWithRouteAndRef from "../ContactPopup/ContactPopUp";
import { useMediaQuery } from "react-responsive";
import { changeRouteOne } from "./../util/utils";

const Navbar = (props) => {
  const willScroll = useMediaQuery({
    query: "(max-device-width: 760px)",
  });
  const [hideMe, setHideMe] = useState(true);
  const contactRef = useRef(null);
  const [verticalOffset, setVerticalOffset] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (verticalOffset < 5) {
      window.addEventListener("scroll", () => {
        setVerticalOffset(window.pageYOffset);
      });
    }
    console.log("verticalOffset: ", verticalOffset);

    const t2 = gsap.timeline();

    if (verticalOffset >= 5) {
      t2.to(".link", {
        duration: 0.5,
        opacity: 0,
        y: -200,
        delay: 0,
        stagger: 0.3,
        ease: "power3.in",
      });
      t2.to("#svgArrow", {
        opacity: 1,
        top: "0%",
        ease: "sine.out",
        duration: 0.5,
      });
    }
    if (verticalOffset == 0) {
      t2.fromTo(
        ".link",
        { duration: 0.2, opacity: 1, y: -200, delay: 1, stagger: 0.3 },
        { duration: 0.2, opacity: 1, y: 0, delay: 1, stagger: 0.3 }
      );
      t2.to("#svgArrow", {
        opacity: 1,
        top: "-200%",
        ease: "sine.out",
        duration: 0.5,
      });
    }
  }, [verticalOffset]);

  const tl = gsap.timeline();
  tl.fromTo(
    contactRef.current,
    {
      scaleY: 0,
    },
    {
      scaleY: 1,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
    }
  );
  tl.reversed(false);

  const animateIt = () => {
    //animate on click contact
    tl.reversed(!tl.reversed());
    if (hideMe === true) {
      document.body.style.overflow = "hidden";
      setHideMe(!hideMe);
    } else {
      setTimeout(() => {
        setHideMe(!hideMe);
        document.body.style.overflowY = "scroll";
      }, 1000);
    }
  };

  return (
    <div className="Navbar__Wrapper">
      <div
        className={
          props.history.location.pathname === "/" ||
          props.history.location.pathname === "/designer"
            ? "navbar__innerWrapper"
            : props.history.location.pathname === "/about"
            ? "bluenavbar__innerWrapper"
            : "rednavbar__innerWrapper "
        }
      >
        <div className="logo">
          <div className="logo__Wrapper">
            <img
              onClick={() => changeRouteOne("/", 0, props)}
              src={
                props.history.location.pathname === "/" ||
                props.history.location.pathname === "/designer"
                  ? logoImg
                  : props.history.location.pathname === "/developer"
                  ? WhitelogoImg
                  : WhitelogoImg
              }
              alt="Logo"
            />
          </div>
        </div>
        <div
          className={
            props.history.location.pathname === "/" ||
            props.history.location.pathname === "/designer"
              ? "menuItems"
              : "bluemenuItems"
          }
        >
          <li
            className="link"
            onClick={() => changeRouteOne("/about", 0, props)}
          >
            ABOUT
          </li>
          <li
            className="link"
            onClick={() => changeRouteOne("/designer", 0, props)}
          >
            DESIGNER
          </li>
          <li className="link">
            <Link
              to="/developer"
              onClick={() => changeRouteOne("/developer", 0, props)}
            >
              DEVELOPER
            </Link>
          </li>
          <li
            onClick={() => {
              animateIt();
            }}
            className="link"
          >
            CONTACT
          </li>
        </div>
        <div className="lastSection">
          <Menu
            height="1.5rem"
            fill={
              props.history.location.pathname === "/" ||
              props.history.location.pathname === "/designer"
                ? "black"
                : props.history.location.pathname === "/developer"
                ? "white"
                : "white"
            }
            width="1.5rem"
            id="svgMenu"
            onClick={() => {
              if (willScroll) {
                window.scrollTo(0, 0);
                setTimeout(animateIt, 500);
              }
            }}
          />
          <Arrow
            id="svgArrow"
            height="1.2rem"
            width="1.2rem"
            fill={
              props.history.location.pathname === "/" ||
              props.history.location.pathname === "/designer"
                ? "black"
                : props.history.location.pathname === "/developer"
                ? "white"
                : "white"
            }
            style={{
              transform: "rotate(-90deg)",
              position: "relative",
              top: "-200%",
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
      {/* show and hide contact Component on Click*/}
      <div
        className={hideMe ? "hide" : ""}
        style={{ position: "absolute", top: "0", left: 0 }}
      >
        <ChildWithRouteAndRef ref={contactRef} animateIt={animateIt} />
      </div>
    </div>
  );
};

export default withRouter(Navbar);
