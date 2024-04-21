import React from 'react';
import testimonials1 from '../assets/images/testimonials1.png';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      "id": 1,
      "name": "Pawan Bhandari",
      "occupation": "Yoga Enthusiast",
      "image": testimonials1,
      "testimonial": "I have been practicing yoga with Prakriti for over a year now, and it has truly transformed my life. The instructors are knowledgeable and caring, and the atmosphere is welcoming."
    },
    {
      "id": 2,
      "name": "Michael Patel",
      "occupation": "Yoga Student",
      "image": testimonials1,
      "testimonial": "Attending yoga classes here has been an amazing experience. I feel more centered, focused, and relaxed after each session. The variety of classes offered caters to all levels."
    },
    {
      "id": 3,
      "name": "Emma Williams",
      "occupation": "Yoga Instructor",
      "image": testimonials1,
      "testimonial": "Learing yoga at this studio has been incredibly fulfilling. I love to discover the benefits of yoga, both physically and mentally. The community here is like family."
    },
    {
      "id": 4,
      "name": "David Brown",
      "occupation": "Yoga Practitioner",
      "image": testimonials1,
      "testimonial": "Practicing yoga has improved my flexibility, strength, and overall well-being. I appreciate the supportive environment of this studio and the guidance of the instructors."
    },
    {
      "id": 5,
      "name": "Olivia Garcia",
      "occupation": "Yoga Enthusiast",
      "image": testimonials1,
      "testimonial": "Yoga has become an essential part of my self-care routine, thanks to this studio. The classes are challenging yet rejuvenating, and I always leave feeling refreshed."
    }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Customer Testimonials</h1>
      <div className="testimonials-container overflow-x-auto">
        <div className="testimonials flex flex-nowrap justify-center">
          {testimonialsData.map((data) => (
            <div key={data.id} className="testimonial-card m-4 p-5 max-w-xs border rounded-lg overflow-hidden shadow-lg">
              <img src={data.image} alt={data.name} className="w-full h-auto rounded-xl" />
              <div className="p-4">
                <p className="text-gray-500 text-center mt-2 text-primaryColor">- {data.name}, {data.occupation}</p>
                <p className="text-lg text-center text-[15px] text-black">{data.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default Testimonials;
