import React from 'react'
import { IoStar } from "react-icons/io5";
function MovieCard() {
  return (
    <div className='w-40 mr-4 bg-slate-800 p-3 mb-4 rounded cursor-pointer hover:-translate-y-2 transition-all duration-100'>
        <img className='rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-mIzqO8ZpSlLB-LES2Rwp6ilKnRcQ-MbMA&s" alt="" />

    <div className=' mt-2'>
        <h1 className='text-gray-100 text-lg font-medium'>Hi There</h1>
       <div className="flex item-center">
         <div className='border border-orange-400 flex items-center text-orange-300 w-fit p-1 space-x-1 text-xs'>
    <IoStar size={15}/>
    <span className='font-bold'>9.1</span>
        </div>
        <span className='text-gray-100 ml-2 '>2012</span>
       </div>
    </div>
    </div>
  )
}

export default MovieCard