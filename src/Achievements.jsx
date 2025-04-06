import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import data from './data'
function Achievements() {
    const [Filter, setFilter] = useState(data.achievementFilter[0])
    const [Achievements, setAchievements] = useState(data.Achievements)
    const [modal, setModal] = useState(false)
    const [achievemtntIndex, setAchievementIndex] = useState(null)
    handleModal = (index) => {
        
    }
    const handleFilter = (filter) => {
        setFilter(filter)
        if (filter === "All") {
            setAchievements(data.Achievements)
        } 
        else if (filter ===">2022"){
                const filteredData = data.Achievements.filter((achievement) => achievement.date < 2022);
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
                </div>
                <div>
                    {Achievements.length >0 ? (
                    <div className='flex flex-col' >
                        {Achievements.map((achievement) => (
                            <div>
                                {!modal ?(<button className='text-2xl text-white p-2 font-bold' onMouseEnter={()=> handleModal()} onMouseLeave={()=> handleModal()}>{achievement.title}</button>)
                                 :(<button className='rounded-2xl secondary-500 text-white p-4 m-3' onMouseLeave={()=> handleModal(false)}>
                                    <p className=''>{achievement.date}</p>
                                    <p>{achievement.title}</p>
                                    <p>{achievement.description}</p></button>)}
                            </div>
                            // <div className='rounded-2xl secondary-500 text-white p-4 m-3'>
                            //     <p className=''>{achievement.date}</p>
                            //     <p>{achievement.title}</p>
                            //     <p>{achievement.description}</p>
                            // </div>
                        ))}
                    </div>
                    ):(
                        
                    <p>no Achievement</p>
                    
                    )}
                </div>
            </div>
        </div>
    );
}

export default Achievements;