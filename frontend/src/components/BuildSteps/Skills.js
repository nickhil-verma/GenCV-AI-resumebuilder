import React, { useState } from 'react';
import { useResume } from '../../Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Skills.css';
import { ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {
  const [skill, setSkill] = useState('');
  const { skills, setSkills } = useResume();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skill.trim()) {
      toast.error('Empty Input', {
        autoClose: 3000,
        closeOnClick: true,
      });
      return;
    }
    const newSkill = {
      id: uuidv4(),
      name: skill,
    };
    setSkills([...skills, newSkill]);
    setSkill('');
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter((elem) => elem.id !== id));
  };

  return (
    <div className="skills-container">
      <form className="skills-form" onSubmit={handleSubmit}>
        <div className="skills-form-control">
          <label htmlFor="skill">Add Skills</label>
          <input
            onChange={(e) => setSkill(e.target.value)}
            value={skill}
            name="skill"
            id="skill"
            type="text"
            placeholder="Skill"
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <div className="skills-tags">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <div className="skills-tag" key={skill.id}>
              <span>{skill.name}</span>
              <button onClick={() => deleteSkill(skill.id)}>×</button>
            </div>
          ))
        ) : (
          <div className="skills-placeholder">No Skills Added</div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Skills;
