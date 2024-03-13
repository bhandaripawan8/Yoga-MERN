import React from 'react';

// import aos
import Cards from './components/Cards';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Facts from './components/Facts';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Header';
import Nav from './components/Nav';
import NavMobile from './components/NavMobile';
import Newsletter from './components/Newsletter';
import Pricing from './components/Pricing';

const App = () => {
  return <div className='overflow-hidden'>
    <Nav/>
    <Header/>
    <NavMobile/>
    <Cards/>
    <Facts/>
    <Features/>
    <Courses/>
    <Pricing/>
    <Newsletter/>
    <Contact/>
    <Footer/>

  </div>
};

export default App;
