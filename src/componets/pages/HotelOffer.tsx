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

const hotelUrl = "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg?h=662a4f7c&itok=7Laa3LkQ"

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
  setSelectedListActive(!selectedListActive)
}
const changeSelectedArrival = (city: string)=> {
  setSelectedArrival(city)
  setSelectedArrTime("Select arrival time")
  setSelectedListActive(!selectedListActive)
}

const changeSelectedDepTime = (time:string) => {
  setSelectedDepTime(time)
  setSelectedListActive(!selectedListActive)
}

const changeSelectedArrTime = (time:string) => {
  setSelectedArrTime(time)
  setSelectedListActive(!selectedListActive)
}

const isActive = (listNumber:number) => {
  setSelectedList(listNumber);
  setSelectedListActive(!selectedListActive)
}
  return (
  <>

  {/*SLIDER & INFO*/}
    <div className='w-5/6 m-auto mt-10 mb-8 flex flex-wrap'>
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

{/*ROOM OPTIONS*/}
        <div className='w-full border-t-2 border-gray-300 mb-8'>
          <div className='text-3xl pt-8 pb-2'>Room options:</div>
          <div className='w-full'>
              <div className='lg:inline-flex rounded-2xl w-full border-2 my-4 border-gray-500'>
                <div className='w-full lg:w-1/3 h-48 rounded-t-2xl lg:rounded-l-2xl bg-cover' style={{backgroundImage: `url(${hotelUrl})`}}></div>
                <div className='lg:w-1/3 py-2 px-5 border-b-2 lg:border-x-2 border-gray-300'>
                  <div className='w-full text-xl'>Room code: <span className='text-gray-500'>2XFS4</span></div>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, adipisci. Beatae vitae voluptate a ipsa nisi provident corrupti consequatur molestias</span>
                </div>
                <div className='px-5 py-2 lg:w-1/3'>
                  <div className='inline-flex text-3xl font-semibold'>
                    <span>2 </span>
                    <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="5" r="2" />  <path d="M10 22v-5l-1-1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" /></svg>
                    <span className='text-xl text-gray-500 font-normal'>- Room for 2 people</span>
                  </div>
                </div>
              </div>

              <div className='lg:inline-flex rounded-2xl w-full border-2 my-4 border-gray-500'>
                <div className='w-full lg:w-1/3 h-48 rounded-t-2xl lg:rounded-l-2xl bg-cover' style={{backgroundImage: `url(https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg)`}}></div>
                <div className='lg:w-1/3 py-2 px-5 border-b-2 lg:border-x-2 border-gray-300'>
                  <div className='w-full text-xl'>Room code: <span className='text-gray-500'>4FHG9</span></div>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, adipisci. Beatae vitae voluptate a ipsa nisi provident corrupti consequatur molestias</span>
                </div>
                <div className='px-5 py-2 lg:w-1/3'>
                  <div className='inline-flex text-3xl font-semibold'>
                    <span>4 </span>
                    <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="5" r="2" />  <path d="M10 22v-5l-1-1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" /></svg>
                    <span className='text-xl text-gray-500 font-normal'>- Room for 4 people</span>
                  </div>
                </div>
              </div>

              <div className='lg:inline-flex rounded-2xl w-full border-2 my-4 border-gray-500'>
                <div className='w-full lg:w-1/3 h-48 rounded-t-2xl lg:rounded-l-2xl bg-cover' style={{backgroundImage: `url(https://webbox.imgix.net/images/owvecfmxulwbfvxm/c56a0c0d-8454-431a-9b3e-f420c72e82e3.jpg)`}}></div>
                <div className='lg:w-1/3 py-2 px-5 border-b-2 lg:border-x-2 border-gray-300'>
                  <div className='w-full text-xl'>Room code: <span className='text-gray-500'>1XFH7</span></div>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, adipisci. Beatae vitae voluptate a ipsa nisi provident corrupti consequatur molestias</span>
                </div>
                <div className='px-5 py-2 lg:w-1/3'>
                  <div className='inline-flex text-3xl font-semibold'>
                    <span>1 </span>
                    <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="5" r="2" />  <path d="M10 22v-5l-1-1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" /></svg>
                    <span className='text-xl text-gray-500 font-normal'>- Room for 1 person</span>
                  </div>
                </div>
              </div>
          </div>
        </div>

{/*FLIGHT OPTIONS*/}
        <div className='flex-row border-t-2 border-gray-300'>
          <div className='text-3xl pt-8 pb-2'>Flight options:</div>
          <div className='lg:inline-flex items-center lg:h-10'>
            <div className='inline-flex'>
              <svg className="h-10 w-10 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />  <line x1="3" y1="21" x2="21" y2="21" /></svg>  
              <span className='px-4 text-2xl'>Departure:</span>              
            </div>
            <li className='px-4 my-2 lg:my-0 text-2xl list-none cursor-pointer relative z-40 bg-blue-200 rounded-2xl mx-1'>
              <div onClick={()=>isActive(1)} className='inline-flex'>
                <span >{selectedDeparture}</span>
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights.map((options,index)=>(
                    <ul key={index} onClick={()=>(changeSelectedDeparture(options.city))}  
                        className={(selectedList===1 && selectedListActive===true) ? 'text-xl bg-blue-200 w-36 px-2 hover:bg-blue-100':"hidden"}>
                      {options.city}
                    </ul>
                ))}
              </div>
            </li>            
            <li className='px-4 text-2xl list-none cursor-pointer relative z-30 mx-1 bg-blue-200 rounded-2xl'>
              <div onClick={()=>isActive(2)} className='inline-flex'>
              <span>{selectedDepTime}</span>
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights[idxChecker(selectedDeparture)].deptime.map((time,index)=>(
                    <ul key={index} onClick={()=>changeSelectedDepTime(time)}
                        className={(selectedList===2 && selectedListActive===true) ? 'text-xl bg-blue-200 w-16 px-2 hover:bg-blue-100':"hidden"}>
                      {time}
                    </ul>
                ))}
              </div>
            </li>
          </div>

          <div className='inline-flex items-center w-full'>
            <svg className="h-10 w-10 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div className='px-4 text-2xl py-2 inline-flex'>
              <span>Time of visit:</span>
              <div className='bg-blue-200 rounded-2xl px-4 mx-2'> 7 Days</div>
            </div>
          </div>   

          <div className='lg:inline-flex  items-center w-full'>
            <div className='inline-flex'>
              <svg className="h-10 w-10 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(15 12 12) translate(0 -1)" />  <line x1="3" y1="21" x2="21" y2="21" /></svg>  
              <span className='px-4 text-2xl'>Arrival:</span>              
            </div>
            <li className='px-4 my-2 lg:my-0 text-2xl list-none cursor-pointer relative z-20 mx-1 bg-blue-200 rounded-2xl'>
              <div onClick={()=>isActive(3)} className='inline-flex'>
                <span>{selectedArrival}</span>
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights.map((options,index)=>(
                    <ul key={index} onClick={()=>(changeSelectedArrival(options.city))}
                        className={(selectedList===3 && selectedListActive===true) ? 'text-xl w-36 px-2 bg-blue-200 hover:bg-blue-100':"hidden"}>
                      {options.city}
                    </ul>
                ))}
              </div>
            </li>            
            <li className='px-4 text-2xl list-none cursor-pointer relative z-10 mx-1 bg-blue-200 rounded-2xl'>
              <div onClick={()=>isActive(4)} className='inline-flex'>
                {selectedArrTime}
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className='absolute w-40'>
                {flights[idxChecker(selectedDeparture)].arrtime.map((time,index)=>(
                    <ul key={index} onClick={()=>changeSelectedArrTime(time)}
                        className={(selectedList===4 && selectedListActive===true) ? 'text-xl bg-blue-200 w-16 px-2 hover:bg-blue-100':"hidden"}>
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
