import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import FlowingButton from './FlowingButton';

const HeroSection = () => {
    const heroRef = useRef(null);
  const H3Container = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
  
    // Hero Section Animation
    tl.fromTo(
      heroRef.current,
      {
        y: "100%",
        width: "40%",
        height: "65%",
        rotation: -20,
      },
      {
        duration: 1.5,
        y: "0%",
        rotation: 0,
        ease: "power4.out",
      }
    )
    .to(heroRef.current, {
      duration: 0.5,
      width: "95%",
      height: "80%",
      ease: "power2.inOut",
    });
  
    // Text Animation (after hero animation finishes)
    const h3 = H3Container.current.querySelectorAll('h3');
  
    tl.from(h3, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay:0.3,
      ease: 'power4.out',
      stagger: 0.3,
    }); 
   
    const text =  document.querySelectorAll(".p1");

    tl.from(text,{
        x:100,
        opacity:0,
        duration:1,
        ease: 'power4.out',
    })

    const input = document.querySelectorAll('input');

    tl.from(input,{
        y:50,
        opacity:0,
        duration:0.5,
        ease: 'power4.out',
    })

    const btn = document.querySelectorAll('.fill');

    tl.from(btn,{
        y:50,
        opacity:0,
        duration:0.5,
        ease: 'power4.out',
    })

  }, []);
  return (
    <section
    className='relative bg-img flex items-center justify-center'
    >
      <div ref={heroRef}
      className=" bottom-0  top-50 h-[30%] w-[50%] h-screen bg-[#111010]   flex items-center justify-center origin-bottom mx-auto">
        <div className=' flex flex-col items-left justify-center gap-3'>
           <div ref={H3Container}  className='text-white max-w-xl text-left flex flex-col gap-0 leading-none text-[90px] font-bold '>
            <h3 id='text'>Attract</h3>
            <h3 id='text' className='text-[rgba(255,168,0,1)]'>NewLeads</h3>
            <h3 id='text'>like never</h3>
            <h3 id='text'>before</h3>
           </div>

           <div className='max-w-lg px-4'>
            <p className='p1 font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veniam eligendi architecto quod magnam laborum,  perferendis.</p>
           </div>

           <div className='flex flex-row gap-6'>
            <input className='email rounded-full w-3/4 focus:none' type='email' placeholder='Email'/>
            <FlowingButton/>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
