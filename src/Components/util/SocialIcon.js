import React from "react";
const SocialIcon = ({
  href,
  SVGComponent,
  height,
  weight,
  ref,
  onmouseover,
  onmouseout,
}) => {
  return (
    <div className="socialIcon__Container">
      <a href={href} target="_blank">
        <SVGComponent
          height={height}
          width={weight}
          ref={ref}
          onMouseOver={onmouseover}
          onMouseOut={onmouseout}
        />
      </a>
    </div>
  );
};

export default SocialIcon;
