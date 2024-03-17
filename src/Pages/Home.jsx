import React from 'react';
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import icons1 from '../assets/images/icon01.png'
import AboutMe from '../components/Aboutme';
import PricingPlans from '../components/Pricing';
import Services from './Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className="container flex justify-between gap-4">
        <div className='flex flex-col lg:flex-row gap-[120px] items-center justify-between'>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>Let's collaborate to grow the peace of mind</h1>
            <p className='text__para'>Yoga cultivates mental growth by fostering mindfulness, enhancing focus, reducing stress, promoting self-awareness, and fostering a sense of inner peace.</p>
            <button className='btn mb-10'>Request an Appointment</button>
            {/* Client counter section */}
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-[30px] mt-5 lg:mt-0'>
              {/* Year of Experience */}
              <div>
                <h2 className='text-[35px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>3+</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Year of Experience</p>
              </div>
              {/* Clients */}
              <div>
                <h2 className='text-[35px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>20+</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Clients</p>
              </div>
              {/* Client Satisfaction */}
              <div>
                <h2 className='text-[35px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Client Satisfaction</p>
              </div>
            </div>
          </div>

         <div className='flex flex-wrap gap-4 w-90'>
          {/* First image */}
          <div className='w-1/2'>
            <img src={hero1} alt="" className='w-full h-full object-cover' />
          </div>
          {/* Second and third images */}
          <div className='flex flex-col gap-4'>
            <img src={hero2} alt="" className='w-full h-60 object-cover'/>
            <img src={hero3} alt="" className='w-full h-60 object-cover'/>
          </div>
        </div>
        </div>
      </div>
    </section>

    {/* how it works */}
    <section>
      <div className="container">
        <div className='lg:w-[470px] mx-auto'>
              <h2 className='heading text-center'>
              Providing the best yoga services
              </h2>
              <p className='text__para text-center'>World class services for everyone, from the certified yoga Instructor</p>
        </div>
        <div className='mt-20'>
        <AboutMe/>
        </div>
        <div className='mt-20'>
          <PricingPlans/>
        </div>
        <div className='p-10 mt-10'>
          <Services/>
        </div>
        <div>
        <Testimonials/>
        </div>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src= {icons1} alt="" />
              </div>

            </div>
        </div> */}
      </div>
    </section>
    </>
    


  );
}

export default Home;
