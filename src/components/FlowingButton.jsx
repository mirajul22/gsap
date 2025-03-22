import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const FlowingButton = () => {
  const btnRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const split = new SplitType(btnRef.current, { types: 'chars' });

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(split.chars, {
        y: -5,
        duration: 0.3,
        ease: 'power2.out',
        opacity:0,
        stagger: 0.05,
      });
  
      tl.current.to(split.chars, {
        y: 0,
        duration: 0.3,
        opacity:1,
        ease: 'power2.inOut',
        stagger: 0.05,
      });
  }, []);

  const handleMouseEnter = () => {
    tl.current.play();
  };

  const handleMouseLeave = () => {
    tl.current.reverse();
  };

  return (
    <button
      ref={btnRef}
      type='button'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='fill cursor-pointer flex items-center justify-center text-black font-bold border-none bg-[rgba(255,168,0,1)] rounded-full  overflow-hidden'
    >
      ATTRACT
    </button>
  );
};

export default FlowingButton;
