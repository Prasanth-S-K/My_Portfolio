import { useState } from "react";
import "./index.css";

function Projects() {
  const projects = [
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759076998/ipl-dashboard-output-v2_r86wzo.gif",
      name: "IPL DASHBOARD",
      description: "A sample project showcasing interactive web features.",
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      name: "Project Two",
      description:
        "Another project demonstrating responsive design and animations.",
    },
    // Add more projects here
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            {/* Card video: autoplay, muted, no controls */}
            <video
              src={project.src}
              className="project-video"
              muted
              loop
              autoPlay
              playsInline
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            {/* Modal video: controls enabled */}
            <video
              src={selectedProject.src}
              controls
              autoPlay
              style={{ width: "100%", borderRadius: "12px" }}
            />
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <button onClick={() => window.open(selectedProject.src, "_blank")}>
              Open Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
