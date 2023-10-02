import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="w-full text-center text-2xl p-5">SkyTravel</div>
      <div className="flex flex-wrap">
         <div className="w-1/3 text-center">
            <ul><div className="p-2 text-lg">For clients:</div>
               <li>Newsletter</li>
               <li>Insurance</li>
               <li>Complaints</li>
            </ul>
         </div>
         <div className="w-1/3 text-center">
            <ul><div className="p-2 text-lg">Contact:</div>
               <li>Support 24/7</li>
               <li>skytravel@gmail.com</li>
               <li>phone: 432765987</li>
            </ul>
         </div>
         <div className="w-1/3 text-center">
            <ul><div className="p-2 text-lg">Informations:</div>
               <li>About company</li>
               <li>Privacy</li>
               <li>Regulations</li>
            </ul>
         </div>
      </div>
      <div className="w-full text-sm bg-gray-200 mt-8 text-center p-2">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam distinctio, enim dolorum fuga quis. Sed fuga temporibus dolorum hic, perspiciatis laboriosam quia a iusto reiciendis quos adipisci quibusdam asperiores.
      </div>
    </footer>
  )
}

export default Footer