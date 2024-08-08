import React from 'react';
import { useResume } from '../../Context';
import './Projects.css';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Projects = () => {
  const { projects, setProjects } = useResume();

  const addMore = () => {
    setProjects([...projects, { id: uuidv4(), name: '', url: '', description: '' }]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, [name]: value } : project
    );
    setProjects(updatedProjects);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const toggleAccordion = (index) => {
    setProjects(projects.map((project, i) => (
      index === i ? { ...project, isOpen: !project.isOpen } : { ...project, isOpen: false }
    )));
  };

  return (
    <>
      <div className="projects-accordion">
        {projects.map((project, index) => (
          <div key={project.id} className="projects-accordion-item">
            <div
              className="projects-accordion-button"
              onClick={() => toggleAccordion(index)}
            >
              <span>{project.name || "Project Name"}</span>
              <span>{project.isOpen ? '-' : '+'}</span>
            </div>
            {project.isOpen && (
              <div className="projects-accordion-panel">
                <div className="projects-form-control">
                  <input
                    value={project.name}
                    onChange={(e) => handleChange(e, project.id)}
                    name="name"
                    type="text"
                    placeholder="Project Name"
                  />
                  <input
                    value={project.url}
                    onChange={(e) => handleChange(e, project.id)}
                    name="url"
                    type="url"
                    placeholder="Project URL"
                  />
                  <textarea
                    value={project.description}
                    onChange={(e) => handleChange(e, project.id)}
                    name="description"
                    placeholder="Description..."
                  />
                  <button
                    className="projects-delete-button"
                    onClick={() => deleteProject(project.id)}
                  >
                    <MdDelete />
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {projects.length < 4 && (
        <button className="projects-button" onClick={addMore}>
          Add More
        </button>
      )}
    </>
  );
};

export default Projects;
