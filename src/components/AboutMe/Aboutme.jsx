// AboutMe.js
import React from 'react';
import { aboutMe } from '../../data';
import './AboutMe.css'; // Import the CSS file

const AboutMe = () => {
  const { ourStory, ourValues } = aboutMe;

  return (
    <div className="about-me-container"> {/* Apply the container class */}
      <h2>Our Story</h2>
      <p className="about-me-story">{ourStory}</p>

      <h2>Our Values</h2>
      <ul className="about-me-values"> {/* Apply the values class */}
        {ourValues.map((value, index) => (
          <li key={index}>
            <h3>{value.topic}</h3>
            <p>{value.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMe;
