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
  const data = [
    {
      href: "https://www.behance.net/wasiqabdullah",
      height: "1rem",
      width: "1rem",

      SVGComponent: Behance,
    },
    {
      href: "https://dribbble.com/chwasiq0569",
      height: "0.8rem",
      width: "0.8rem",

      SVGComponent: Dribble,
    },
    {
      href: "https://github.com/chwasiq0569",
      height: "0.85rem",
      width: "0.85rem",

      SVGComponent: Github,
    },
    {
      href: "https://www.linkedin.com/in/wasiq-abdullah-b515031a6/",
      height: "1rem",
      width: "1rem",

      SVGComponent: LinkedIn,
    },
    {
      href: "https://www.instagram.com/wasik_daprogrammer/",
      height: "1.1rem",
      width: "1.1rem",

      SVGComponent: Instagram,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

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
            <SocialIcon
              SVGComponent={d.SVGComponent}
              href={d.href}
              height={d.height}
              width={d.width}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
