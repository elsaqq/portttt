import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function IntroVideo({ onVideoEnd }) {
  return (
    <div className="video-background">
      <video autoPlay muted onEnded={onVideoEnd}>
        <source src={`${process.env.PUBLIC_URL}/calma.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

const projectsData = [
  {
    title: "A mobile coffee application built with Kotlin. 1",
    images: [
      `${process.env.PUBLIC_URL}/coffee1.png`,
      `${process.env.PUBLIC_URL}/coffee2.png`,
      `${process.env.PUBLIC_URL}/coffee3.png`
    ],
    github: "https://github.com/elsaqq/MyApplication"
  },
  {
    title: "A mobile Fitness app designed using Kotlin. 2",
    images: [
      `${process.env.PUBLIC_URL}/fitness1.png`,
      `${process.env.PUBLIC_URL}/fitness2.png`,
      `${process.env.PUBLIC_URL}/fitness3.png`
    ],
    github: "https://github.com/elsaqq/FitnessAppKot"
  },
  {
    title: "Moving Robot with Python and Coppelia 3",
    video: `${process.env.PUBLIC_URL}/robot.mp4`,
    github: "https://github.com/elsaqq"
  }
];

// Custom Previous Arrow (Left)
const CustomPrevArrow = ({ className, onClick }) => (
  <button
    className={`${className} slick-arrow`}
    onClick={onClick}
    style={{
      display: "block",
      position: "absolute",
      left: "0px",
      zIndex: 1000,
      background: "rgba(0, 0, 0, 0.8)",
      color: "white",
      border: "none",
      fontSize: "24px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      cursor: "pointer"
    }}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow (Right)
const CustomNextArrow = ({ className, onClick }) => (
  <button
    className={`${className} slick-arrow`}
    onClick={onClick}
    style={{
      display: "block",
      position: "absolute",
      right: "0px",
      zIndex: 1000,
      background: "rgba(0, 0, 0, 0.8)",
      color: "white",
      border: "none",
      fontSize: "24px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      cursor: "pointer"
    }}
  >
    <FaArrowRight />
  </button>
);

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Image Slider for Projects 1 & 2, Video for Project 3 */}
            <div className="slider-container">
              {project.video ? (
                <div className="slider-img-wrapper">
                  <video
                    controls
                    className="project-image"
                    style={{ width: "100%", height: "auto", maxHeight: "300px", borderRadius: "8px" }}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Slider {...settings}>
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="slider-img-wrapper">
                      <img src={img} alt={`Project ${index + 1} - ${imgIndex + 1}`} className="project-image" />
                    </div>
                  ))}
                </Slider>
              )}
            </div>

            {/* GitHub Link */}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub 🔗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showVideo, setShowVideo] = useState(true); 

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <IntroVideo onVideoEnd={() => setShowVideo(true)} /> {/* Ensures intro video stays after playing */}

      <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
      </nav>

      <motion.section
        id="home"
        className="section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero">
          <motion.img
            src={`${process.env.PUBLIC_URL}/abc.jpeg`}
            alt="Profile"
            whileHover={{ scale: 1.1 }}
          />
          <h1>Hi, I'm Elsa Luis</h1>
          <p>Graduate developer passionate about coding.</p>

          <a href={`${process.env.PUBLIC_URL}/Elsa_Luis_CV.pdf`} target="_blank" rel="noopener noreferrer">
            <button className="cv-button">View My CV</button>
          </a>
        </div>
      </motion.section>

      <Projects />

      

      <footer className="footer">
        <p>© 2025 Elsa Luis. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
