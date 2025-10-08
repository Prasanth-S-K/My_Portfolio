import React, { useState } from "react";
import "./index.css";

const certificatesData = [
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068974/Screenshot_2025-09-28_194315_efgbkr.png",
    name: "Build Your Own Static Website",
    description:
      "Built and deployed static websites from scratch; gained hands-on experience in design, layout, and front-end development.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068977/Screenshot_2025-09-28_194444_zbsbwy.png",
    name: "Build Your Own Responsive Website",
    description:
      "Built fully responsive websites from scratch using HTML, CSS, and JavaScript; mastered layouts, styling, and adaptive design for all screen sizes.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068973/Screenshot_2025-09-28_194240_itaa8k.png",
    name: " Introduction to Databases",
    description:
      "Gained foundational knowledge of databases, including designing schemas, writing SQL queries, and managing data efficiently.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068976/Screenshot_2025-09-28_194414_odm9ab.png",
    name: "Programming Foundations",
    description:
      "Built a solid foundation in programming concepts including variables, loops, functions, and problem-solving using a modern programming language.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068970/Screenshot_2025-09-28_194120_fhjao9.png",
    name: "Developer Foundations",
    description:
      "Gained essential developer skills, including understanding software development workflows, version control with Git, and foundational coding practices.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068969/Screenshot_2025-09-28_194045_t8lro9.png",
    name: "Build Your Own Dynamic Web Application",
    description:
      "Built dynamic, interactive web applications using HTML, CSS, JavaScript, and backend integration; learned to handle data, user interactions, and real-time updates.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068965/Screenshot_2025-09-28_193822_vnebjh.png",
    name: "JavaScript Essentials",
    description:
      "Mastered core JavaScript concepts including variables, functions, DOM manipulation, events, and basic programming logic.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068972/Screenshot_2025-09-28_194157_u2h5k4.png",
    name: "Responsive Web Design using Flexbox",
    description:
      "Designed fully responsive websites using Flexbox; mastered layout structuring, alignment, spacing, and adaptive design for all screen sizes.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068968/Screenshot_2025-09-28_194007_h2tzpu.png",
    name: "Node JS",
    description:
      "Built server-side applications using Node.js; learned about server creation, handling requests and responses, and integrating with databases.",
  },
  {
    src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759068966/Screenshot_2025-09-28_193919_wykawu.png",
    name: "React JS",
    description:
      "Built dynamic, component-based web applications using React JS; mastered state management, props, hooks, and creating interactive user interfaces.",
  },
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div id="certificates" className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, idx) => (
          <div
            key={idx}
            className="certificate-card"
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.src} alt={cert.name} />
            <p>{cert.name}</p>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.src} alt={selectedCert.name} />
            <h3>{selectedCert.name}</h3>
            <p>{selectedCert.description}</p>
            <button onClick={() => window.open(selectedCert.src, "_blank")}>
              Open Certificate
            </button>
            <span className="close-modal" onClick={() => setSelectedCert(null)}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
