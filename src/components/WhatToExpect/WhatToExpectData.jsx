import React from 'react';
import WhatToExpect from './WhatToExpect'; 

    const cardsData = [
        {
            title: "What to Expect:",
            items: [
                "A rejuvenating retreat that combines physical activity with mindfulness practices",
                "Experienced instructors guiding you through yoga and hiking sessions",
                "Opportunities to connect with like-minded individuals and nature"
            ]
        },
        {
            title: "Yoga Benefits:",
            items: [
                "Improved flexibility and strength",
                "Reduced stress and anxiety",
                "Enhanced mind-body connection"
            ]
        },
        {
            title: "Hiking Highlights:",
            items: [
                "Breathtaking scenic viewpoints",
                "Exploration of diverse ecosystems",
                "Fresh air and natural beauty"
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center">
            {cardsData.map((index, data) => (
                <WhatToExpect key={index} title={data.title} items={data.items} />
            ))}
        </div>
    );


export default App;
