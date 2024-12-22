import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import gambar2 from '../../assets/images/astronot.png'

const CardProject = () => {
  return (
    <div className="w-full border border-slate-300 rounded-lg p-5 shadow-md bg-white">
      <div className="logo w-full h-[200px]"><img src={gambar2} className="w-full h-full object-cover rounded-lg" /></div>
      <div className="desc flex items-center justify-between mt-4 gap-x-2">
        <div>
          <h5 className='font-bold mb-1'>Membuat Smart Contract Untuk Voting</h5>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, harum!</p>
        </div>
        <FaChevronRight size={20} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default CardProject