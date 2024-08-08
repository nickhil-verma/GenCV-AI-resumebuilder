import React, { useState } from 'react';
import { useResume } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';
import './Work.css';

const Work = () => {
  const { workList, setWorkList } = useResume();

  const addMore = () => {
    setWorkList([...workList, { id: uuidv4() }]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedWorkList = workList.map((work) =>
      work.id === id ? { ...work, [name]: value } : work
    );
    setWorkList(updatedWorkList);
  };

  const deleteWork = (id) => {
    setWorkList(workList.filter((elem) => elem.id !== id));
  };

  return (
    <div className="work-container">
      {workList.map((work) => (
        <div className="accordion-item" key={work.id}>
          <button className="accordion-button">
            <span className="accordion-header">
              {work.position || 'Position'}
            </span>
            <span className="accordion-icon">▼</span>
          </button>
          <div className="accordion-panel">
            <div className="form-control">
              <input
                value={work.position || ''}
                onChange={(e) => handleChange(e, work.id)}
                name="position"
                type="text"
                placeholder="Position"
              />
            </div>

            <div className="form-control">
              <input
                value={work.company || ''}
                onChange={(e) => handleChange(e, work.id)}
                name="company"
                type="text"
                placeholder="Company"
              />
              <select
                value={work.type || ''}
                onChange={(e) => handleChange(e, work.id)}
                name="type"
                placeholder="Employment Type"
              >
                <option value="">Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>

            <div className="form-control">
              <input
                value={work.startDate || ''}
                onChange={(e) => handleChange(e, work.id)}
                name="startDate"
                type="month"
                placeholder="Start Date"
              />
              <input
                value={work.endDate || ''}
                onChange={(e) => handleChange(e, work.id)}
                name="endDate"
                type="month"
                placeholder="End Date"
              />
            </div>

            <div className="form-control">
              <textarea
                value={work.description || ''}
                onChange={(e) => handleChange(e, work.id)}
                name="description"
                placeholder="Description..."
              />
            </div>

            <button
              className="delete-button"
              onClick={() => deleteWork(work.id)}
            >
              <MdDelete /> Delete
            </button>
          </div>
        </div>
      ))}

      {workList.length < 3 && (
        <button className="button" onClick={addMore}>
          Add More
        </button>
      )}
    </div>
  );
};

export default Work;
