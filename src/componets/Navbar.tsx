import React, { useState } from 'react'

const Navbar = () => {
  const[currentState, setCurrentState]=useState(false);
  return (
  <>
    <nav className="sticky top-0 z-10 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 inline-flex w-full h-20">
    <div className="text-gray-700 text-xl w-1/2 text-center items-center inline-flex">
        <div className="m-auto h-full inline-flex items-center">
            <img src="src\images\logo-black.png" className="h-full rounded-full mx-2"></img>
            <span>SkyTravel</span>
        </div>
    </div>
        <svg onClick={()=>setCurrentState(!currentState)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={false===currentState?"w-10 h-10 absolute right-5 lg:hidden":"w-10 h-10 hidden absolute right-5 lg:hidden"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg onClick={()=>setCurrentState(!currentState)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={false===currentState?"w-10 h-10 absolute hidden right-5 lg:hidden":"w-10 h-10 absolute right-5 lg:hidden"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>



    <ul className="space-x-4 text-gray-700 w-1/2 text-3xl place-content-center hidden lg:flex">
      <li>
        <a href="/vite-deploy/home" className="hover:text-gray-500">Home</a>
      </li>
      <li>
        <a href="/vite-deploy/travel" className="text-2xl hover:text-gray-500">Travel</a>
      </li>
      <li>
        <a href="/vite-deploy/contact" className="text-xl hover:text-gray-500">Contact</a>
      </li>
    </ul>    

  </nav>
  <div className={false === currentState ? "hidden" : "flex text-3xl w-full sticky top-20 border-b-2 border-black z-10"}>
    <ul className="bg-white w-full flex-row text-center">
      <li className='w-full text-center py-2 hover:bg-gray-700 hover:text-white duration-300'>
        <a href="/home">Home</a>
      </li>
      <li className="py-2 border-y-2 text-center hover:bg-gray-700 hover:text-white duration-300">
        <a href="/travel">Travel</a>
      </li>
      <li className="py-2 text-center hover:bg-gray-700 hover:text-white duration-300">
        <a href="/contact">Contact</a>
      </li>
    </ul>   
  </div>  
</>
  )
}

export default Navbar