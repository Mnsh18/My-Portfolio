function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <span className="featured">⭐ Featured Project</span>

          <h3>Phishing Detection Using Machine Learning</h3>

          <p>
            Built a phishing website detection system using Machine Learning
            that classifies URLs as legitimate or phishing based on multiple
            security-related features.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>Streamlit</span>
          </div>
        </div>

        <div className="project-card">

          <h3>Resume Generator</h3>

          <p>
            Developed a resume builder that allows users to create professional
            resumes and export them as PDF documents.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>Firebase</span>
          </div>

        </div>

        <div className="project-card">

          <h3>Password Strength Checker</h3>

          <p>
            Designed a password analysis tool that evaluates password strength
            using multiple security rules and validation techniques.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>Node.js</span>
          </div>

        </div>

        <div className="project-card">

          <h3>Personal Portfolio Website</h3>

          <p>
            Designed and developed a responsive personal portfolio website
            using React to showcase my projects, technical skills, and
            experience. Implemented reusable components, smooth animations,
            and resume download functionality.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Framer Motion</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;