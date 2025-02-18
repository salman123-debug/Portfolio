

import React, { useState } from "react";
import "./Project.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import {forwardRef} from 'react'

const Projects = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const handleModal = (project) => {
    setSelectedProject(project);
  };

  const projects = [
    {
      id: "tab2",
      title: "Inventory management system",
      img: "inventory.jpg",
      description: "A system to conduct online exams securely and efficiently.",
      link:"https://github.com/salman123-debug/Inventory-Management"
    },
    {
      id: "tab3",
      title: "Task Manager",
      img: "taskmange.jpg",
      description: "A platform to manage tasks efficiently based on priority.",
      link:"https://github.com/salman123-debug/Task-Manager"
    },
    {
      id: "tab4",
      title: "CRUD Operation",
      img: "crud.jpg",
      description: "A platform to manage clients and employees efficiently.",
    },
    {
      id: "tab5",
      title: "Music-Player",
      img: "music player.jpg",
      description: "A platform to list and play music files.",
      link:"http://music-player-mds-e9d9c9.netlify.app"
    },
    {
      id: "tab6",
      title: "Weather App",
      img: "weatherApp.jpg",
      description: "A platform to play tic tac toe game.",
      link:"https://weatherappmds.netlify.app/"
    },
    // {
    //   id: "tab7",
    //   title: "Rock Paper Scissors Game",
    //   img: "rock paper .jpg",
    //   description: "A platform to play rock paper scissors game.",
    // },
  //   {
  //     id: "tab8",
  //     title: "Learning Management System",
  //     img: "work7.jpg",
  //     description: "An online education platform for managing courses and students.",
  //   },
  //   {
  //     id: "tab9",
  //     title: "Food Delivery App",
  //     img: "work8.jpg",
  //     description: "An app to order food from restaurants with real-time tracking.",
  //   },
  ];

  return (
    <div id="projects" ref={ref}>
      <p className="text-center pt-16">
        <span className="text-3xl px-2 font-bold bg-[#000033] text-white">
          Projects
        </span>
      </p>
      <h1 className="text-4xl text-center font-bold font-serif">
        Some of my recent projects
      </h1>

      {/* Tabs Section */}
      <div className="tabs-container w-full h-12  bg-[#000033] mt-4 overflow-x-auto whitespace-nowrap  scrollbar-hide">
        <div className="tabs flex space-x-4 px-4">
          <button
            onClick={() => handleClick("tab1")}
            className={`text-xl text-gray-500 px-6 py-2 font-bold ${
              activeTab === "tab1" ? "active-tab " : ""
            }`}
          >
            All
          </button>
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleClick(project.id)}
              className={`text-xl text-gray-500 px-6 py-2 font-bold ${
                activeTab === project.id ? "active-tab " : ""
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Project List */}
      <div className="Card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ml-9 mt-10 mr-10">
        {(activeTab === "tab1"
          ? projects
          : projects.filter((project) => project.id === activeTab)
        ).map((project) => (
          <div key={project.id} className="work rounded-md relative overflow-hidden">
            <img
              src={project.img}
              className="w-full rounded-md block h-[250px] object-cover transition-all duration-500"
              alt={project.title}
            />
            <div className="layer ">
              <h3 className="text-white font-bold">{project.title}</h3>
              <p className="text-white text-sm">{project.description}</p>
              <FaExternalLinkAlt
                className="text-3xl text-white cursor-pointer mt-2"
                onClick={() => handleModal(project)}
              />
              
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {selectedProject && (
        <div className="project-modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="project-modal-content bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-lg mb-4">{selectedProject.description}</p>
            
              <button
                className="bg-[#000033] text-white px-4 py-2 rounded-md hover:bg-[#121242] "
                onClick={() => window.open(selectedProject.link, "_blank")}
              >
                View Project
              </button>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="bg-blue-700 text-white px-4 py-2 rounded-md mt-4 ml-2 hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
})

export default Projects;
