import React from 'react'
import { useState } from 'react';

const[isOpen,SetIsOpen] = useState(false)

interface Props{
    travelBlog: {
        bgimage: string;
        mark: string;
        place: string;
        title: string;
        subtitle: string;
        introduction: string;
        p1: string;
        p2: string;
        p3: string;
        end: string;
    }[]
}

const CardTravelPage = ({travelBlog}: Props) => {
  return (
    <div className='grid grid-cols-3'>
        {travelBlog.map((travelBlog,index)=>(
        <div key={index} className={ index%3 === 0 ? "flex-row m-auto row-span-2 mt-10 border-[1px] border-gray-700 rounded-md" : "inline-flex m-auto col-span-2 mt-10 border-[1px] border-gray-700 rounded-md"}>
            <div className={ index%3 === 0 ?'w-[400px] h-80 bg-cover rounded-t-md relative': "w-[400px] h-[300px] bg-cover rounded-l-md relative"} style={{backgroundImage: `url(${travelBlog.bgimage})`}}>
                <div className='absolute top-[5%] left-[5%] bg-blue-500 font-bold text-md p-1 text-white'>{travelBlog.mark}</div>
                <div className='inline-flex absolute bottom-[5%] left-[5%] text-white text-2xl font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{travelBlog.place}</span>
                </div>
            </div>
            <div className={ index%3 === 0 ?'w-[400px] h-80 p-4': "w-[350px] h-[300px] p-4"}>
                <h2 className='text-3xl'>{travelBlog.title}</h2>
                <h3 className='text-2xl h-16'>{travelBlog.subtitle}</h3>
                <div className='h-[120px] overflow-hidden text-md'>{travelBlog.introduction}</div>
                <button className='inline-flex text-lg text-gray-600 my-4'>
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>      
            </div>
            <div>
                
            </div>
        </div>            
        ))}

    </div>
  )
}

export default CardTravelPage
