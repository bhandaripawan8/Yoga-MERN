import React from 'react'
import Home from '../components/Home/Home'
import Contacts from '../components/Contact/Contact'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import {Routes, Route} from 'react-router-dom';
import Tarevir from '../components/Sessions/Tarevir'
import Gallery from '../components/Gallery/Gallery'
import Aboutus from '../components/AboutMe/AboutUs'
import Sessions from '../components/Sessions/Sessions'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/tarevir' element= {<Tarevir/>}/>
        <Route path='/aboutus' element = {<Aboutus/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
        <Route path='/sessions' element = {<Sessions/>}/>
        
    </Routes>
  )
}

export default Routers