import React from 'react'
import Footer from '../Footer'
import {useLocation} from "react-router-dom"



const BlogPage = () => {

const location = useLocation()
const {blog} = location.state
  return (
    <div>
      <div style={{backgroundImage: `url(${blog.bgimage})`}} className="w-full mb-10 h-[600px] bg-center bg-fixed shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
         <div className="w-full absolute top-[30%] bg-black bg-opacity-30">
            <h1 className="text-4xl text-white font-serif text-center w-full p-6 ">{blog.place}</h1>
            <div className="w-2/3 xl:w-1/3 text-l xl:text-xl text-white pb-6 m-auto text-center">{blog.subtitle}</div>
         </div>
      </div>
      <div className='w-5/6 m-auto'>
        <div className='inline-flex text-2xl font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{blog.place}</span>
         </div>
         <div>
            <div className='text-lg pt-4'>{blog.introduction}</div>
            <div className='text-lg pt-4'>{blog.p1}</div>
            <div className='text-lg pt-4'>{blog.p2}</div>
            <div className='text-lg pt-4'>{blog.p3}</div>
            <div className='text-lg pt-4'>{blog.end}</div>
         </div>
      </div>
     <Footer/>
    </div>
  )
}

export default BlogPage
