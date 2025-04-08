import React, { use } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import data from './data'
import CloseIcon from "./assets/Close.png"
import Mediafile from "./assets/Media1.mp4"
import leftArrow from "./assets/Arrow_left.svg"
import rightArrow from "./assets/Arrow_right.svg"
import './index.css'
function Modal({ project, setShowModal, Colors, setCurrentIndex, currentIndex, setProject, Competition}) {
    const [Animates, setAnimates] = useState("modal")
    const [link, setLink] = useState(false)
     // Prevent rendering if project is not ready
    const animates= null
    const left=() =>{
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setProject(Competition[currentIndex - 1]);
            setAnimates("rightmodal");
           
        }
    }
    const right=() =>{
        if (currentIndex < Competition.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setProject(Competition[currentIndex + 1]);
            
            setAnimates("leftmodal");
        }
    }
    useEffect(() => {
        const handleLeft = (e) => {
          if (currentIndex > 0 && e.key === "ArrowLeft") {
            left();
          }
        };
    
        window.addEventListener("keydown", handleLeft);
    
        // Cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("keydown", handleLeft);
      }, [left]);
      useEffect(() => {
        const handleRight = (e) => {
          if (currentIndex < Competition.length-1 && e.key === "ArrowRight") {
            right();
          }
        };
    
        window.addEventListener("keydown", handleRight);
    
        // Cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("keydown", handleRight);
      }, [right]);
    return (
            
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center " >
            
            
            {currentIndex >0 &&<button onClick={left} >
            <img src={leftArrow} className="absolute z-50 top-1/2 w-auto h-15 bg-white rounded-full p-2 shadow-lg ml-3 left-0  "></img>
        </button>}
                <div className={`primary-300 p-2 h-[80%] rounded-xl w-[80%] flex ${Animates}`} key={currentIndex} id={currentIndex}>
                
                <div className='w-[50%] overflow-auto '>
                    {project.index === 1 ? <video autoPlay loop controls className='w-full h-auto'><source src={Mediafile} type="video/mp4"/></video>:"" }
                    {project.images.map((image, index) => (
                        <img key={index} src={image} className='w-[80%] h-auto m-auto mt-2'></img>
                    ))}
                </div>
                <div className="overflow-auto w-[50%] ">
                <a className="text-black text-3xl font-bold mt-3 hover:underline" href={project.link} /*onMouseEnter={setLink(true)} onMouseLeave={setLink(false)} key={project.title}*/ target="_blank">{project.title}</a>
                {link &&<p className=''>{project.popupdescription}</p>}
                
                <p className="text-white mt-4 px-4">{project.longdescription}</p>
                <div className='grid grid-cols-3 mt-5   text-center w-full '>
                {project.tags.map((tag, index) =>  (
                        <div 
                            key={index} 
                            className={`border-2 border-white rounded-3xl m-2 w-[30] h-auto ${Colors[index % Colors.length]}`}
                        >
                           {tag}
                        </div>
                    ))}
                </div>
                </div><button onClick={() => setShowModal(null)} className=" p-2  bg-white rounded-[100%] float-right h-15 w-15">
                    <img src={CloseIcon}></img>
                </button>
            </div>
            {currentIndex < Competition.length-1 &&<button onClick={right} >
                
            <img src={rightArrow} className="absolute z-50 top-1/2  w-auto h-15 bg-white rounded-full p-2 shadow-lg mr-3 right-0 "></img>
        </button>}
        </div>
        
    );
}
function Competitions() {
    const[Competition, setCompetition] = useState(data.Projectinfo)
    const[Filter, setFilter] = useState("ALL")
    const Colors = ["primary-500","primary-200","primary-300","primary-400","secondary-400","tertiary-400","secondary-500","tertiary-200",]
    const Filtertypes= ["ALL","Competitions","Projects","Web Development","Engineering"]
    const [ShowModal, setShowModal] = useState(false)
    const [Project, setProject] = useState(null)
    const [Loadmore, setLoadmore] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(null)
    function handleFilter(type){
        if (type === "ALL"){
            setCompetition(data.Projectinfo)
        }
        else{
            {/* filter checks thru projinfo, in projinfo use .some on .tags to return true/false on the elements of the array  */}
            const filteredData = data.Projectinfo.filter((project) => project.tags.some((tag) => tag === type));
            setCompetition(filteredData)
        }
        setFilter(type)
    }
    
    useEffect(() => {
        if (ShowModal) {
            document.body.style.overflow = "hidden";  // Disable background scrolling
        } else {
            document.body.style.overflow = "auto";  // Re-enable scrolling when closed
        }

        return () => {
            document.body.style.overflow = "auto"; // Ensure reset on unmount
        };
    }, [ShowModal]);
    ;
    useEffect(() => {
        const handleEscape = (e) => {
          if (e.key === "Escape") {
            setShowModal(false);
          }
        };
    
        window.addEventListener("keydown", handleEscape);
    
        // Cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("keydown", handleEscape);
      }, []);
    return (
        <div id="Competitions">
            <h2 className='text-6xl text-white text-center font-bold mt-50'>Projects and Competitions</h2>
            
            <div className='mt-10 flex items-center justify-center'>
                {Filtertypes.map((type, index) => (
                    
                    <button key={index} className={`border-2 border-white  rounded-3xl m-3 p-2 w-[11%] h-auto button ${Filter === type ? "bg-white" :Colors[index % Colors.length]}`} onClick={() => handleFilter(type)}>
                        {type}
                    </button>
                ))}
            
            </div>
           <div>
           {Competition.length > 0 ? (
    <div className="grid-cols-3 grid gap-12 ">
        {(Loadmore ? Competition :Competition.slice(0,3)).map((project, index) => (
            <div key={index} className="m-3">
                
                
                <button 
                    onClick={() => { setShowModal(true); setCurrentIndex(Competition.indexOf(project)); setProject(project); }} 
                    className="primary-300 justify-center items-center border-2 rounded-2xl l-auto min-h-[550px]"
                >
                    {project.images.length > 0 && <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-[80%] items-center justify-center m-auto mt-2 rounded-xl"
                    />}
                    
                    <h2 className="text-center text-white text-xl mt-5  md:text-2xl">{project.title}</h2>
                    <p className="mt-5">{project.shortdescription}</p>
                    <div className="grid grid-cols-3 mt-3 ">
                    {project.tags.slice(0,3).map((tag, index) =>  (
                        <div 
                            key={index} 
                            className={`border-2 border-white rounded-3xl m-2 w-[30] h-auto ${Colors[index % Colors.length]}`}
                        >
                           {tag}
                        </div>
                    ))}
                </div>
                </button>
            
               
            </div>
        ))}
            
        
    </div>
) : (
    <p className="text-center text-white">No projects found.</p>
)}

            
           {ShowModal && <Modal project={Project} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setProject={setProject} setShowModal={setShowModal} Colors = {Colors} Competition={Competition} /> }
           {Competition.length > 3  && !Loadmore && <button className='secondary-400 p-3 rounded-2xl text-white text-center mt-5 text-xl items-center justify-center flex m-auto '  id="load" onClick={() => setLoadmore(true)} >Load more </button> }
           {Competition.length > 3 &&Loadmore && <button className='secondary-400 p-3 rounded-2xl text-white text-center mt-5 text-xl items-center justify-center flex m-auto '  id="load" onClick={() => setLoadmore(false)} >Load less </button> }
           </div>
        </div>
        

    );
}

export default Competitions;