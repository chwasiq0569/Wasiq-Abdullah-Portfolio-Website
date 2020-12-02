import React, { forwardRef, useRef } from "react";
import "./contactPopUp.scss";
import { ReactComponent as Behancelogo } from "../../assets/SVGSocialMeida/icons8-behance.svg";
import { ReactComponent as Instagramlogo } from "../../assets/SVGSocialMeida/icons8-instagram.svg";
import { ReactComponent as LinkedInlogo } from "../../assets/SVGSocialMeida/icons8-linkedin-2.svg";
import { ReactComponent as Dribblelogo } from "../../assets/SVGSocialMeida/dribbble.svg";
import { ReactComponent as CrossIcon } from "../../assets/SVGSocialMeida/cancel.svg";
import { ReactComponent as GithubLogo } from "../../assets/SVGSocialMeida/github.svg";
import { Link, withRouter } from "react-router-dom";
const ContactPopUp = React.forwardRef((props, ref) => {
  let emailAdd = useRef(null);
  // console.log("props.path: ", props.path);
  // console.log("props.history: ", props.history);
  const onmouseover = (elem, color) => {
    elem.style.color = color;
  };
  const onmouseout = (elem) => {
    elem.style.color = "black";
    elem.transition = "all 0.2s ease";
  };
  const changeRoute = (route) => {
    window.scrollTo(0, 0);
    props.animateIt();
    setTimeout(() => {
      props.history.push(route);
    }, 1000);
  };

  // const handleClick = (link) => {
  //   window.open(link, "_blank");
  // }

  return (
    <div className="contactPopUp__Wrapper" id="contactMe" ref={ref}>
      <div className="contactPopUp__InnerWrapper">
        <div className="lowerSection">
          <p>SOCIAL</p>
          <div className="icons">
            <div className="iconContainer">
              <a href="https://www.behance.net/wasiqabdullah" target="_blank">
                <Behancelogo height="1.2rem" width="1.2rem" />
              </a>
            </div>
            <div className="iconContainer">
              <a href="https://dribbble.com/chwasiq0569" target="_blank">
                <Dribblelogo height="0.9rem" width="0.9rem" />
              </a>
            </div>
            <div className="iconContainer">
              <a href="https://github.com/chwasiq0569" target="_blank">
                <GithubLogo height="0.9rem" width="0.9rem" />
              </a>
            </div>
            <div className="iconContainer">
              <a
                href="https://www.linkedin.com/in/wasiq-abdullah-b515031a6/"
                target="_blank"
              >
                <LinkedInlogo height="1.2rem" width="1.2rem" />
              </a>
            </div>
            <div className="iconContainer">
              <a
                href="https://www.instagram.com/wasik_daprogrammer/"
                target="_blank"
              >
                <Instagramlogo height="1.2rem" width="1.2rem" />
              </a>
            </div>
          </div>
        </div>
        <div className="innerDiv">
          <div className="topSection">
            <CrossIcon
              height="0.8rem"
              width="0.8rem"
              onClick={() => props.animateIt()}
              className="crossIcon"
            />
          </div>
          <div className="upperSection">
            <div className="contactInfo">
              <p className="contactHead">CONTACT</p>
              <a
                href="mailto:wasiqabdullah222@gmail.com"
                ref={(el) => (emailAdd = el)}
                //changing color of email on mouseover
                onMouseOver={() =>
                  props.history.location.pathname === "/" ||
                  props.history.location.pathname === "/designer"
                    ? onmouseover(emailAdd, "#ffd42d")
                    : props.history.location.pathname === "/developer"
                    ? onmouseover(emailAdd, "#fb6542")
                    : onmouseover(emailAdd, "#1544cd")
                }
                onMouseOut={() => onmouseout(emailAdd)}
              >
                wasiqabdullah222@gmail.com
              </a>
            </div>
            {/* below code will render for mobile and tablet devices as navbar  */}
            <div className="Navslinks">
              <p className="linkNav" onClick={() => changeRoute("/")}>
                INTRO
              </p>
              <p className="linkNav" onClick={() => changeRoute("/about")}>
                ABOUT
              </p>
              <p className="linkNav" onClick={() => changeRoute("/designer")}>
                DESIGNER
              </p>
              <p className="linkNav" onClick={() => changeRoute("/developer")}>
                DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// export default ContactPopUp;

// here we need withRouter (an Higher Order Component) that passes the  closest route match to our component
//  by help of this we will be able to access location and history objects

const withRouterForwardRef = (Component) => {
  //here i wrapped my withRouter Component inside withRouter HOC
  const WithRouter = withRouter(({ forwardedRef, ...props }) => (
    //here forwardedRef contains actual ref and ...props contains actual props and props that we recieve from withRouter HOC i.e location, history

    //these props are passed to withRouter component below inside forwardRef Component

    <Component ref={forwardedRef} {...props} />
  ));

  //Ref forwarding is a technique for automatically passing a ref through a component to one of its children.

  //and here we need Ref in ContactPopUp Component to do animations

  return forwardRef((props, ref) => (
    //here refs are passed to withRouter
    <WithRouter {...props} forwardedRef={ref} />
  ));
};

export default withRouterForwardRef(ContactPopUp);
// const ChildWithRouteAndRef = withRouterForwardRef(ContactPopUp);

// export default ChildWithRouteAndRef;
