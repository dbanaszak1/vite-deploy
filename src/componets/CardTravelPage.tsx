import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className='lg:grid lg:grid-cols-3 relative'>
        {travelBlog.map((blog,index)=>(
        <div key={index} className={ index%4 === 0 ? "w-[400px] flex-row m-auto lg:row-span-2 mt-10 border-[1px] border-gray-700 rounded-md" : "w-[400px] lg:w-auto flex-row lg:inline-flex m-auto lg:col-span-2 mt-10 border-[1px] border-gray-700 rounded-md"}>
            <div className={ index%4 === 0 ?'w-[400px] h-80 bg-cover rounded-t-md relative': "w-[415px] h-[300px] bg-cover rounded-l-md relative"} style={{backgroundImage: `url(${blog.bgimage})`}}>
                <div className='absolute top-[5%] left-[5%] bg-blue-500 font-bold text-md p-1 text-white'>{blog.mark}</div>
                <div className='inline-flex absolute bottom-[5%] left-[5%] text-white text-2xl font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{blog.place}</span>
                </div>
            </div>
            <div className={ index%4 === 0 ?'w-[400px] h-80 p-4': "w-[415px] h-[300px] p-4"}>
                <h2 className='text-3xl'>{blog.title}</h2>
                <h3 className='text-2xl h-16'>{blog.subtitle}</h3>
                <div className='h-[120px] overflow-hidden text-md'>{blog.introduction}</div>
                <Link key={index} to={`../vite-deploy/travel/blog+${blog.title}`} state={{blog: blog}}>             
                    <button className='inline-flex text-lg text-gray-600 my-4'>
                        <span>Read More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>   
                </Link> 
            </div>
        </div>            
        ))}

    </div>
  )
}

export default CardTravelPage
