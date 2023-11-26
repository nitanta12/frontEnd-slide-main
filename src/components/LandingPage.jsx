import React from 'react';
import Typed from 'react-typed';
 import LandingPageVideo from '../assets/landingvideo.mp4'
import {AiOutlineArrowDown, AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-scroll'
import { Link as RouteLink} from 'react-router-dom';
import { Button, Center, Flex, Text } from '@chakra-ui/react';

const LandingPage = () => {
  return (
    <div name='home' className=' w-full h-screen top-[90px] text-white '>
      <video className='object-cover h-screen w-full absolute opacity-20' src={LandingPageVideo} autoPlay loop muted />
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <Center>
        <Flex>
        <p className='text-white md:text-md sm:text-md text-sm z-10 font-bold py-2 px-1'>
          Make it
        </p>
        <p className='text-[#87CEEB] md:text-md sm:text-md text-sm z-10 font-bold py-2 pr-1'>
          WORK.
        </p>
        <p className='text-white md:text-md sm:text-md text-sm z-10 font-bold py-2 px-1'>
          Make it
        </p>
        <p className='text-[#87CEEB] md:text-md sm:text-md text-sm z-10 font-bold py-2 pr-1'>
          WORTH.
        </p>
        </Flex>
        </Center>
        <h1 className='md:text-5xl sm:text-4xl text-3xl z-10 font-bold md:py-6'>
          Turn Documents into Slides.
        </h1>
        <div className='flex z-10 justify-center items-center'>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>
            Fast, flexible tool for your
          </p>
          <Typed
          className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-1 text-[#87CEEB]'
            strings={['PowerPoint Slide']}
            typeSpeed={50}
            backSpeed={80}
            loop
          />
        </div>
        <p className='md:text-2xl z-10 text-m font-bold text-gray-500'>With AI you can now generate presentation slide/video of your long lengthy documents in One Click.</p>
        <RouteLink to='/signin' className='z-10'><button className='bg-[#87CEEB] w-[200px] hover:bg-[#A5E5FF] z-10 rounded-md font-medium my-6 mx-auto py-3 text-black'><Center><Flex><Text pr='3'>Start Sliding</Text><Center><AiOutlineArrowRight size={20}/></Center></Flex></Center></button></RouteLink>
        <div className='justify-center items-center flex text-xs  text-gray-200'>
            <Link to="about" smooth={true} offset={50} duration={500}>
                <Button variant='link' size={'xs'} className='flex justify-center items-center'>Scroll Down<span><AiOutlineArrowDown size={20} /></span></Button>
            </Link>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;