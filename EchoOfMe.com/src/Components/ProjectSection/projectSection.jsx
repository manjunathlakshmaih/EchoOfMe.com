import React, { useState } from "react";
import projectImage from '../../assets/background.webp';
import project1 from '../../assets/1.jpg';
import project2 from '../../assets/2.jpg'
import "./projectSection.css";

const projectSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { id: 1, title: "HTML & CSS", description: "Description of Project 1", image: projectImage, alt:""},
    { id: 2, title: "Portfolio", description: "Description of Project 2", image: project1, alt:"" },
    { id: 3, title: "Agriculture Welfare", description: "Description of Project 3", image: project2, alt:"" },
    { id: 4, title: "Log-In", description: "Description of Project 4", image: projectImage, alt:"" },
    { id: 5, title: "Search", description: "Description of Project 5", image: project1, alt:"" },
    { id: 6, title: "3D", description: "Description of Project 6", image: project2, alt:"" },
  ];

  const handleShowMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      
      <div className="projects-list">
        {projects.slice(0, showAll ? projects.length : 3).map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.alt} className='project_img_fld'/>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <button className="show-more-btn" onClick={handleShowMoreClick}>
        {showAll ? "Show Less <<" : "Show More >>"}
      </button>
    </div>
  );
};


export default projectSection;
