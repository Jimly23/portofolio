import React from 'react'
import Button from '../atoms/Button'
import gambar1 from '../../assets/images/html.png'
import gambar2 from '../../assets/images/astronot.png'
import gambar3 from '../../assets/images/roket.png'
import star from '../../assets/images/star.png'
import star1 from '../../assets/images/staroutline.png'
import circle from '../../assets/images/circle.png'
import apple from '../../assets/images/apple.png'

const Hero = () => {
  return (
    <div className='bg-slate-50'>
      <div className='max-w-[1300px] px-8 mx-auto py-[60px]'>
        <div className='grid md:grid-cols-2 gap-y-10 lg:gap-x-5 flex items-center'>
          <div className='relative'>
            <h4 className='text-4xl font-medium'>Selamat Datang <br /> di Pemrograman <span className='border relative border-blue-900 px-3 pb-1 mt-3 text-blue-900'>
              Web 
              <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] bottom-[-4px]"></div>
              <div className="absolute w-[8px] h-[8px] border border-blue-900 left-[-4px] top-[-4px]"></div>
              <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] top-[-4px]"></div>
              <div className="absolute w-[8px] h-[8px] border border-blue-900 right-[-4px] bottom-[-4px]"></div>
              </span>
            </h4>
            <p className='my-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi voluptatibus ratione perferendis tempora, quaerat dolorum aut neque aspernatur ullam.</p>
            <div className="cta-box">
              <Button text={"Buat Sekarang"}/>
            </div>
            <div className='absolute left-0 top-[-50px]'>
                <img src={apple} className='w-[70px]' />
              </div>
          </div>

          <div>
            <div className='relative max-w-[400px] mx-auto'>
              <img src={gambar1} className='ms-4 w-[150px] lg:w-[170px] ngambang1 rounded-lg' />
              <img src={gambar2} className='ms-16 mt-5 w-[180px] lg:w-[200px] ngambang2 rounded-lg' />
              <div className='absolute right-0 top-0'>
                <img src={gambar3} className='w-[200px] lg:w-[220px] ngambang3 rounded-lg' />
              </div>
              <div className='absolute right-0 top-0'>
                <img src={star} className='w-[30px] ngambang3 putar' />
              </div>
              <div className='absolute -left-10 top-[50px]'>
                <img src={star1} className='w-[30px] ngambang3 putar' />
              </div>
              <div className='absolute left-[-100px] bottom-[0] flex items-center gap-x-[400px]'>
                <img src={circle} className='w-[15px] rounded-lg' />
                <img src={circle} className='w-[15px] rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero