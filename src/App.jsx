import { useState, useEffect, useRef } from 'react'
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
import ArrowUpIcon from "./assets/upload.png"

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
      <a href='#Home'>
        <img src={HomeIcon} alt='Home Icon' className='w-13 h-12'></img>
      </a>
    </div>
  )
}
function Btnscrolltop({show, setShow}) {
  //const [show, setShow] = useState(false)
  const Backtotop=() =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  useEffect(()=>{
    window.onscroll = () =>{
      if (window.scrollY > 70){
        setShow(true)
      }
      else{
        setShow(false)
      }
    }
  },[])
  
  return(
    <div className={`fixed z-50 bottom-5 right-10  p-10 ${show ? "block btnscroll":"antibtnscroll"}`}>
      <button className='rounded-full bg-black p-auto w-13 h-auto' onClick={Backtotop}>
        <img className="w-full"src={ArrowUpIcon}></img>
      </button>
    </div>
  )
}
const Navbar = ({setScroll, scroll, setShow,show}) => {
    const[onetime,setonetime] = useState(0)
    //const[scroll, setScroll] = useState(false)
    const[scrolltracker, setScrollTracker] = useState(0)
    
    const appear = useRef(0)
    

    useEffect(()=>{
      const handleNav =() =>{
        const currentScroll = window.scrollY
        console.log("current "+currentScroll)
        console.log("past "+appear.current)
        console.log("state"+scroll)
        
        if(currentScroll > appear.current){
          setScroll(true)
        }
        else if (currentScroll < appear.current){
          setScroll(false)
        }
        else{
          setScroll(true)
        }
        setTimeout(()=>{
          appear.current = currentScroll
        },1000)
        
      }
      window.addEventListener("scroll", handleNav)
      return () =>{ window.removeEventListener("scroll", handleNav)} 
    },[])
    return (
      <div>
        <div className={`max-w-screen-xl hidden md:flex mx-auto mt-10 fixed right-0 left-0 top-0 z-50 bg-transparent  ${scroll ? " rounded-4xl bg-white ": ""}`}>
          <nav className=' p-2 m-0 flex item-center list-none gap-5 mx-auto rounded-4xl '>
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
        <Btnscrolltop setShow={setShow} show={show}/>
      </div>
    );
  };
function App() {
  const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(false)
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
      <Navbar setScroll={setScroll} setShow={setShow} show={show} scroll={scroll}></Navbar>
      <div ><Home/></div>
      <div id='Education'><Education/></div>
      <div id='Competitions'><Competitions setScroll={setScroll} setShow={setShow}/></div>
      <div id='Achievements'><Achievements setScrolls={setScroll} setShow={setShow}/></div>
      <div id="Contact"><Contact/></div>
    </>
  );
}

export default App;
