import React, {useState, useEffect, useRef} from 'react';
import data from './data';
import rowIcon from "./assets/Row.png";
import gridIcon from "./assets/Grid.png";
import "./index.css";
import filterIcon from "./assets/Filter_icon.png"
function Picture({certificate, setPic, setScroll}){
    const modalref = useRef(null);
    // const handleClickOutside = (event) => {
    //     if (modalref.current && !modalref.current.contains(event.target)) {
    //         setPic(false);
    //     }
    // }
    //  useEffect(()=>{
    //      if(certificate)
    //          {
    //          window.addEventListener("click", handleClickOutside);
    //          }
    //      return () => {
    //          window.removeEventListener("click", handleClickOutside);
    //      }    
    //  },[]);
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setPic(false);
            } 
        }
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [setPic]);    
    
    return(
        <div className='flex justify-center items-center fixed inset-0 bg-opacity-30 backdrop-blur-sm ' onClick={() => {setPic(false);setScroll(false)}} >
                <img src={certificate} className=" max-w-[100vw] md:max-w-[60%] w-auto m-auto max-h-[600px] rounded-2xl"></img>
        </div>
    )
}   
function Modal({achievement ,achievementIndex, handleModal, pic, setPic}){
    return(
        <div className='flex rounded-b-2xl secondary-500 w-[60vw] md:w-[80vw] 'onMouseLeave={()=> handleModal(null)}>  
            <button className=' text-white p-4 pr-0 text-left font-medium ' >
                <p className=''>{achievement.date}</p>
                <p>{achievement.description}</p>
            </button>
                <div className=' flex flex-column justify-center ' >
                    
                        {achievement.Certificate.length > 1 ? achievement.Certificate.map((certificate,index) => (
                            <img src={certificate} className=" w-[40%] h-auto rounded-2xl m-3" onClick={() =>setPic(certificate)}></img>))
                            :
                            (   
                            <img src={achievement.Certificate} onClick={()=>setPic(achievement.Certificate)} className="w-[30vw] max-w-[1000px]  h-auto rounded-2xl "></img>
                            )
                        }
                
                {pic && <Picture certificate={pic} setPic={setPic}></Picture>}
            </div>
        </div>
    )

}
function Togglebutton({toggle, setToggle, setContent}){
    const reset = () =>{
        setToggle(!toggle); 
        setContent(3)
    }
    
    return(
    <div className={`rounded-3xl  w-[15vw] md:w-[8vw] h-10 m-3 ml-8 ${toggle ? "bg-amber-200" : "bg-gray-300"}`}onClick={() => reset()}>
        <div className={`flex justify-center items-center bg-white rounded-full w-10 h-10 ${toggle ? "translate-x-0" : "translate-x-[9vw] md:translate-x-[5vw]"} transition-transform duration-300 ease-in-out`}>
            {toggle ? <img src={rowIcon} className='p-auto m-auto'></img> : <img src={gridIcon}></img>}
        </div>
    </div>)   
}
function Achievements({setScrolls,setShow}) {
    const [pic,setPic] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [Filter, setFilter] = useState(data.achievementFilter[0])
    const [Achievements, setAchievements] = useState(data.Achievements)
    const [modal, setModal] = useState(false)
    const [achievementIndex, setAchievementIndex] = useState(null)
    const [content, setContent] = useState(3)
    const [scroll, setScroll] = useState(false)
    const [mobilefilter, setMobileFilter] = useState(false)
    const handleModal = (index) => {
        setAchievementIndex(index)
        setModal(!modal)
    }
    const handlePicture = (picture) => {
        setPic(picture)
        setScroll(true)

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
    useEffect(() => {
        if (scroll) {
            document.body.style.overflow = "hidden";  // Disable background scrolling
        } else {
            document.body.style.overflow = "auto";  // Re-enable scrolling when closed
        }

        return () => {
            document.body.style.overflow = "auto"; // Ensure reset on unmount
        };
    }, [scroll]);
    return (
        <div className=''>
            <h2 className='text-5xl text-white text-center font-bold mt-50'>Achievements & Certificates</h2>
            <div className='tertiary-400 rounded-2xl  md:m-6 md:w-[95vw] w-[70vw] justify-center items-center m-auto'>
                <div className='flex pl-10 md:w-full'>
                    <div className='hidden md:flex'>
                        {data.achievementFilter.map((filter)=>(
                            <button className={`m-3 ml-5 text-2xl  float-left  ${Filter === filter ? "text-white" : "text-gray-300"} transition `} onClick={() =>{ handleFilter(filter); setContent(3)}} key={filter}>
                                {filter}
                            </button>  
                        ))}
                    </div>
                        {/* for mobile view  */}
                    <div className='flex flex-col md:hidden w-[20vw] h-auto justify-center items-center text-center m-3 bg-white rounded-3xl ' onClick={()=>setMobileFilter(!mobilefilter)}>
                        <div className='flex '><img className='shrink md:shrink-0' src={filterIcon}></img>
                            <p className='px-4 font-semibold text-xl'>Filter</p></div>
                            {mobilefilter &&<div className='  w-full inline-block'>
                            <ul className='text-center bg-white rounded-b-2xl w-auto h-auto '>
                            {data.achievementFilter.map((filter)=>(
                            <li className={` z-10  text-black font-xl font-semibold m-3 cursor-pointer transition ${Filter === filter ? "" : "bg-gray-300"} transition `} onClick={() =>{ handleFilter(filter); setContent(3)}} key={filter}>
                                {filter}
                            </li>  
                            ))}
                            </ul>
                        </div>}  
                    </div>
                    <Togglebutton toggle={toggle} setToggle={setToggle} setContent={setContent}></Togglebutton>
                </div>
                <div>
                    {Achievements.length >0 ? (
                    <div className={`flex  ${toggle ?" flex flex-col ml-[2%]": "items-center m-auto p-auto justify-center grid-col-1 grid md:grid-cols-3 md:gap-12 md:grid"} `} >
                    
                        {Achievements.slice(0,content).map((achievement,index) => (
                            toggle ? (
                                <div key={achievement.title}>
                                    <button className={`text-2xl text-white p-2  text-left loader font-bold ${index === achievementIndex ?"secondary-500 rounded-t-2xl w-[60vw] md:w-[80vw] text-left":""}`} onClick={()=> handleModal(index)} >{achievement.title}</button>
                                    {index === achievementIndex &&<Modal achievement={achievement} achievementIndex={achievementIndex} handleModal={handleModal} pic={pic} setPic={setPic}/>}
                                </div>):(
                                    <div className='w-[60vw] h-[50vh] secondary-400 m-5 p-6 pb-13 rounded-2xl  'key={achievement.title}>
                                        <img  className="max-h-[30vh] w-auto h-auto m-auto"src={achievement.Certificate[0]} onClick={() => {handlePicture(achievement.Certificate[0]);setScrolls(false);setShow(false)}}></img>
                                        <p className='text-white font-bold'>{achievement.title}</p>
                                        <p className='text-white'>{achievement.date}</p>
                                        <p>{achievement.description}</p>
                                    </div>)
                            // <div className='rounded-2xl secondary-500 text-white p-4 m-3'>
                            //     <p className=''>{achievement.date}</p>
                            //     <p>{achievement.title}</p>
                            //     <p>{achievement.description}</p>
                            // </div>
                        ))}
                        {pic &&  <div>
                            <Picture setPic={setPic} certificate={pic} setScroll={setScroll}></Picture>
                        </div>}
                    </div>
                    ):(
                        
                    <p className='text-white font-bold text-center text-2xl'>No Achievement</p>
                    
                    )}
                </div>
                <div className='flex flex-row items-center justify-center'>
                    {Achievements.length > 3 && content <= Achievements.length + 2  && <button className='secondary-400 p-3 rounded-2xl text-white text-center mt-5 text-xl m-2' id="load" onClick={() => setContent(prev => prev+ 3)} >Load more </button> }
                    {content > 4 && <button className='secondary-400 p-3 rounded-2xl text-white text-center mt-5 text-xl m-2' id="load " onClick={() => setContent(prev => Math.max(3, prev-3))} >Load less </button> }
                </div>
            </div>
        </div>
    );
}

export default Achievements;