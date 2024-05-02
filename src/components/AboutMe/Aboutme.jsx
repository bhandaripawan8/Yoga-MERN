import React from 'react';
import { aboutMe } from '../../data'; 

const AboutMe = () => {
  const { ourStory, ourValues } = aboutMe;

  return (
    <div>
      <h2>Our Story</h2>
      <p>{ourStory}</p>

      <h2>Our Values</h2>
      <ul>
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
