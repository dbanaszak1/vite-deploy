import React, { useState } from 'react'

interface Props{
    slider: string[]
}

const Slider2 = ({slider}:Props) => {
  const [currentIndex,setCurrentIndex] =useState(0);
  const prev = () => {
    if (currentIndex === 0)
      setCurrentIndex(slider.length-1);
    else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const next = () => {
    if (currentIndex === slider.length-1)
      setCurrentIndex(0);
    else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-[930px] h-[500px] relative">
        <div style={{ backgroundImage: `url(${slider[currentIndex]})` }}
          className="h-full w-full bg-center bg-cover duration-500 rounded-2xl m-2">
            <div className="text-white text-4xl absolute top-[50%] right-[95%] translate-x-[10px] bg-black/20 rounded-full cursor-pointer"
            onClick={() => prev()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className="text-white text-4xl absolute top-[50%] left-[95%] -translate-x-[10px] bg-black/20 rounded-full cursor-pointer" onClick={() => next()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
        </div>
        <div className='inline-flex'>
          {slider.map((slides,index)=>(
            <div key={index} style={{ backgroundImage: `url(${slider[index]})`}} className='w-44 h-24 bg-cover rounded-2xl m-2'>
            </div>
          ))}
          <div className='w-40 h-24 border-2 border-gray-300 bg-gray-400 rounded-2xl text-center flex justify-center items-center m-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
            <span className='text-xl'>+{slider.length - 4} more</span>
          </div>
        </div>
    </div>
  )
}

export default Slider2
