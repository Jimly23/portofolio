import React from 'react'
import CardTutorial from '../molecules/CardTutorial'
import CardProject from '../molecules/CardProject'

const Projects = () => {
  return (
    <div className='bg-gradient-to-b from-slate-100 to-white py-10'>
      <div className='max-w-[1300px] px-8 mx-auto'>
        <h3 className='font-medium text-3xl my-5'>Projek Saya</h3>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </div>
  )
}

export default Projects