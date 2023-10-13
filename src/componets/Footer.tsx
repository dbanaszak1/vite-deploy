import React from 'react'

const Footer = () => {
  return (
    <footer className=" mt-10">
      <div className="w-full text-center text-3xl p-5 ">SkyTravel</div>
      <div className='w-full inline-flex justify-center'>
         <svg className="h-12 w-12 p-2 text-black border-[1px] border-black rounded-full mx-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
         <svg className="h-12 w-12 p-2 text-black border-[1px] border-black rounded-full mx-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
         <svg className="h-12 w-12 p-2 text-black border-[1px] border-black rounded-full mx-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
         <svg className="h-12 w-12 p-2 text-black border-[1px] border-black rounded-full mx-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
         <svg className="h-12 w-12 p-2 text-black border-[1px] border-black rounded-full mx-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
      </div>
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
      <div className="w-full text-sm bg-gray-400 mt-8 text-center p-2">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam distinctio, enim dolorum fuga quis. Sed fuga temporibus dolorum hic, perspiciatis laboriosam quia a iusto reiciendis quos adipisci quibusdam asperiores.
      </div>
    </footer>
  )
}

export default Footer