import React, { forwardRef, useRef } from "react";
import "./contactPopUp.scss";
import { ReactComponent as CrossIcon } from "../../assets/SVGSocialMeida/cancel.svg";
import { Link, withRouter } from "react-router-dom";
import { data } from "./../util/FooterData/FooterData";
import SocialIcon from "../util/SocialIcon";
const ContactPopUp = React.forwardRef((props, ref) => {
  let emailAdd = useRef(null);
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

  const routesArr = [
    { name: "INTRO", route: "/" },
    { name: "ABOUT", route: "/about" },
    { name: "DESIGNER", route: "/designer" },
    { name: "DEVELOPER", route: "/developer" },
  ];

  return (
    <div className="contactPopUp__Wrapper" id="contactMe" ref={ref}>
      <div className="contactPopUp__InnerWrapper">
        <div className="lowerSection">
          <p>SOCIAL</p>
          <div className="icons">
            {data.map((d) => (
              <SocialIcon
                key={d.href}
                SVGComponent={d.SVGComponent}
                href={d.href}
                height={d.height}
                width={d.width}
              />
            ))}
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
              {routesArr.map((d) => (
                <p className="linkNav" onClick={() => changeRoute(d.route)}>
                  {d.name}
                </p>
              ))}
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
