import React, { useState } from 'react';
import About from './BuildSteps/About';
import Education from './BuildSteps/Education';
import Projects from './BuildSteps/Projects';
import Skills from './BuildSteps/Skills';
import Work from './BuildSteps/Work';
import './Builder.css';

const Builder = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'About', component: <About /> },
    { label: 'Education', component: <Education /> },
    { label: 'Skills', component: <Skills /> },
    { label: 'Work', component: <Work /> },
    { label: 'Projects', component: <Projects /> },
  ];

  return (
    <div className="builder-container">
      <div className="tabs">
        <div className="tab-list">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span>{tab.label}</span>
            </div>
          ))}
        </div>
        <div className="tab-content">{tabs[activeTab].component}</div>
      </div>
    </div>
  );
};

export default Builder;
