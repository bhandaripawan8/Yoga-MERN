import React from 'react';

const WhatToExpect = ({ title, items }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">{title}</h3>
            <ul className="text-lg text-gray-700">
                {items && items.map((item, index) => (
                    <li key={index} className="mb-2">
                        <svg className="w-6 h-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WhatToExpect;
