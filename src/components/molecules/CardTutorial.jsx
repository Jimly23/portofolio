import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import gambar2 from '../../assets/images/astronot.png'

const CardTutorial = () => {
  return (
    <div className="w-full border border-slate-300 rounded-lg p-5 shadow-md">
      <div className="logo"><img src={gambar2} className="w-[60px] rounded-lg" /></div>
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

export default CardTutorial