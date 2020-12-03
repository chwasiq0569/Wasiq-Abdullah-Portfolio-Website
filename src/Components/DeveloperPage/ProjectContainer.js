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
}) => {
  return (
    <div
      className={className}
      data-aos={data}
      data-aos-delay={delay}
      data-aos-duration={duration}
      onClick={() => window.open(link, "_blank")}
    >
      <h1 className={innerClass}>{text}</h1>
      <div className="imgWrapper">
        <img src={Img} alt={altText} />
      </div>
    </div>
  );
};

export default ProjectContainer;
