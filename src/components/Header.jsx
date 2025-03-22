import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
   <div className="header">
    <nav className="">
        <div className="flex flex-row items-center justify-between">

        <div className="cursor-pointer">
            <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="flex flex-row items-center gap-8">
           <div className="text-white flex flex-row gap-4">
               <a href="#" className="flex flex-row items-center gap-3">Company <span><IoIosArrowDown className="" /></span></a>           
               <a href="#">Services</a>           
               <a href="#">Resources</a>           
            </div>
            <button type="button" className="btn bg-transparent rounded-3xl text-sm">CONTACT</button> 
        </div>

        </div>
    </nav>
   </div>
  );
};

export default Header;