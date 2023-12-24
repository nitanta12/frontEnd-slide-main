import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedinIn
} from 'react-icons/fa';
import Nitanta from '../assets/Nitanta.jpg';
import Sworna from '../assets/Sworna.JPG';
import Ronik from '../assets/Ronik.jpg';


const ContactFooter = () => {
  return (
    <div name='contact' className='max-w mx-auto py-16 px-8 grid lg:grid-cols-4 gap-10 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#87CEEB]'>SlideGen</h1>
        <p className='py-4'>Any inquiry related to the Application or for further more information, you can feel free to contact us anytime. Do checkout the GitHub repository for the documentation.</p>
        <div className='flex justify-between md:w-[75%] my-4'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-gray-400'>Group Member</h6>
        <ul>
            <li className='py-2 text-sm'>Nitanta Timalsina</li>
            <li><img className='md:w-[100px] w-[75px] rounded-lg' src={Nitanta} alt='/' /></li>
            {/* <li className='py-2 text-sm'>075bct012.anish@pcampus.edu.np</li> */}
            <div className='flex md:w-[75%]'>
                <a href='https://www.google.com'>
                    <FaLinkedinIn className='mt-2 mr-2'/>
                </a>
                <a href='https://www.google.com'>
                    <FaGithubSquare className='mt-2'/>
                </a>
            </div>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-gray-400'>Group Member</h6>
        <ul>
            <li className='py-2 text-sm'>Sworna Dhoj Shrestha</li>
            <li><img className='md:w-[100px] w-[75px] rounded-lg' src={Sworna} alt='/' /></li>
            {/* <li className='py-2 text-sm'>075bct023.bipin@pcampus.edu.np</li> */}
            <div className='flex md:w-[75%]'>
                <a href='https://www.google.com'>
                    <FaLinkedinIn className='mt-2 mr-2'/>
                </a>
                <a href='https://www.google.com'>
                    <FaGithubSquare className='mt-2'/>
                </a>
            </div>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-gray-400'>Group Member</h6>
        <ul>
            <li className='py-2 text-sm'>Ronik Jung Basnet</li>
            <li><img className='md:w-[100px] w-[75px] rounded-lg' src={Ronik} alt='/' /></li>
            {/* <li className='py-2 text-sm'>075bct002.aagat@pcampus.edu.np</li> */}
            <div className='flex md:w-[75%]'>
                <a href='https://www.google.com'>
                    <FaLinkedinIn className='mt-2 mr-2'/>
                </a>
                <a href='https://www.google.com'>
                    <FaGithubSquare className='mt-2'/>
                </a>
            </div>
        </ul>
    </div>
    
      </div>
    </div>
  );
};

export default ContactFooter;