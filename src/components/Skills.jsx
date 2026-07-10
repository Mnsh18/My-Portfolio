import {
  SiPython,
  SiHtml5,
  SiCss,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <SiPython className="skill-icon" style={{ color: "#3776AB" }} />
          <span>Python</span>
        </div>

        <div className="skill-card">
          <SiHtml5 className="skill-icon" style={{ color: "#E34F26" }} />
          <span>HTML5</span>
        </div>

        <div className="skill-card">
          <SiCss className="skill-icon" style={{ color: "#1572B6" }} />
          <span>CSS3</span>
        </div>

        <div className="skill-card">
          <SiMysql className="skill-icon" style={{ color: "#4479A1" }} />
          <span>SQL</span>
        </div>

        <div className="skill-card">
          <SiGit className="skill-icon" style={{ color: "#F05032" }} />
          <span>Git</span>
        </div>

        <div className="skill-card">
          <SiGithub className="skill-icon" style={{ color: "#FFFFFF" }} />
          <span>GitHub</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;