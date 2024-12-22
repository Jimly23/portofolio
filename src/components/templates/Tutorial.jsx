import React from 'react'
import CardTutorial from '../molecules/CardTutorial'

const Tutorial = () => {
  return (
    <div className='bg-gradient-to-b from-slate-50 to-white -mt-5 py-20'>
      <div className='max-w-[1300px] px-8 mx-auto mb-20'>
        <h3 className='font-medium text-3xl my-5'>Tutorial</h3>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <CardTutorial/>
          <CardTutorial/>
          <CardTutorial/>
        </div>
      </div>
    </div>
  )
}

export default Tutorial