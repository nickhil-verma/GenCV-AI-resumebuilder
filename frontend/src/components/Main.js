import React from 'react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import './Main.css';

const Main = () => {
  const { printElem } = useResume();

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
  });

  return (
    <div className="main-container" id="builder">
      <h4 className="main-heading">Resume Builder</h4>

      <div className="main-inner-container">
        <div className="main-stack row">
          <ThemeSelect />
          <button className="download-button" onClick={handlePrint}>
            <MdOutlineFileDownload />
            Download
          </button>
        </div>
      </div>

      <div className="main-content row">
        <Builder />
        <ResumePreview />
      </div>
    </div>
  );
};

export default Main;
