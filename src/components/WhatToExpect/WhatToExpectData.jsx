import React from 'react';
import { whatToExpect } from '../../data';
import './WhatToExpectData.css'; 

const ExpectationCard = ({ title, items }) => {
  return (
    <div className="expectation-card">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const WhatToExpectData = () => {
  return (
    <div className="expectation-container">
      {whatToExpect.map((expectation, index) => (
        <ExpectationCard
          key={index}
          title={expectation.title}
          items={expectation.items}
        />
      ))}
    </div>
  );
};

export default WhatToExpectData;
