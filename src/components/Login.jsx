import React, { useEffect } from 'react'
import loginImg from '../assets/login.jpg'
import {MdOutlineArrowBack} from 'react-icons/md'
import { Link as RouteLink, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'
import {GoogleButton} from 'react-google-button';

const Login = () => {

    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = async () =>{
        try{
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if(user != null){
            navigate('/account')
        }
    },[user]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block items-center p-40'>
            <img className='w-[500px] h-[500px] object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-white h-screen flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <RouteLink to='/'><MdOutlineArrowBack size={25} /></RouteLink>
                <h2 className='text-4xl font-bold text-center py-6'>SlideIt.</h2>
                <div className='flex flex-col py-2'>
                    <label>Email</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                <button className='border rounded w-full my-5 py-2 bg-[#87CEEB] hover:bg-[#A5E5FF] text-black'>Sign In</button>
                <p className='flex justify-center py-4 text-zinc-500'>Or</p>
                <div className='flex justify-center'>
                    <GoogleButton onClick={handleGoogleSignIn} />
                    {/* <button className='border rounded w-full my-5 py-2 bg-[#00df9a] hover:bg-[#00df98bc] text-black' onClick={handleGoogleSignIn}>Sign In with Google</button> */}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login