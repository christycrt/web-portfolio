import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaSourcetree,
} from "react-icons/fa";
import {
  SiAntdesign,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div id="skills" className="skill">
        <div className="container">
          <p className="title">Skills</p>
          <div className="grid-container">
            <div className="icon-wrapper">
              <FaHtml5 className="skill-icon skill1" />
            </div>
            <div className="icon-wrapper">
              <FaCss3Alt className="skill-icon skill1" />
            </div>
            <div className="icon-wrapper">
              <FaJs className="skill-icon skill1" />
            </div>
            <div className="icon-wrapper">
              <SiTypescript className="skill-icon skill1" />
            </div>
            <div className="icon-wrapper">
              <FaReact className="skill-icon skill1" />
            </div>
            <div className="icon-wrapper">
              <SiNextdotjs className="skill-icon skill1" />
            </div>
            <div className="icon-wrapper">
              <FaBootstrap className="skill-icon" />
            </div>
            <div className="icon-wrapper">
              <SiTailwindcss className="skill-icon" />
            </div>
            <div className="icon-wrapper">
              <SiAntdesign className="skill-icon" />
            </div>
            <div className="icon-wrapper">
              <SiStyledcomponents className="skill-icon" />
            </div>
            <div className="icon-wrapper">
              <FaGitAlt className="skill-icon" />
            </div>
            <div className="icon-wrapper">
              <FaSourcetree className="skill-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
