import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import data from './data'
function Modal({achievement ,achievementIndex, handleModal}){
    return(
        <div className='flex rounded-b-2xl secondary-500 w-[80%]'>  
            <button className=' text-white p-4 pr-0 text-left font-medium ' onMouseLeave={()=> handleModal(null)}>
                <p className=''>{achievement.date}</p>
                <p>{achievement.description}</p>
                </button><div className=' flex flex-column justify-center overflow-auto'>
                {achievement.Certificate.length > 1 ? achievement.Certificate.map((certificate,index) => (
                    <img src={certificate} className="w-[40%] h-auto rounded-2xl m-3"></img>))
                    :
                    (
                        
                    <img src={achievement.Certificate} className="w-[50%] max-w-[1000px]  h-auto rounded-2xl "></img>
                    
                    )
                }
                </div>
        </div>
    )

}
function Togglebutton(){
    return(<div className='bg-gray-300 rounded-3xl w-[8%] h-auto m-3 ml-8'>
        <img></img>
    </div>)   
}
function Achievements() {
    const [Filter, setFilter] = useState(data.achievementFilter[0])
    const [Achievements, setAchievements] = useState(data.Achievements)
    const [modal, setModal] = useState(false)
    const [achievementIndex, setAchievementIndex] = useState(null)
    const handleModal = (index) => {
        setAchievementIndex(index)
        setModal(!modal)
    }
    const handleFilter = (filter) => {
        setFilter(filter)
        if (filter === "All") {
            setAchievements(data.Achievements)
        } 
        else if (filter ===">2022"){
                const filteredData = data.Achievements.filter((achievement) => achievement.date <= 2022);
                setAchievements(filteredData)
            }
        else {
            
            const filteredData = data.Achievements.filter((achievement) => achievement.date === filter);
            
            setAchievements(filteredData)
        }
    }
    return (
        <div className=''>
            <h2 className='text-5xl text-white text-center font-bold mt-50'>Achievements & Certificates</h2>
            <div className='tertiary-400 rounded-2xl m-5 '>
                <div className='flex  pl-10  w-full  '>
                    {data.achievementFilter.map((filter)=>(
                        <button className={`m-3 ml-5 text-2xl  float-left  ${Filter === filter ? "text-white" : "text-gray-300"}`} onClick={() => handleFilter(filter)} key={filter}>
                            {filter}
                        </button>  
                    ))}
                    <Togglebutton></Togglebutton>
                </div>
                <div>
                    {Achievements.length >0 ? (
                    <div className='flex flex-col ml-[2%]' >
                        {Achievements.map((achievement,index) => (
                            <div>
                                <button className={`text-2xl text-white p-2  font-bold ${index === achievementIndex ?"secondary-500 rounded-t-2xl w-[80%] text-left":""}`} onClick={()=> handleModal(index)} >{achievement.title}</button>
                                {index === achievementIndex &&<Modal achievement={achievement} achievementIndex={achievementIndex} handleModal={handleModal}/>}
                            </div>
                            // <div className='rounded-2xl secondary-500 text-white p-4 m-3'>
                            //     <p className=''>{achievement.date}</p>
                            //     <p>{achievement.title}</p>
                            //     <p>{achievement.description}</p>
                            // </div>
                        ))}
                    </div>
                    ):(
                        
                    <p className='text-white font-bold text-center text-2xl'>No Achievement</p>
                    
                    )}
                </div>
            </div>
        </div>
    );
}

export default Achievements;