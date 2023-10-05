import React from 'react'
import {useLocation} from "react-router-dom"
import Slider2 from '../Slider2'


const HotelOffer = () => {
    
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

  return (
    <div className='flex max-w-7xl m-auto'>
      <div className='w-[930px] m-8'>
        <Slider2 slider={hotel.slides}/>  
      </div>
      <div className='m-8'>
        <div className="text-4xl font-italic mb-2">{hotel.name}</div>
        <div className="text-3xl text-gray-500 mb-2">{hotel.country}</div>
        <div className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis inventore quae doloremque suscipit architecto. Doloremque placeat sint tenetur quibusdam numquam dolores nemo asperiores, ad culpa in saepe, sit magnam!
        </div>
        <div className='mt-10'><span className="font-bold text-2xl text-white bg-blue-600 rounded-lg p-2">{hotel.rate}</span></div>
        <div className='mt-2 text-xl'>{rateHotel(hotel.rate)}</div>
        <div className="text-lg text-gray-600">based on {hotel.ratecount} opinions</div>      
      </div>

    </div>
  )
}

export default HotelOffer
