import React from 'react'
import SocialMedia from '../SocialMedia'
import Footer from '../Footer'

const AboutPage = () => {
  return (
    <div className='bg-gray-800'>
      <div className='w-5/6 lg:w-2/3 m-auto justify-center'>
        <div className='w-full text-center text-4xl py-10 font-semibold text-gray-200'>
            <span>About the website</span>     
            <div className="justify-center m-auto w-40 my-4"><img src="/images/logo-black.png" className="rounded-full mx-2"></img></div>         
            <div className='text-xl lg:w-2/3 m-auto text-white'>            
              <span>I regret to inform you that this website is not associated with a legitimate company, and it does not offer any products or services for purchase :)</span>
            </div>
            <div className="w-full text-center text-4xl py-4 font-semibold text-gray-200 mt-10">Powered by</div>
            <div className='lg:inline-flex text-[90px] '>
              <img className='w-32 m-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"/>
              <div className='h-20 lg:h-32 w-16 flex items-center m-auto text-gray-200'>+</div>
              <img className='w-32 m-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
              <div className='h-20 lg:h-32 flex items-center m-auto w-16 text-gray-200'>+</div>
              <img className='w-32 m-auto' src="https://www.svgrepo.com/show/374144/typescript.svg"/>
              <div className='h-20 lg:h-32 flex items-center m-auto w-16 text-gray-200'>+</div>
              <img className='w-32 m-auto' src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"/>
              <div className='h-20 lg:h-32 flex items-center m-auto w-16 text-gray-200'>+</div>
              <img className='w-32 m-auto' src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
            </div>
        </div>
        <div>
          <div className='w-full text-center text-4xl mb-4 mt-10 font-semibold text-gray-200'>
              <span>About me</span>
          </div>
          <div>
            <img className='w-44 m-auto' src="https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png"/>
            <div className='text-xl lg:w-2/3 m-auto text-white text-center py-4'>I study Computer Science at the Faculty of Mathematics and Computer Science of Adam Mickiewicz University. I am actively developing and gaining experience at my university. For over a year I work as a freelancer creating my personal projects.
                  I am interested in working in web development company.
            </div>
          </div>         
        </div>
        <div className='w-full text-center text-4xl mb-4 mt-10 font-semibold text-gray-200'>
            <span>Contact</span>
        </div>
        <SocialMedia/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutPage
