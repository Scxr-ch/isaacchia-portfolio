import React from "react";
import { useState } from "react";
import { BrowserRouter,Route,Routes, NavLink ,Link   } from "react-router-dom";
//import {Hashlink as Link} from "react-router-hash-link";
import "./index.css";
import data from "./data";
import HomeIcon from "./assets/Home.svg";
import ReactIcon from "./assets/react.svg";

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
      <div className="flex secondary-300 overflow-hidden border-2 whitespace-nowrap righteous-regular inset-shadow-sm rounded-3xl p-2  m-1 md:m-2">
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
  
  function Home(){
    return(
        <div className="mt-60">
          <LandingPage/>
          <Infscrollbar/>
        </div>
        
    )
  }
  
export default Home;  