import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import projectImage from "../../assets/background.webp";
import project1 from "../../assets/1.jpg";
import project2 from "../../assets/2.jpg";
import "./projectSection.css";

const projectSection = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const projects = [
    {
      id: 1,
      title: "HTML & CSS",
      description: "Description of Project 1",
      image: projectImage,
      alt: "",
      lounges: ["HTML", "CSS", "Javascript", "React.js"],
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Description of Project 2",
      image: project1,
      alt: "",
      lounges: ["HTML", "CSS", "Javascript", "React.js"],
    },
    {
      id: 3,
      title: "Agriculture Welfare",
      description: "Description of Project 3",
      image: project2,
      alt: "",
      lounges: ["HTML", "CSS", "Javascript", "React.js"],
    },
    {
      id: 4,
      title: "Log-In",
      description: "Description of Project 4",
      image: projectImage,
      alt: "",
      lounges: ["HTML", "CSS", "Javascript", "React.js"],
    },
    {
      id: 5,
      title: "Search",
      description: "Description of Project 5",
      image: project1,
      alt: "",
      lounges: ["HTML", "CSS", "Javascript", "React.js"],
    },
    {
      id: 6,
      title: "3D",
      description: "Description of Project 6",
      image: project2,
      alt: "",
      lounges: ["HTML", "CSS", "Javascript", "React.js"],
    },
  ];

  const handleViewMoreClick = () => {
    navigate("/projects");
  };

  return (
    <div className="projects-container">
      <h1 className="project-heading">My Projects</h1>
      <div className="projects-list">
        {location.pathname === "/projects"
          ? projects.map((project) => (
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
            ))
          : projects.slice(0, showAll ? projects.length : 3).map((project) => (
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
      {location.pathname !== "/projects" && (
        <button className="view-more-btn" onClick={handleViewMoreClick}>
          View More Projects
        </button>
      )}
    </div>
  );
};

export default projectSection;
