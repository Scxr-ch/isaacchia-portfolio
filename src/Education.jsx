import React from 'react';
import { useState } from 'react'
import { motion } from "motion/react"
import './index.css'
import data from './data'
import NPicon from "./assets/NP_Logo.png"
import SSTicon from "./assets/SST_logo.png"

<motion.div
className='line'
animate={{ height: "100%" }}
/>
function Timeline(){
    const[education, setEducation] = useState(data.Educationinfo)
    return(
        <>
    <div className='flex flex-col ml-30 ' id="Education">
        <h1 className='inter-bold text-5xl text-white p-5 font-bold md:text-7xl mt-50'>Education</h1> 
        {/*<div className='flex flex-row justify-between'>
        
            <div className='h-svh w-10 md:w-15 primary-300 rounded-3xl  '></div>
            </div>
        </div>*/}
        
         <div className='h-20 w-15 primary-300 ml-15 rounded-t-3xl'></div>
            
            {education.map((education,index) => (
                <div className='text-white flex '>
                    
                    <div className='flex-col mr-4 ml-4 mb-0 mt-0 items-center justify-center flex box-border '>
                        
                {/*<img className=" w-auto h-20 border-4 rounded-2xl primary-300  min-w-[148px]"src={education.logo} alt={education.school}*/}
                {education.id == 1 ? <img key={index} className=" w-auto h-20 border-4 rounded-2xl primary-300  min-w-[148px]"src={SSTicon} alt={education.school}/> : <img className=" w-auto h-38 border-4 rounded-2xl primary-300  min-w-[148px]"src={NPicon} alt={education.school}/>}
                
                <div key={index} className='line w-15.5 h-170 primary-300'></div>
                </div>
                
                
                
                <div className='flex flex-row'>
                    <div className='w-17 h-5 bg-amber-50 rounded-2xl m-3 ml-10 mr-5'></div>
                    <div className='w-17 h-5 bg-amber-50 rounded-2xl m-3 ml-5 mr-10'></div>
                </div>
                <div className='flex flex-col m-0 mr-16 mb-60 p-8 primary-500 box-border border-6 rounded-3xl max-w-[50%] min-h-[200px] flex-1'> 
                    <h2 className='text-4xl'>{education.date}</h2>
                    <h3 className='text-3xl '>{education.title}</h3>
                    <p className='p-1'>Grade: {education.Grade}</p>
                    {education.Activities.map((activity, index) => ( 
                        <p className="p-1" key={index}>{activity}</p>
                    ))}
                    <h3 className='underline text-2xl'>Competitions & Achievements</h3>
                    {education.Achievements.map((achievement, index) => (
                        <p className="p-1" key={index}>{achievement}</p>
                    ))}
                </div>
            </div>
                ))}
        <div className='h-20 w-15.5 primary-300 ml-15 rounded-b-3xl'></div>
    
    
    </div>
    </>
    )
}


function Education() {
    return (
        <div className='flex flex-col  ml-0'>
            
            <Timeline/>
            
        </div>
    );
  }
  
export default Education;