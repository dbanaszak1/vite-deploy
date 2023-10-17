import React from 'react' 
import {Link} from 'react-router-dom'

const LastMinuteBanner = () => {
  const url="https://www.smartertravel.com/wp-content/uploads/2023/07/The-7-Best-Travel-Dresses-for-Europe-header-image-1400x400.png"
  return (
    <div className="w-full my-6 mt-20 ">
      <div style={{backgroundImage: `url(${url})`}} className="w-full bg-cover h-56 overflow-hidden bg-center md:bg-top">
        <div className="text-3xl w-full text-center text-gray-700">
          <h3 className="py-4">Check out our Last Minute offers!</h3>
        </div> 
      </div>
      <div className="w-48 m-auto py-4">
         <Link to="../vite-deploy/LastMinute"><button  className="border-2 border-gray-700 text-gray-700 text-2xl p-2 font-semibold mb-4 rounded-lg hover:bg-gray-700 hover:text-white duration-300">CHECK OFFERS</button></Link>
      </div>
    </div>
  )
}

export default LastMinuteBanner