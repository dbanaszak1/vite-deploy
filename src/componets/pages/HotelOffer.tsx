import React from 'react'
import {useLocation} from "react-router-dom"
import Slider2 from '../Slider2'


const HotelOffer = () => {
    
const location = useLocation()
const {hotel} = location.state
  return (
    <div>
      <Slider2 slider={hotel.slides}/>
    </div>
  )
}

export default HotelOffer
