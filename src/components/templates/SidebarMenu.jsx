import React from 'react'
import { Link } from 'react-router-dom'
import { CiHome, CiUser } from 'react-icons/ci'
import { GoProjectRoadmap } from 'react-icons/go'
import { FaInstagram, FaRegComments } from 'react-icons/fa'
import { CgFileDocument } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'


const SidebarMenu = ({isOpen, setIsToggle}) => {
  return (
    <div className={`w-[300px] h-screen bg-blue-900 fixed ${isOpen ? 'right-0' : '-right-[300px]'} top-0 bottom-0 p-5 text-white font-medium transition-all duration-300`}>
      <div>
        <div className="header flex items-center justify-between">
          <div onClick={setIsToggle} className="close cursor-pointer"><MdClose size={28}/></div>
          <div className="logo text-xl">Navigation</div>
        </div>
        <div className="main mt-10 border-b mb-5 border-slate-700">
          <p className='mb-5'>Utama</p>
          <div className='text-sm'>
            <div className='cursor-pointer mb-8 flex items-center gap-x-3'><CiHome size={28}/> <Link to={'/'}>Beranda</Link></div>
            <div className='cursor-pointer mb-8 flex items-center gap-x-3'><GoProjectRoadmap size={26}/> <Link to={'/'}>Projek</Link></div>
            <div className='cursor-pointer mb-8 flex items-center gap-x-3'><CgFileDocument size={26}/> <Link to={'/'}>Artikel</Link></div>
          </div>
        </div>
        <div className="support">
          <p className='mb-5'>Dukungan</p>
          <div className='text-sm'>
            <div className='cursor-pointer mb-8 flex items-center gap-x-3'><CiUser size={28}/> <Link to={'/'}>Tentang Kami</Link></div>
            <div className='cursor-pointer mb-8 flex items-center gap-x-3'><FaRegComments size={28}/> <Link to={'/'}>Kontak Kami</Link></div>
          </div>
        </div>
      </div>
      <FaInstagram size={28} className='cursor-pointer mb-8 absolute bottom-0 lef
      '/>
    </div>
  )
}

export default SidebarMenu