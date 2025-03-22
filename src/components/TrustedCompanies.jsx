import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const logos1 = [
  {
    id: 1,
    name: "Logoipsum"
  },
  {
    id: 2,
    name: "offmax"
  },
  {
    id: 3,
    name: "offmax"
  },
  {
    id: 4,
    name: "offmax"
  },
  {
    id: 5,
    name: "offmax"
  },
  {
    id: 6,
    name: "Logoipsum"
  },
  {
    id: 7,
    name: "logoipsum"
  },
  {
    id: 8,
    name: "Logoipsum"
  },
  {
    id: 9,
    name: "offmax"
  },
  {
    id: 10,
    name: "offmax"
  },
  {
    id: 11,
    name: "LOGO IPSUM"
  },
  {
    id: 12,
    name: "LOGOIPSUM"
  },
];

const logos2 = [
  {
    id: 1,
    name: "Logoipsum"
  },
  {
    id: 2,
    name: "offmax"
  },
  {
    id: 3,
    name: "offmax"
  },
  {
    id: 4,
    name: "offmax"
  },
  {
    id: 5,
    name: "offmax"
  },
  {
    id: 6,
    name: "Logoipsum"
  },
  {
    id: 7,
    name: "logoipsum"
  },
  {
    id: 8,
    name: "Logoipsum"
  },
  {
    id: 9,
    name: "offmax"
  },
  {
    id: 10,
    name: "offmax"
  },
  {
    id: 11,
    name: "LOGO IPSUM"
  },
  {
    id: 12,
    name: "LOGOIPSUM"
  },
];

const TrustedCompanies = () => {

   const r1 = useRef(null);
   const r2 = useRef(null);
   const scroll1 = useRef(null);
   const [scroll,setScroll] = useState(1);
   useEffect(() => {
    let prevScroll = window.scrollY;
  
    const detectDirection = () => {
      const currentScroll = window.scrollY;
      setScroll(currentScroll > prevScroll ? 1 : -1);
      prevScroll = currentScroll;
    };
  
    window.addEventListener('scroll', detectDirection);
  
    const tl1 = gsap.to(r1.current, {
      x: scroll === 1 ? "-10%" : "10%",
      ease: "none",
      yoyo:true,
      duration: 2,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 100),
      },
      repeat: -1,
      scrollTrigger: {
        trigger: scroll1.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  
    const tl2 = gsap.to(r2.current, {
      x: scroll === 1 ? "10%" : "-10%",
      ease: "none",
      yoyo:true,
      duration: 2,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 100),
      },
      repeat: -1,
      scrollTrigger: {
        trigger: scroll1.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  
    return () => {
      window.removeEventListener('scroll', detectDirection);
      tl1.kill();
      tl2.kill();
    };
  }, [scroll]);

  return (
    <section className='pad bg-black h-screen text-white'>
      <div className=' flex flex-col mx-auto '>
        <div className='con '>
          {/* Left Content */}
          <div className='md:w-1/2 max-w-lg'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Trusted by 200+ companies around the world
            </h2>
          </div>
          {/* Right Content */}
          <div className='max-w-xl'>
            <p className='text-gray-400'>
              Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
              amet tellus purus sit odio eget. Diam morbi faucibus vitae neque
              id in. Nullam sed et dapibus nunc, porta enim orci urna, sit.
              Lectus ac.
            </p>
          </div>
        </div>
        {/* Logos */}
        <div ref={scroll1} className='logo flex flex-col items-center justify-center gap-y-4 '>
          {/* First Row */}
          
          <div ref={r1} className='logo1 flex flex-row flex-wrap items-center justify-center gap-x-4'>
            {logos1.map((logo) => (
              <div
                key={logo.id}
                className='btn1 cursor-pointer flex items-center justify-center border border-gray-700 rounded-lg p-4 bg-gray-900 hover:bg-gray-800 transition'>
                
                <span>{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div ref={r2} className='logo2 flex flex-row flex-wrap items-center justify-center gap-x-4'>
            {logos2.map((logo) => (
              <div
                key={logo.id}
                className='btn1 cursor-pointer flex items-center justify-center border border-gray-700 rounded-lg p-4 bg-gray-900 hover:bg-gray-800 transition'>
            
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default TrustedCompanies;
