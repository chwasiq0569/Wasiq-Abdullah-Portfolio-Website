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
        " I am a Designer who codes. I strive to create simple, original and impactful User Experiences.",
      introDesc:
        " I mainly use Adobe Tool to design UI/UX. And then a Javascript Library known as Reactjs to implement it. I also use many other tools to achieve the main Goal and to create better Front End Experience of my App.",
    },
    {
      introTitle: "ABOUT ME",
      introHead:
        "Hey! My name is Wasiq Abdullah and I'm Front-End Designer & Developer who convert your ideas into Reality.",
      introDesc:
        "The main area of my expertise is Front-End Design & Development (client side of web). I can design and develop slick, interactive, Responsive and Performance Efficient Web Apps. I also have experience of creating websites on CMS like Wordpress, Wix Website Builder and others.",
    },
    {
      introTitle: "DESIGN",
      introHead: "I love to design experiences that not only complete the functional value but also loved by people.",
      introDesc:
        "I am a UI designer. Currently working on freelance projects and updating my portfolio. I believe great design is defined by the experience it creates for the User combined with flawless execution. I'm a designer with a keen eye for creating engaging UI, bringing products to life. "
    },
    {
      introTitle: "DEVELOP",
      introHead: "I'm an ingenious web developer oriented to the frontend, I lead and design products that people love.",
      introDesc:
        " I rely on the most outstanding open source libraries React & Redux being these my tools to be able to solve any challenge posed in my work life. I bring unique prespective of designer & developer. This means my design takes into account users as well as developer constraints allowing me to take on digital projects from multiple standpoints. " 
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
              <DesignPage page="design" text="Design" pageData={pageData[2]} />
            )}
          />
          <Route
            exact
            path="/developer"
            component={() => (
              <DeveloperPage
                page="develop"
                text="Develop"
                pageData={pageData[3]}
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
