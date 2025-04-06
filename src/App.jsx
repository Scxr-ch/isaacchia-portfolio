import { useState } from 'react'
import { motion } from "motion/react"
import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom'
import './index.css'
import data from './data'
import HomeIcon from './assets/Home.svg'
import ReactIcon from './assets/react.svg'
import Education from './Education.jsx'
import Achievements from './Achievements.jsx'
import Competitions from './Competitions.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'


function App() {
  return (
    <>
    <div className='primary-600'>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/Competitions' element={<Competitions/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter> */}
      <Home/>
      <Education/>
      <Competitions/>
      <Achievements/>
      <Contact/>
      </div>
    </>
  );
}

export default App;
