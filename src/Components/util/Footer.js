import React, { useEffect, useRef } from "react";
import FooterHandImg from "../../assets/FixedHand.png";
import { ReactComponent as Behance } from "../../assets/SVGSocialMeida/icons8-behance.svg";
import { ReactComponent as Dribble } from "../../assets/SVGSocialMeida/dribbble.svg";
import { ReactComponent as Instagram } from "../../assets/SVGSocialMeida/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/SVGSocialMeida/icons8-linkedin-2.svg";
import { ReactComponent as Email } from "../../assets/SVGSocialMeida/email.svg";
import "./footer.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { withRouter } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactComponent as Github } from "../../assets/SVGSocialMeida/github.svg";
import SocialIcon from "./SocialIcon";

const Footer = (props) => {
  // console.log(
  //   "props.history.location.pathname: ",
  //   props.history.location.pathname
  // );
  // let hand = useRef(null);
  // let footer = useRef(null);
  // let iconDB = useRef(null);
  // let iconBE = useRef(null);
  // let iconGH = useRef(null);
  // let iconEM = useRef(null);
  // let iconLI = useRef(null);
  // let iconIG = useRef(null);

  const data = [
    {
      href: "https://www.behance.net/wasiqabdullah",
      height: "1rem",
      width: "1rem",
      // onmouseover: () => onmouseover(iconBE),
      // onmouseout: () => onmouseout(iconBE),
      SVGComponent: Behance,
    },
    {
      href: "https://dribbble.com/chwasiq0569",
      height: "0.8rem",
      width: "0.8rem",
      // onmouseover: () => onmouseover(iconDB),
      // onMouseOut: () => onmouseout(iconDB),
      SVGComponent: Dribble,
    },
    {
      href: "https://github.com/chwasiq0569",
      height: "0.85rem",
      width: "0.85rem",
      // onmouseover: () => onmouseover(iconGH),
      // onmouseout: () => onmouseout(iconGH),
      SVGComponent: Github,
    },
    {
      href: "https://www.linkedin.com/in/wasiq-abdullah-b515031a6/",
      height: "1rem",
      width: "1rem",
      // onmouseover: () => onmouseover(iconLI),
      // onmouseout: () => onmouseout(iconLI),
      SVGComponent: LinkedIn,
    },
    {
      href: "https://www.instagram.com/wasik_daprogrammer/",
      height: "1.1rem",
      width: "1.1rem",
      // onmouseover: () => onmouseover(iconIG),
      // onmouseout: () => onmouseout(iconIG),
      SVGComponent: Instagram,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  // const onmouseover = (elem) => {
  //   elem.style.fill = "red";
  // };

  // const onmouseout = (elem) => {
  //   elem.style.fill = "black";
  // };

  return (
    <footer
      className={
        props.history.location.pathname === "/" ||
        props.history.location.pathname === "/designer"
          ? "footerYellow"
          : props.history.location.pathname === "/about"
          ? "footerBlue"
          : "footerRed"
      }
    >
      <div className="footer__ImgContainer">
        <img
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="500"
          src={FooterHandImg}
          alt="FooterHandImg"
        />
      </div>
      <div className="socialBar">
        <div className="emailContainer">
          <a href="mailto:wasiqabdullah222@gmail.com">
            wasiqabdullah222@gmail.com
          </a>
        </div>
        <div className="socialIcons">
          {data.map((d) => (
            <div className="socialIcon__Container">
              <a href={d.href} target="_blank">
                <d.SVGComponent
                  height={d.height}
                  width={d.width}
                  // onMouseOver={d.mouseover}
                  // onMouseOut={d.mouseout}
                />
              </a>
            </div>
          ))}
          {/* <div className="socialIcon__Container">
            <a href="https://www.behance.net/wasiqabdullah" target="_blank">
              <Behance
                height="1rem"
                width="1rem"
                ref={(el) => (iconBE = el)}
                onMouseOver={() => onmouseover(iconBE)}
                onMouseOut={() => onmouseout(iconBE)}
              />
            </a>
          </div>
          <div className="socialIcon__Container" id="beh">
            <a href="https://dribbble.com/chwasiq0569" target="_blank">
              <Dribble
                height="0.8rem"
                width="0.8rem"
                ref={(el) => (iconDB = el)}
                onMouseOver={() => onmouseover(iconDB)}
                onMouseOut={() => onmouseout(iconDB)}
              />
            </a>
          </div>
          <div className="socialIcon__Container">
            <a href="https://github.com/chwasiq0569" target="_blank">
              <Github
                height="0.85rem"
                width="0.85rem"
                ref={(el) => (iconGH = el)}
                onMouseOver={() => onmouseover(iconGH)}
                onMouseOut={() => onmouseout(iconGH)}
              />
            </a>
          </div>
          <div className="socialIcon__Container">
            <a
              href="https://www.linkedin.com/in/wasiq-abdullah-b515031a6/"
              target="_blank"
            >
              <LinkedIn
                height="1rem"
                width="1rem"
                ref={(el) => (iconLI = el)}
                onMouseOver={() => onmouseover(iconLI)}
                onMouseOut={() => onmouseout(iconLI)}
              />
            </a>
          </div>
          <div className="socialIcon__Container">
            <a
              href="https://www.instagram.com/wasik_daprogrammer/"
              target="_blank"
            >
              <Instagram
                height="1.1rem"
                width="1.1rem"
                ref={(el) => (iconIG = el)}
                onMouseOver={() => onmouseover(iconIG)}
                onMouseOut={() => onmouseout(iconIG)}
              />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
