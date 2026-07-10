import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Get In Touch</h2>

      <p>
        Feel free to connect with me through any of the platforms below.
      </p>

      <div className="contact-icons">

        <a
          href="mailto:sarmamanash60@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <SiGmail />
        </a>

        <a
          href="https://github.com/Mnsh18"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/manash-jyoti-sarma"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="/Manash%20Jyoti%20Sarma%20resume.pdf"
          download
          title="Resume"
        >
          <FaFilePdf />
        </a>

      </div>

    </section>
  );
}

export default Contact;