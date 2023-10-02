import React from 'react'

const Exotic = () => {
  return (
    <div className="w-5/6 max-w-[1400px] m-auto flex place-content-evenly flex-wrap flex-shrink border-t-2">
      <div className="text-4xl w-full md:px-7 mt-8 mb-4">Exotic 2023/2024</div>
      <div style={{backgroundImage: `url(https://feelthetravel.pl/wp-content/uploads/2018/07/tajlandia-jamesbond.jpg)`}}
      className="h-56 md:h-80 w-full md:w-5/6 2xl:h-80 2xl:w-[585px] bg-cover my-2 2xl:my-8 brightness-75 hover:brightness-105 hover:scale-105 ease-in-out duration-200">
         <div className="brightness-100 text-white text-3xl font-semibold bottom-5 left-5 absolute">Tajlandia</div>
      </div>
      <div style={{backgroundImage: `url(https://tygodnikbydgoski.pl/photo/article/w770/23301.jpg)`}}
      className="h-56 md:h-80 w-full md:w-5/6 2xl:h-80 2xl:w-[585px] bg-cover 2xl:bg-center my-2 2xl:my-8 brightness-75 hover:brightness-105 hover:scale-105 ease-in-out duration-200">
         <span className="brightness-100 text-white text-3xl font-semibold bottom-5 left-5 absolute">Dominikana</span>
      </div>
      <div style={{backgroundImage: `url(https://andreveiculos.com.br/blog/wp-content/uploads/2018/11/zanzibar.jpg)`}}
      className="h-56 md:h-80 2xl:h-56 w-full md:w-5/6 2xl:w-[380px] bg-cover my-2 brightness-75 hover:brightness-105 hover:scale-105 ease-in-out duration-200">
         <span className="brightness-100 text-white text-3xl font-semibold bottom-5 left-5 absolute">Zanzibar</span>
      </div>
      <div style={{backgroundImage: `url(https://ocdn.eu/pulscms-transforms/1/0Wxk9kpTURBXy84ZDA3ZTA4YjFhMGNjODVlMWFkZTQyMGNlM2I3ZjhjNi5wbmeTlQMAB80Ers0CoZUCzQSwAMPDkwmmODRmNjE2Bt4AAaEwAQ/kenijskie-trio.jpeg)`}}
      className="h-56 md:h-80 2xl:h-56 w-full md:w-5/6 2xl:w-[380px] bg-cover my-2 brightness-75 hover:brightness-105 hover:scale-105 ease-in-out duration-200">
         <span className="brightness-100 text-white text-3xl font-semibold bottom-5 left-5 absolute">Kenia</span>
      </div>
      <div style={{backgroundImage: `url(https://humanidades.com/wp-content/uploads/2019/03/tucan-2-e1587394227920.jpg)`}}
      className="h-56 md:h-80 2xl:h-56 w-full md:w-5/6 2xl:w-[380px] bg-cover my-2 brightness-75 hover:brightness-105 hover:scale-105 ease-in-out duration-200">
         <span className="brightness-100 text-white text-3xl font-semibold bottom-5 left-5 absolute">Wenezuela</span>
      </div>
    </div>
  )
}

export default Exotic