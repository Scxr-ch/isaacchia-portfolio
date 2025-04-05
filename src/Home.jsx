import React from "react";
import { useState } from "react";
import { BrowserRouter,Route,Routes, NavLink  } from "react-router-dom";
//import {Hashlink as Link} from "react-router-hash-link";
import "./index.css";
import data from "./data";
import HomeIcon from "./assets/Home.svg";
import ReactIcon from "./assets/react.svg";


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
        <a href="#Home">
          <img src={HomeIcon} alt='Home Icon' className='w-13 h-12'></img>
        </a>
      </div>
    )
  }
  function LandingPage(){
    return(
      <div className=' m-12 justify-center flex items-center text-center flex-col' id="Home">
        <div className='md:shrink-0 moveup'>
        <img src={ReactIcon} className="h-48 w-full  md:h-full md:w-48"></img></div>
        <h2 className='text-white mt-3 movedown text-7xl inter-bold font-bold'>Hi, Im Isaac</h2>
      </div>
    )
  }
  function Infscrollbar() {
    
    return (
      <div className="flex secondary-300 overflow-hidden border-2 whitespace-nowrap righteous-regular inset-shadow-sm rounded-3xl p-2 m-2">
        <ul className=" w-max scroll flex">
          {[...data.scroll,...data.scroll].map((value, index) => (
            <li key={index} className="flex gap-2">
              <p className='px-20 p-3'>{value}</p>
            </li>
          ))}
        </ul>
       
      </div>
    );
  }
  
  
  const Navbar = () => {
    {/*const [navItems,setnavItems] = useState(["Education", "Projects", "Competitions","Contact me"]) 
      border-7 border-amber-50  bg-blue-400 */}
    const[onetime,setonetime] = useState(0)
    return (
      
      <div className='max-w-screen-xl text-center justify-center hidden md:flex mx-auto pt-10 '>
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
  
  function Home(){
    return(
        <div>
        <Navbar/>
        <LandingPage/>
        <Infscrollbar/>
        </div>
    )
  }
  
export default Home;  