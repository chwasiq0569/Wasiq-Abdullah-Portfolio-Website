export const changeRouteOne = (route, wait, props) => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  //before pushing it will wait 600ms
  setTimeout(() => props.history.push(route), wait);
};

export const pageDataArr = [
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
      "The main area of my expertise is Front-End Design & Development (client side of web). I can design and develop slick, interactive, Responsive and Performance Efficient Web Apps. I have one year experience of creating websites on CMS like Wordpress.",
  },
  {
    introTitle: "DESIGN",
    introHead:
      "I love to design experiences that not only complete the functional value but also loved by people.",
    introDesc:
      "I am a UI designer. Currently working on freelance projects and updating my portfolio. I believe great design is defined by the experience it creates for the User combined with flawless execution. I'm a designer with a keen eye for creating engaging UI, bringing products to life. ",
  },
  {
    introTitle: "DEVELOP",
    introHead:
      "I'm an ingenious web developer oriented to the frontend, I lead and design products that people love.",
    introDesc:
      " I rely on the most outstanding open source libraries React & Redux being these my tools to be able to solve any challenge posed in my work life. I bring unique prespective of designer & developer. This means my design takes into account users as well as developer constraints allowing me to take on digital projects from multiple standpoints. ",
  },
];
