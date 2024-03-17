import React from 'react';
import Services1 from '../assets/images/services1.png'

const YogaServices = () => {
    return (
      <>
      <h2 className='text-black text-[30px] flex items-center justify-center'>Services</h2>
      <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            {/* Left cards */}
            <div className="flex flex-col lg:flex-col justify-center lg:justify-start items-center lg:items-start mb-8 lg:mb-0">
                <div className="bg-gray-200 p-4 rounded-lg mb-4 h-[200px] w-[200px]">
                    <h3 className="text-lg font-semibold mb-2">Hatha Yoga</h3>
                    <p className="text-sm">Focuses on physical postures (asanas) and breathing techniques.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold mb-2">Vinyasa Yoga</h3>
                    <p className="text-sm">Dynamic flow-based practice linking movement with breath.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Yin Yoga</h3>
                    <p className="text-sm">Gentle, slow-paced practice targeting deep connective tissues.</p>
                </div>
            </div>
            {/* Middle image */}
            <div className="mb-8 lg:mb-0">
                <img src={Services1} alt="services1" className="w-full lg:w-auto h-auto rounded-lg" />
            </div>
            {/* Right cards */}
            <div className="flex flex-col lg:flex-col justify-center lg:justify-start items-center lg:items-start">
                <div className="bg-gray-200 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold mb-2">Kundalini Yoga</h3>
                    <p className="text-sm">Focuses on awakening the energy at the base of the spine.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold mb-2">Ashtanga Yoga</h3>
                    <p className="text-sm">Structured series of poses synchronized with breath (vinyasa).</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Restorative Yoga</h3>
                    <p className="text-sm">Incorporates props to support the body in deep relaxation.</p>
                </div>
            </div>
        </section>
      </>
        
    );
};

export default YogaServices;
