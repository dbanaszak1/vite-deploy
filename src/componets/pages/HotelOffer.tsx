import React, { useState } from 'react'
import {useLocation, useSearchParams, Link} from "react-router-dom"
import Slider2 from '../Slider2'
import Footer from '../Footer'


const HotelOffer = () => {

  const [selectedDeparture,setSelectedDeparture]=useState("Select your flight")
  const [selectedDepTime,setSelectedDepTime]=useState("Select departure time")
  const [selectedArrival,setSelectedArrival]=useState("Select return flight destination")
  const [selectedArrTime, setSelectedArrTime]=useState("Select time")
  const [selectedListActive, setSelectedListActive]=useState(false)
  const [selectedList, setSelectedList]=useState(0)

    
const location = useLocation()
const {hotel} = location.state

const rateHotel =(rate: number)=>{
  if(rate>=9)
  return(<span>Magnificent</span>)
  if(rate>=8)
  return(<span>Very good</span>)
  if(rate>=6)
  return(<span>Good</span>)
  if(rate>=4)
  return(<span>Middling</span>)
  else
  return(<span>Poor</span>)
};

const flights=[
  {
    city: "Warszawa",
    deptime:["9.10", "10.15", "15.45", "19.00"],
    arrtime:["10.00", "10.15", "15.45", "19.00"]
  },
  {
    city: "Kraków",
    deptime:["10.00", "10.15", "15.45", "19.00"],
    arrtime:["10.00", "10.15", "15.45", "19.00"]
  },
  {
    city: "Poznan",
    deptime:["10.00", "10.15", "15.45", "19.00"],
    arrtime:["10.00", "10.15", "15.45", "19.00"]
  },
]

const randomDescr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis in a explicabo doloremque? Aperiam voluptas a dolorem ipsa! Eligendi soluta inventore numquam minus expedita. Voluptatum odio voluptatem nisi hic!"

const searchParams = useSearchParams();
const  star=(<svg className="h-5 w-5 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
</svg>)

const idxChecker = (selectedCity:string) => {
  let index=0;
  for (let i of flights ){
    if(selectedCity===i.city){return index}
  index++; 
  }
  return(0)
}
const changeSelectedDeparture = (city: string)=> {
  setSelectedDeparture(city)
  setSelectedDepTime("Select departure time")
}
const changeSelectedArrival = (city: string)=> {
  setSelectedArrival(city)
  setSelectedArrTime("Select arrival time")
}

const isActive = () => {
  
}
  return (
  <>
    <div className='w-5/6 m-auto mt-10 flex flex-wrap'>
      <div className='mx-2 lg:hidden'>
        <div className="text-4xl font-italic mb-2 w-full ">{hotel.name}</div>
        <div className="text-3xl text-gray-500 mb-2 w-full ">{hotel.country}</div>
        <div className='text-lg '>{randomDescr}</div>        
      </div>
      <div className='w-full md:w-2/3'>
        <Slider2 slider={hotel.slides}/>  
      </div>
      <div className='w-full lg:w-1/3'>
        <div className='mx-3 xl:mx-8 hidden lg:block'>
          <div className="text-4xl font-italic mb-2 w-full">{hotel.name}</div>
          <div className="text-3xl text-gray-500 mb-2 w-full">{hotel.country}</div>
          <div className='text-lg'>{randomDescr}</div>
        </div>
        <div className='xl:m-8'>
          <div className='mt-10'><span className="font-bold text-2xl text-white bg-blue-600 rounded-lg p-2">{hotel.rate}</span></div>
          <div className='mt-2 text-xl'>{rateHotel(hotel.rate)}</div>
          <div className="text-lg text-gray-600">based on {hotel.ratecount} opinions</div>
          <div className='mt-2'>
            <div className='text-2xl text-gray-600 w-full'>Guests appreciate this hotel for:</div>
            <div className='inline-flex w-full'><span>{star}</span> Location</div>
            <div className='inline-flex w-full'><span>{star}</span> Rooms</div>
            <div className='inline-flex w-full'><span>{star}</span> Tidiness</div>
            <div className='inline-flex w-full'><span>{star}</span> Location</div>
            <div className='inline-flex w-full'><span>{star}</span> Service</div>
          </div>            
        </div>
      </div>  
    </div>
    <div className='w-5/6 m-auto'>
        <div className='flex-row'>
          <div className='text-3xl pt-8 pb-2'>Flight options:</div>
          <div className='inline-flex items-center h-10'>
            <svg className="h-10 w-10 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />  <line x1="3" y1="21" x2="21" y2="21" /></svg>  
            <span className='px-4 text-2xl'>Departure:</span>
            <li className='group px-4 text-2xl list-none cursor-pointer relative'>
              <div className='inline-flex'>
                <span onClick={()=>isActive()}>{selectedDeparture}</span>
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights.map((options,index)=>(
                    <ul key={index} onClick={()=>(changeSelectedDeparture(options.city))}  className='hidden group-hover:block text-xl static'>
                      {options.city}
                    </ul>
                ))}
              </div>
            </li>            
            <li className='group px-4 text-2xl list-none cursor-pointer relative'>
              <div className='inline-flex'>
                {selectedDepTime}
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights[idxChecker(selectedDeparture)].deptime.map((time,index)=>(
                    <ul key={index} onClick={()=>setSelectedDepTime(time)}  className='hidden group-hover:block text-xl static'>
                      {time}
                    </ul>
                ))}
              </div>
            </li>
          </div>
          <div className='inline-flex items-center w-full'>
            <svg className="h-10 w-10 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(15 12 12) translate(0 -1)" />  <line x1="3" y1="21" x2="21" y2="21" /></svg>  
            <span className='px-4 text-2xl'>Arrival:</span>
            <li className='group px-4 text-2xl list-none cursor-pointer relative'>
              <div className='inline-flex'>
                {selectedArrival}
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights.map((options,index)=>(
                    <ul key={index} onClick={()=>(changeSelectedArrival(options.city))}  className='hidden group-hover:block text-xl static'>
                      {options.city}
                    </ul>
                ))}
              </div>
            </li>            
            <li className='group px-4 text-2xl list-none cursor-pointer relative'>
              <div className='inline-flex'>
                {selectedArrTime}
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights[idxChecker(selectedDeparture)].arrtime.map((time,index)=>(
                    <ul key={index} onClick={()=>setSelectedArrTime(time)}  className='hidden group-hover:block text-xl static'>
                      {time}
                    </ul>
                ))}
              </div>
            </li>  
          </div>           
        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default HotelOffer
