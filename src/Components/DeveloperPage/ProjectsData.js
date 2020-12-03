import CovidTrackerImg from "../../assets/DeveloperProj/CovidTracker2.png";
import MovieStreamApp from "../../assets/DeveloperProj/MovieStreamApp.jpg";
import CartImg from "../../assets/DesignProj/icons8-fast-cart-64.png";
import ChatRoomIcon from "../../assets/DeveloperProj/icons8-chat-room-100.png";

export const projectsData = [
  {
    className: "landscapeProj movieStreamProj",
    data: "fade-up",
    delay: "400",
    duration: "1000",
    link: "https://coronavirustracker-2bc65.web.app/",
    Img: CovidTrackerImg,
    altText: "Covid-Tracker Image",
    text: "",
    innerClass: "hideInfo",
  },
  {
    className: "leftProj",
    data: "fade-right",
    delay: "300",
    duration: "700",
    link: "https://social-networking-app-38daf.web.app/",
    altText: "Covid-Tracker Image",
    text: "Chat Room App",
    Img: ChatRoomIcon,
    altText: "Chat Room App Image",
    innerClass: "titleHead portfoliodesign",
  },
  {
    className: "rightProj",
    data: "fade-left",
    delay: "300",
    duration: "700",
    link: "https://ecommerce-app-553b9.web.app/",
    Img: CartImg,
    altText: "Ecommerce App Image",
    text: "Ecommerce App",
    altText: "Ecommerce App Image",
    innerClass: "titleHead",
  },
  {
    className: "landscapeProj coviddesign",
    data: "fade-up",
    delay: "750",
    duration: "1000",
    link: "https://streamproject-4ce54.web.app/",
    Img: MovieStreamApp,
    altText: "Stream App Image",
    text: "Stream App",
    altText: "Stream App Image",
    innerClass: "titleHead",
  },
];
