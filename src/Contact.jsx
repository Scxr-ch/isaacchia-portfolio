import React from 'react';
import data from "./data";
function Contact() {
    return (
        <div className='pb-50'>
            <h2 className='text-white text-center text-5xl font-bold mt-80'> Contact Me</h2>
            <div className="flex flex-wrap text-white font-semibold box-border">
            {data.contactInfo.map((contact,index) => (
                <a key={contact.title} className='w-[50%] mt-[4%] mb-5 justify-center items-center flex text-wrap 'href={index == 2 || index == 3 ? "mailto:"+ contact.link: contact.link} target="_blank">
                    <img  className="max-w-[10%] w-16 h-auto  rounded-xl m-3"src={contact.icon}></img>
                    <div className='flex flex-col  flex-wrap m-2'>
                        <p className='font-bold text-2xl'>{contact.title}</p>
                        <p className='text-wrap'>{contact.description}</p>
                    </div>
                </a>
            
            ))}  
            </div>  
        </div>
    );
}

export default Contact;