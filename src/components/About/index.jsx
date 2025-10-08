import "./index.css";
import { FaSeedling, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">
          <FaSeedling className="icon start" /> My Journey{" "}
          <FaLaptopCode className="icon end" />
        </h2>

        <p className="about-text">
          From cultivating crops 🌾 to cultivating code 💻 — my journey from an
          <span className="highlight"> agriculture background </span> to
          becoming a<span className="highlight"> software developer </span> has
          been driven by curiosity, persistence, and a love for building
          impactful solutions.
        </p>

        <p className="about-text">
          I specialize in creating dynamic and responsive web applications using
          <span className="highlight">
            {" "}
            React, JavaScript, and modern web technologies
          </span>
          . My goal is to bridge creativity and logic — crafting experiences
          that look good and perform even better.
        </p>
      </div>
    </section>
  );
}

export default About;
