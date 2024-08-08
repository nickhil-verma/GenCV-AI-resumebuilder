import React, { useState } from "react";
import { useResume } from "../../Context";
import ImageUpload from "../ImageUploadButton/ImageUpload.component";
import "./About.css";
import axios from "axios";
import { BsStars } from "react-icons/bs";

const About = () => {
  const { about, setAbout } = useResume();
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout({ ...about, [name]: value });
  };

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDr3-SvfGTkN4xBA1dzQMx04HeXj-HYbCk",
        method: "post",
        data: {
          contents: [{ parts: [{ text:`write summary for my resume applying for this role in 5o words keeping in mind ATS and bolden the important tems and  technology ${question}` }] }],
        },
      });

      const generatedAnswer = response.data.candidates[0].content.parts[0].text;
      setAbout({ ...about, summary: generatedAnswer });
      console.log(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
      setAbout({ ...about, summary: "Sorry - Something went wrong. Please try again!" });
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="about-container">
      {about.picture ? (
        <button
          onClick={() => {
            setAbout({ ...about, picture: "" });
          }}
          className="about-button"
        >
          Remove Image
        </button>
      ) : (
        <ImageUpload />
      )}

      <div className="about-form-row">
        <div className="about-form-control">
          <label htmlFor="name">Full Name</label>
          <input
            onChange={handleChange}
            name="name"
            id="name"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="about-form-control">
          <label htmlFor="role">Role</label>
          <input
            onChange={handleChange}
            name="role"
            id="role"
            type="text"
            placeholder="Role"
          />
        </div>
      </div>

      <div className="about-form-row">
        <div className="about-form-control">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="about-form-control">
          <label htmlFor="phone">Phone</label>
          <input
            onChange={handleChange}
            name="phone"
            id="phone"
            type="tel"
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="about-form-row">
        <div className="about-form-control">
          <label htmlFor="address">Address</label>
          <input
            onChange={handleChange}
            name="address"
            id="address"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="about-form-control">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            onChange={handleChange}
            name="linkedin"
            id="linkedin"
            type="url"
            placeholder="https://linkedin.com"
          />
        </div>
      </div>

      <form onSubmit={generateAnswer} className="about-form">
        <h1 className="about-title">Improve ATS score with AI</h1>
        <textarea
          required
          className="about-textarea"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`Add a role you are applying for:

            e.g.: 
              -LLM engineer using Python
              - Web developer using MERN stack`}
        ></textarea>
        <button
          type="submit"
          className={`about-button ${
            generatingAnswer ? "about-button-disabled" : ""
          }`}
          disabled={generatingAnswer}
        ><BsStars /> 
          Generate summary
        </button>
      </form>
    </div>
  );
};

export default About;
