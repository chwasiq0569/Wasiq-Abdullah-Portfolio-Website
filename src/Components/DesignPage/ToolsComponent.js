import React from "react";
import IconContainer from "../util/IconContainer/IconContainer";
import { toolsIconContainer } from "./../util/ImagesAndIconsData/Design/DesignIcons";

const ToolsComponent = () => {
  return (
    <div className="toolsSection">
      <h1
        className="toolsHead"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        Tools I Use as UI/UX Designer
      </h1>
      {/* <TiltingEyes /> */}
      <div className="toolsIconContainer">
        {toolsIconContainer.map((t) => (
          <IconContainer
            key={t.text}
            className={t.className}
            data={t.data}
            delay={t.delay}
            duration={t.duration}
            Icon={t.Icon}
            text={t.text}
            innerClass={t.innerClass}
            altText={t.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsComponent;
