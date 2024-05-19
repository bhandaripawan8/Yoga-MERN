import React from 'react'
import Home from '../components/Home/Home'
import Contacts from '../components/Contact/Contact'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Sessions from '../Pages/Sessions/Sessions'
import SessionsDetails from '../Pages/Sessions/SessionsDetails'
import {Routes, Route} from 'react-router-dom';
import Tarevir from '../components/Sessions/Tarevir'
import AboutMore from '../components/AboutMe/AboutMore'
import Gallery from '../components/Gallery/Gallery'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sessions/' element={<Sessions/>}/>
        <Route path='/sessionsdetails' element={<SessionsDetails/>}/>
        <Route path='/tarevir' element= {<Tarevir/>}/>
        <Route path='/about' element = {<AboutMore/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
    </Routes>
  )
}

export default Routers