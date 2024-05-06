import React from "react";
import { aboutMe } from "../../data";
import "./AboutMe.css";

const AboutMe = () => {
  const { ourValues } = aboutMe;

  return (
    <div className="aboutMeContainer">
      <div className="aboutContainer">
        <div className="aboutHeader">
          <h2>Our Values</h2>
        </div>
        <div className="aboutCard">
          <ul className="">
            {ourValues.map((value, index) => (
              <li key={index}>
                <h3>{value.topic}</h3>
                <p>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
