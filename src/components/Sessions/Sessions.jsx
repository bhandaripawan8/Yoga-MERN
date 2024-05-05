import React from 'react';
import { yogaEvent } from '../../data'; 
import AreYou from './AreYou';


const Sessions = () => {

  return (
    <div>
      <AreYou/>
    <section>
      <p className='text-xl my-[10px] flex mx-auto text-center'>
        Outdoor Yoga Sessions
      </p>
      <p className='text-lg py-[5px]'>{yogaEvent.outdoorYogaSessions.description}</p>
    </section>

    <section>
      <p className='text-xl my-[10px] flex mx-auto text-center'>
        Hike and Yoga
      </p>
      <p className='text-lg py-[5px]'>{yogaEvent.hikeAndYoga.description}</p>
    </section>

    <section>
      <p className='text-xl my-[10px] flex mx-auto text-center'>
        {yogaEvent.aboutEvent.title}
      </p>
      <p className='text-lg py-[5px]'>{yogaEvent.aboutEvent.description}</p>
      <p className='py-[5px]'>Date: {yogaEvent.aboutEvent.date}</p>
      <p className='py-[5px]'>Location: {yogaEvent.aboutEvent.location}</p>

      <h3 className='py-[5px]'>Event Highlights</h3>
      <ul>
        {yogaEvent.aboutEvent.eventHighlights.map((highlight, index) => (
          <li key={index} className='text-lg py-[5px]'>{highlight}</li>
        ))}
      </ul>

      <h3 className='py-[5px]'>What to Expect</h3>
      <ul>
        {yogaEvent.aboutEvent.whatToExpect.map((expectation, index) => (
          <li key={index} className='text-lg py-[5px]'>{expectation}</li>
        ))}
      </ul>
    </section>
  </div>
  );
};

export default Sessions;
