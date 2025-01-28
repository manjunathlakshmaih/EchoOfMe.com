import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import projectImage from "../../assets/background.webp";
import project1 from "../../assets/1.jpg";
import project2 from "../../assets/2.jpg";
import "./projectSection.css";

const projectSection = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const projects = [
    {
      id: 1,
      title: "HTML & CSS",
      description: "Description of Project 1",
      image: projectImage,
      alt: "",
      lounges: ["HTML", "CSS", "Javascrip", "React.js"],
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Description of Project 2",
      image: project1,
      alt: "",
      lounges: ["HTML", "CSS", "Javascrip", "React.js"],
    },
    {
      id: 3,
      title: "Agriculture Welfare",
      description: "Description of Project 3",
      image: project2,
      alt: "",
      lounges: ["HTML", "CSS"],
    },
    {
      id: 4,
      title: "Log-In",
      description: "Description of Project 4",
      image: projectImage,
      alt: "",
      lounges: ["HTML", "CSS"],
    },
    {
      id: 5,
      title: "Search",
      description: "Description of Project 5",
      image: project1,
      alt: "",
      lounges: ["HTML", "CSS"],
    },
    {
      id: 6,
      title: "3D",
      description: "Description of Project 6",
      image: project2,
      alt: "",
      lounges: ["HTML", "CSS"],
    },
  ];

  const handleShowMoreClick = () => {
    setShowAll(!showAll);
  };

  const handleViewMoreClick = () => {
    navigate("/projects"); // Navigate to /projects page
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.slice(0, showAll ? projects.length : 3).map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.alt}
              className="project_img_fld"
            />
            <p>{project.description}</p>
            <div className="skills_field">
              {project.lounges.map((lounges, index) => (
                <span key={index} className="skils">
                  {lounges}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {location.pathname === "/projects" ? (
        <button className="view-more-btn" onClick={handleShowMoreClick}>
          {showAll ? "Show Less <<" : "Show More >>"}
        </button>
      ) : (
        <button className="view-more-btn" onClick={handleViewMoreClick}>
          View More Projects
        </button>
      )}
    </div>
  );
};

export default projectSection;
