import React from "react";
import { useNavigate } from 'react-router-dom';
import   { useEffect, useState } from 'react'
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import "./ResumePreview.css";

// Utility function to replace **bold** with <b>bold</b>
const boldenText = (text) => {

  
  if (!text) return text;

  const regex = /\*\*(.*?)\*\*/g;
  return text.replace(regex, "<b>$1</b>");
};

const ResumePreview = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();

  return (
    <div className="resume-container" ref={printElem}>
      <div className="resume-header">
        {about.picture && <img src={about.picture} alt="avatar" />}
        <div className="info">
          <h4>{about.name || `${loggedInUser}`}</h4>
          <p>{about.role || "Enter Your Role"}</p>
        </div>
      </div>

      <div className="contact-info" style={{ backgroundColor: theme }}>
        <div>
          <MdMail />
          <span>{about.email || "vermanickxxx@gmail.com"}</span>
        </div>
        <div>
          <MdLocalPhone />
          <span>{about.phone || "+919060xxxx"}</span>
        </div>
        <div>
          <MdLocationPin />
          <span>{about.address || "Your Location?, IN"}</span>
        </div>
        <div>
          <RiLinkedinBoxFill />
          <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <hr />

      <div className="content">
        <div className="section">
          <h4>SUMMARY</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: boldenText(about.summary),
            }}
          ></p>
        </div>
      </div>

      <hr />

      <div className="content">
        <div className="section">
          <h4>EDUCATION</h4>
          {educationList.map((education, index) => (
            <div key={index} className="item">
              <p><strong>{education.degree || "B.Tech"}</strong></p>
              <p>{education.school || "Dayananda Sagar"}</p>
              <div className="date-grade">
                <span>{education.startYr || 2024} - {education.endYr || 2028}</span>
                <span>{education.grade || "8.5 CGPA"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="content">
        <div className="section">
          <h4>WORK EXPERIENCE</h4>
          {workList.map((work, index) => (
            <div key={index} className="item">
              <p><strong>{work.position || "Full Stack Developer"}</strong></p>
              <p>{work.company || "XYZ"} - {work.type || "Full-time"}</p>
              <p className="date-grade">
                <span>{work.startDate || "2018-03"} - {work.endDate || "2021-12"}</span>
              </p>
              <p>{work.description || "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="content">
        <div className="section">
          <h4>SKILLS</h4>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="tag" style={{ backgroundColor: theme.replace("400", "500") }}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="content">
        <div className="section">
          <h4>PROJECTS</h4>
          {projects.map((project, index) => (
            <div key={index} className="item">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                <p><strong>{project.name || "Project Name"}</strong></p>
                <BiLinkExternal />
              </a>
              <p>{project.description || "Lorem ipsum dolor sit amet consectetur adipisicing."}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
