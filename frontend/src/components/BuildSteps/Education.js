import React, { useState } from 'react';
import { useResume } from '../../Context';
import './Education.css';

const Education = () => {
  const { educationList, setEducationList } = useResume();

  const addMore = () => {
    setEducationList([...educationList, {}]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = educationList.map((edu, i) => (
      index === i ? { ...edu, [name]: value } : edu
    ));
    setEducationList(updatedEducation);
  };

  const toggleAccordion = (index) => {
    setEducationList(educationList.map((edu, i) => (
      index === i ? { ...edu, isOpen: !edu.isOpen } : { ...edu, isOpen: false }
    )));
  };

  return (
    <>
      <div className="education-accordion">
        {educationList.map((education, index) => (
          <div key={index} className="education-accordion-item">
            <div
              className="education-accordion-button"
              onClick={() => toggleAccordion(index)}
            >
              <span>{education.degree || "Degree"}</span>
              <span>{education.isOpen ? '-' : '+'}</span>
            </div>
            {education.isOpen && (
              <div className="education-accordion-panel">
                <div className="education-form-control">
                  <input
                    onChange={(e) => handleChange(e, index)}
                    name="degree"
                    type="text"
                    placeholder="Degree"
                  />
                  <input
                    onChange={(e) => handleChange(e, index)}
                    name="school"
                    type="text"
                    placeholder="School"
                  />
                </div>
                <div className="education-form-control">
                  <label htmlFor="startYr">Start Year</label>
                  <input
                    onChange={(e) => handleChange(e, index)}
                    name="startYr"
                    id="startYr"
                    type="number"
                    min="1900"
                    max="2030"
                    placeholder="Start Year"
                  />
                </div>
                <div className="education-form-control">
                  <label htmlFor="endYr">End Year</label>
                  <input
                    onChange={(e) => handleChange(e, index)}
                    name="endYr"
                    id="endYr"
                    type="number"
                    min="1900"
                    max="2030"
                    placeholder="End Year"
                  />
                </div>
                <div className="education-form-control">
                  <label htmlFor="grade">Grade</label>
                  <input
                    onChange={(e) => handleChange(e, index)}
                    name="grade"
                    id="grade"
                    type="text"
                    placeholder="Grade"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {educationList.length < 2 && (
        <button className="education-button" onClick={addMore}>
          Add More
        </button>
      )}
    </>
  );
};

export default Education;
