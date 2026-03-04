import { useState } from "react";
import "./index.css";

function Projects() {
  const projects = [
    {
      src: "https://res.cloudinary.com/dtfndvjsg/video/upload/v1759972351/React_App_-_Personal_-_Microsoft_Edge_2025-10-09_06-40-51_pquisl.mp4",
      name: "Task Manager",
      type: "Frontend App",
      description:
        "A simple and intuitive Task Manager app that helps you stay organized and productive. Add, edit, and delete tasks effortlessly, mark them as complete, and manage your daily goals with ease. Designed with a clean interface and smooth user experience to help you focus on what matters most.",
      git: "https://github.com/Prasanth-S-K/task-manager/tree/main/src/components",
      app: "https://task-manager-weld-nu.vercel.app/",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/video/upload/v1760059963/React_App_-_Personal_-_Microsoft_Edge_2025-10-10_06-54-46_iwa6mr.mp4",
      name: "Jobby App",
      type: "Frontend App",
      description:
        "A smart job searching app that helps users find the perfect opportunity with ease. You can filter jobs based on type — full-time, part-time, freelance, or internship — and also customize your search according to your desired salary package. The app makes job hunting simple, personalized, and efficient.",
      git: "https://github.com/Prasanth-S-K/Jobby-App",
      app: "https://prasnathjobby.ccbp.tech/login",
    },

    // Add more projects here
    {
      src: "https://res.cloudinary.com/dtfndvjsg/video/upload/v1772428555/20260302103935_gyimrg.mp4",
      name: "Event Management App",
      type: "FullStack App",
      description:
        "A comprehensive event management platform that helps users create, discover, and manage events with ease. Users can browse various events, filter by categories, and register for their preferred ones. Organizers can create and manage events seamlessly. The backend is deployed on Render and the frontend is hosted on Vercel.",
      git: "https://github.com/Prasanth-S-K/event-management-frontend",
      app: "https://event-management-frontend-git-main-prasanth-s-ks-projects.vercel.app/",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/video/upload/v1772429461/20260302105817_fl4udj.mp4",
      name: "Tasty Kitchens",
      type: "Frontend App",
      description:
        "A Swiggy/Zomato inspired food delivery platform that lets users explore a variety of restaurants and cuisines. Browse through restaurant menus, sort by ratings and popularity, add items to your cart, and view order summaries. The app provides a seamless food ordering experience with a clean and intuitive user interface.",
      git: "https://github.com/Prasanth-S-K/Tasty-Kitchens",
      app: "https://TastyMenu.ccbp.tech",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/video/upload/v1772434347/20260302122056_aeewqm.mp4",
      name: "Browser History",
      type: "Frontend App",
      description:
        "A browser history manager that tracks and displays your browsing activity in an organized timeline. View all visited websites with their logos and timestamps, search through your history, and delete individual entries with ease. The app provides a clean interface to manage and monitor your browsing history efficiently.",
      git: "https://github.com/Prasanth-S-K/browser-history",
      app: "https://PSKHistory.ccbp.tech",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/video/upload/v1772612146/React_App_-_Google_Chrome_2026-03-04_13-40-47_wuyjxt.mp4",
      name: "Rock Paper Scissors",
      type: "Frontend App",
      description:
        "A fun and interactive Rock Paper Scissors game where users can play against the computer. Make your choice between rock, paper, or scissors and see who wins with randomized computer moves. The game keeps track of scores and provides instant results with engaging visuals, making it an entertaining way to pass the time.",
      git: "https://github.com/Prasanth-S-K/Rock-Paper-and-Scissors",
      app: "https://PSKGame.ccbp.tech",
    },
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
            <p>
              {project.name} - {project.type}
            </p>
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
            <div className="project-buttons">
              <button
                onClick={() => window.open(selectedProject.app, "_blank")}
              >
                Open App
              </button>
              <button
                onClick={() => window.open(selectedProject.git, "_blank")}
              >
                Open Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
