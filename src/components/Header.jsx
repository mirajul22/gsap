import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap/all";

const Header = () => {

    const nav = useRef(null);
    const botn = useRef(null);

  useEffect(()=>{
    const tl = gsap.timeline();
    const link = document.querySelectorAll('a');
    const logo = document.querySelectorAll('.logo-ani');
    // const btn = document.querySelectorAll('button');

    tl.from(logo,{
        x:"-20",
        duration:1.5,
        delay:0.2,
        opacity:0,
        ease: 'power4.out',
    })

    tl.from(link,{
        y:"-20",
        duration:1,
        opacity:0,
        stagger:0.3,
        ease: 'power4.out',
    })

    tl.from(botn.current,{
        x:'20',
        duration:1,
        opacity:0,
        ease: 'power4.out',
    })
      
  })

  return (
   <div className="header">
    <nav className="">
        <div className="flex flex-row items-center justify-between">

        <div className="logo-ani cursor-pointer">
            <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="flex flex-row items-center gap-8">
           <div ref={nav} className="text-white flex flex-row gap-4">
               <a href="#" className="flex flex-row items-center gap-3">Company <span><IoIosArrowDown className="" /></span></a>           
               <a href="#">Services</a>           
               <a href="#">Resources</a>           
            </div>
            <button ref={botn} type="button" className="btn bg-transparent rounded-3xl text-sm">CONTACT</button> 
        </div>

        </div>
    </nav>
   </div>
  );
};

export default Header;