import React, { useState, useEffect } from "react";
import "./App.scss";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, useLocation } from "react-router-dom";
import DesignPage from "./Components/DesignPage/DesignPage";
import TiltingEyes from "./Components/util/TiltingEyes/TiltingEyes";
import DeveloperPage from "./Components/DeveloperPage/DeveloperPage";
import gsap from "gsap";
import ContactPopUp from "./Components/ContactPopup/ContactPopUp";
import { AnimatePresence, motion } from "framer-motion";
import { withRouter } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import HeroComp from "./Components/util/HeroComp";
import Cursors from "./Components/Cursor/Cursors";
import Cursor from "./Components/Cursor/CursorCursor";
function App(props) {
  const location = useLocation();
  window.onload = () => {
    gsap.from(document.body, {
      opacity: 0,
      duration: 1,
      ease: "Power3.easeInOut",
    });
    let cursor = new Cursor(document.getElementsByClassName("cursor")[0]);
  }
 

  if (
    props.history.location.pathname === "/" ||
    props.history.location.pathname === "/designer"
  ) {
    document.body.style.backgroundColor = "#ffd42d";
  } else if (props.history.location.pathname === "/developer") {
    document.body.style.backgroundColor = "#fb6542";
  } else if (props.history.location.pathname === "/about") {
    document.body.style.backgroundColor = " #1544cd";
  }

  const [pageData, setPageData] = useState([
    {
      introTitle: "INTRO",
      introHead:
        " I am a Designer who codes.I strive to create simple, original and impactful User Experiences.",
      introDesc:
        " I mainly use Adobe Tool to design UI/UX. And then a Javascript Library known as Reactjs to implement it.I also use many other tools to achieve the main Goal and to create better Front End Experience of my App.",
    },
    {
      introTitle: "ABOUT ME",
      introHead:
        "Hey! My name is Wasiq Abdullah and I'm Front-End Designer & Developer who convert your ideas into Reality.",
      introDesc:
        "The main area of my expertise is Front-End Design & Development (client side of web). I can design and develop slick, interactive, Responsive and Performance Efficient Web Apps. I also have experience of creating websites on CMS like Wordpress, Wix Website Builder and others.",
    },
  ]);
  return (
    <>
    <Cursors />
     <Navbar /> 
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
        <Route
            exact
            path="/about"
            component={() => <AboutPage text="Who" pageData={pageData[1]} />}
          />
          <Route
            exact
            path="/designer"
            component={() => (
              <DesignPage page="design" text="Design" pageData={pageData[1]} />
            )}
          />
          <Route
            exact
            path="/developer"
            component={() => (
              <DeveloperPage
                page="develop"
                text="Develop"
                pageData={pageData[1]}
              />
            )}
          /> 
          <Route
            exact
            path="/"
            component={() => (
              <HomePage page="home" text="Hello!" pageData={pageData[0]} />
            )}
          /> 
        </Switch>
      </AnimatePresence>  
    </>
  );
}
export default withRouter(App);
