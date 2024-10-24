import React from 'react';
import './Section.css'; // 

const Section = ({ title, titleAlign, children }) => {
  return (
    <div className="section-container">
      <h2 className={`section-title text-${titleAlign}`}>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default Section;
