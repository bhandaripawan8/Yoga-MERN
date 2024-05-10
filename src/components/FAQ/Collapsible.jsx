import React, { useState } from 'react';

const Collapsible = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <button onClick={toggleCollapse} className="collapsible-button">
        {question}
      </button>
      {isOpen && <div className="collapsible-content">{answer}</div>}
    </div>
  );
};

export default Collapsible;
