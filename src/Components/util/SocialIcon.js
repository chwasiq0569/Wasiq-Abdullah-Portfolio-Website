import React from "react";
const SocialIcon = ({ href, SVGComponent, height, width }) => {
  return (
    <div className="socialIcon__Container">
      <a href={href} target="_blank">
        <SVGComponent height={height} width={width} />
      </a>
    </div>
  );
};

export default SocialIcon;
