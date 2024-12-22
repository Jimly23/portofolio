import React, { useState } from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import star from '../../assets/images/star.png'
import SidebarMenu from "./SidebarMenu";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleIsToggle = () => {
    setIsToggle(!isToggle);
  }
  
  return (
    <navbar className="fixed left-0 right-0 top-0 bg-white z-10 px-8">
      <div className="max-w-[1300px] px-8 mx-auto flex justify-between items-center py-4">
        <div className="logo text-3xl font-bold relative">
          PEM<span className="text-blue-700">WEB</span>
          <div className="absolute -left-9 top-0">
            <img src={star} className="w-[40px]" />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-x-5 text-md font-medium text-slate-600">
          <Link to={"/"}>Beranda</Link>
          <Link to={"/"}>Projek</Link>
          <Link to={"/"}>Tutorial</Link>
          <Link to={"/"}>Tentang Kami</Link>
        </nav>
        <div className="hidden md:block">
          <Button text={"Login"}/>
        </div>
        <div className="md:hidden">
          <FaBars onClick={handleIsToggle} size={28} className="cursor-pointer text-blue-900" />
        </div>
      </div>

      <SidebarMenu isOpen={isToggle} setIsToggle={handleIsToggle}/>
    </navbar>
  );
};

export default Navbar;
