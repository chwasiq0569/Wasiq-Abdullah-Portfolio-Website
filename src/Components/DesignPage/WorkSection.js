import React from "react";
import ProjectContainer from "../util/ProjectContainer.js/ProjectContainer";

import { projectsData } from "./../util/ImagesAndIconsData/Design/ProjectsData";

const WorkSection = () => {
  return (
    <div className="workSection">
      <h1 className="title_Head">Work</h1>
      <div className="projects">
        <ProjectContainer
          className={projectsData[0].className}
          data={projectsData[0].data}
          delay={projectsData[0].delay}
          duration={projectsData[0].duration}
          link={projectsData[0].link}
          text={projectsData[0].text}
          innerClass={projectsData[0].innerClass}
          innerTextClass={projectsData[0].innerTextClass}
          Img={projectsData[0].Img}
          altText={projectsData[0].altText}
          innerdata={projectsData[0].innerdata}
          innerduration={projectsData[0].innerduration}
          innerdelay={projectsData[0].innerdelay}
        />

        <div className="twoProjs">
          <ProjectContainer
            className={projectsData[1].className}
            data={projectsData[1].data}
            delay={projectsData[1].delay}
            duration={projectsData[1].duration}
            link={projectsData[1].link}
            text={projectsData[1].text}
            innerClass={projectsData[1].innerClass}
            innerTextClass={projectsData[1].innerTextClass}
            Img={projectsData[1].Img}
            altText={projectsData[1].altText}
            innerdata={projectsData[1].innerdata}
            innerduration={projectsData[1].innerduration}
            innerdelay={projectsData[1].innerdelay}
          />
          <ProjectContainer
            className={projectsData[2].className}
            data={projectsData[2].data}
            delay={projectsData[2].delay}
            duration={projectsData[2].duration}
            link={projectsData[2].link}
            text={projectsData[2].text}
            innerClass={projectsData[2].innerClass}
            innerTextClass={projectsData[2].innerTextClass}
            Img={projectsData[2].Img}
            altText={projectsData[2].altText}
            innerdata={projectsData[2].innerdata}
            innerduration={projectsData[2].innerduration}
            innerdelay={projectsData[2].innerdelay}
          />
        </div>
        <ProjectContainer
          className={projectsData[3].className}
          data={projectsData[3].data}
          delay={projectsData[3].delay}
          duration={projectsData[3].duration}
          link={projectsData[3].link}
          text={projectsData[3].text}
          innerClass={projectsData[3].innerClass}
          innerTextClass={projectsData[3].innerTextClass}
          Img={projectsData[3].Img}
          altText={projectsData[3].altText}
          innerdata={projectsData[3].innerdata}
          innerduration={projectsData[3].innerduration}
          innerdelay={projectsData[3].innerdelay}
        />
        <ProjectContainer
          className={projectsData[4].className}
          data={projectsData[4].data}
          delay={projectsData[4].delay}
          duration={projectsData[4].duration}
          link={projectsData[4].link}
          text={projectsData[4].text}
          innerClass={projectsData[4].innerClass}
          innerTextClass={projectsData[4].innerTextClass}
          Img={projectsData[4].Img}
          altText={projectsData[4].altText}
          innerdata={projectsData[4].innerdata}
          innerduration={projectsData[4].innerduration}
          innerdelay={projectsData[4].innerdelay}
        />
      </div>
    </div>
  );
};

export default WorkSection;
