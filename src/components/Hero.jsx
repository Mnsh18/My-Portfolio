import profile from "../assets/manashpic.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <motion.div
  className="hero-left"
  initial={{
    x: -300,
    opacity: 0,
    scale: 0.3,
    rotate: -25,
  }}
  animate={{
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
  }}
  transition={{
    duration: 1.2,
    type: "spring",
    stiffness: 100,
  }}
>
  <motion.img
    src={profile}
    alt="Manash Jyoti Sarma"
    className="profile-image"
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

      <motion.div
  className="hero-right"
  initial={{ x: 150, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
>

        <motion.h4
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
>
  Hello 👋 I'm
</motion.h4>

       <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.6 }}
>
  Manash Jyoti Sarma
</motion.h1>

        <motion.h3
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.6 }}
>
  Computer Science Graduate
</motion.h3>

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
>
  Passionate about Python, Machine Learning and Software Development.
  Currently improving my Data Structures & Algorithms skills while
  building real-world software projects.
</motion.p>

        <motion.div
  className="hero-icons"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8, duration: 0.6 }}
>

  <div className="hero-icons">

  <a
    href="/Manash%20Jyoti%20Sarma%20resume.pdf"
    download
    title="Resume"
  >
    <FaFilePdf style={{ color: "#E53935" }} />
  </a>

  <a
    href="https://github.com/Mnsh18"
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
  >
    <FaGithub style={{ color: "#181717" }} />
  </a>

  <a
    href="https://www.linkedin.com/in/manash-jyoti-sarma"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <FaLinkedin style={{ color: "#0A66C2" }} />
  </a>

</div>

</motion.div>
      </motion.div>

    </section>
  );
}

export default Hero;