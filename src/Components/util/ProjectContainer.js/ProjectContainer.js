import React from "react";
const ProjectContainer = ({
  className,
  data,
  delay,
  duration,
  link,
  Img,
  altText,
  innerClass,
  text,
  innerdata,
  innerduration,
  innerdelay,
  innerTextClass,
}) => {
  return (
    <div
      className={className}
      data-aos={data}
      data-aos-delay={delay}
      data-aos-duration={duration}
      onClick={() => window.open(link, "_blank")}
    >
      <h1 className={innerTextClass}>{text}</h1>
      <div
        className={innerClass}
        data-aos={innerdata}
        data-aos-duration={innerduration}
        data-aos-delay={innerdelay}
      >
        <img src={Img} alt={altText} />
      </div>
    </div>
  );
};

export default ProjectContainer;
