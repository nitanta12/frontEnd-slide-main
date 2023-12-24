import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link} from 'react-scroll'
import { Link as RouteLink} from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=''>
        <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-white'>
            <h1 className='w-full z-10 text-3xl font-bold text-[#87CEEB]'>SlideGen.</h1>
            <ul className='hidden z-10 md:flex'>
                <li className='p-4'><button><Link to="home" smooth={true} duration={500}>Home</Link></button></li>
                <li className='p-4'><button><Link to="about" smooth={true} offset={50} duration={500}>Explore</Link></button></li>
                <li className='p-4'><button><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></button></li>
                <li className='p-4'><RouteLink to="/signin"><button className='w-[75px] rounded-lg font-medium bg-transparent hover:bg-[#A5E5FF] text-white hover:text-black border border-[#87CEEB] hover:border-transparent'>
                    Login</button></RouteLink>
                </li>
            </ul>
            <div onClick={handleNav} className='block z-10 md:hidden'>
                <AiOutlineMenu size={20} />
            </div>
            <ul className={nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full z-20 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%] top-0'}>
            <div className='grid grid-cols-2'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SlideGen.</h1>
                <div className='flex justify-end items-center px-4' onClick={handleNav}>
                    <AiOutlineClose size={20}/> 
                </div>
            </div>
                <li className='p-4'><button><Link to="home" smooth={true} duration={500} onClick={()=> setNav(false)}>Home</Link></button></li>
                <li className='p-4'><button><Link to="about" smooth={true} offset={50} duration={500} onClick={()=> setNav(false)}>Explore</Link></button></li>
                <li className='p-4'><button><Link to="contact" smooth={true} offset={50} duration={500} onClick={()=> setNav(false)}>Contact</Link></button></li>
                <li className='p-4'><RouteLink to="/signin" onClick={()=> setNav(false)}><button className='w-[75px] rounded-lg font-medium bg-transparent hover:bg-[#A5E5FF] text-white hover:text-black border bg-[#87CEEB] hover:border-transparent'>
                Login</button></RouteLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar