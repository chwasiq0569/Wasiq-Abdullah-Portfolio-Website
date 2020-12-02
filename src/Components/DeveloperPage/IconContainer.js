import React from "react";
const IconContainer = ({
  className,
  data,
  delay,
  duration,
  text,
  Icon,
  altText,
  innerClass,
}) => {
  return (
    <div
      className={className}
      data-aos={data}
      data-aos-delay={delay}
      data-aos-duration={duration}
    >
      <div className={innerClass}>{text}</div>
      <img src={Icon} alt={altText} />
    </div>
  );
};

export default IconContainer;
