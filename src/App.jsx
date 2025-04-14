import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import './index.css'
import data from './data'
import HomeIcon from './assets/Home.svg'
import ReactIcon from './assets/react.svg'
import Education from './Education.jsx'
import Achievements from './Achievements.jsx'
import Competitions from './Competitions.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import Pagenotfound from './Pagenotfound.jsx'

{/* hover:bg-black hover:border-black hover:text-white */}
function NavElements({header}) {
  return (
   
      <div className='mt-5 box-border primary-400 p-4 mr-2 ml-2 border-0 rounded-3xl w-auto h-max'>
          <a href={`#${header}`}>
              {header}
          </a>
      </div>
       
  
);
}
function HomeBtn(){
  return(
    <div className='p-5 bg-white border-blue-50 border-6 rounded-full flex items-center justify-center home'>
      <a to='#Home'>
        <img src={HomeIcon} alt='Home Icon' className='w-13 h-12'></img>
      </a>
    </div>
  )
}
const Navbar = () => {
    {/*const [navItems,setnavItems] = useState(["Education", "Projects", "Competitions","Contact me"]) 
      border-7 border-amber-50  bg-blue-400 */}
    const[onetime,setonetime] = useState(0)
    const[scroll, setScroll] = useState(false)
    useEffect(()=>{
      const handleScroll =() =>{
        
      }
    
    },[])
    return (
      
      <div className={`max-w-screen-xl text-center justify-center hidden md:flex mx-auto pt-10 sticky top-0 z-50 bg-transparent ${onscroll ? "bg-white": ""}`}>
        <nav className='p-2 m-0 flex item-center list-none gap-5  mx-auto  rounded-4xl '>
            {data.navItems.map((item,index)=>(
            <>
              {/*math.floor rounds down to nearest int  */}
              {index === Math.floor(data.navItems.length/2) && <HomeBtn/>}
              {/*Use backtick to do JS */}
              <NavElements key={index} header={item} className={`
              ${index === 0 || index === 3 ? "first" : ""}
              ${index === 1 || index === 2 ? "second" : ""}
              `
            }
              />
            </>
            ))}
        </nav>
      </div>
    );
  };
function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Education' element={<Education/>}/>
          <Route path='Competitions' element={<Competitions/>}/>
          <Route path='Achievements' element={<Achievements/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter> */}
      <Navbar></Navbar>
      <div id='Home'><Home/></div>
      <div id='Education'><Education/></div>
      <div id='Competitions'><Competitions/></div>
      <div id='Achievements'><Achievements/></div>
      <div id="Contact"><Contact/></div>
    </>
  );
}

export default App;
