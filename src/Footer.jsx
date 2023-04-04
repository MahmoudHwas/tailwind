import React from 'react'
import imf from '../src/assets/th.jpg'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {BsLinkedin, BsFillPersonPlusFill, BsEnvelope} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className='mt-10 bg-stone-600 py-10 text-center'>
        
        <div className=' flex justify-center items-center'>
                <div className='w-10 mr-2'>
                      <img src={imf} alt='Logo' className='bg-gray-700'/>
                </div>
            <h1 className=' text-2xl text-white'>Kabbage</h1>
        </div>
        <div className=' flex flex-col gap-6 justify-center items-center mt-6'>
            <div className='flex lg:gap-10
         md:gap-6 xsm:gap-2 gap-1 text-xl text-stone-700'>
            <span className='cursor-pointer hover:text-blue-500 transition-all'><FaFacebookF /></span>
            <span className='cursor-pointer hover:text-blue-800 transition-all'><FaTwitter/></span>
            <span className='cursor-pointer hover:text-blue-500 transition-all'><BsLinkedin/></span>
            <span className='cursor-pointer hover:text-emerald-300  transition-all'><BsFillPersonPlusFill /></span>
            <span className='cursor-pointer hover:text-rose-500 transition-all'><BsEnvelope/></span>
            </div>
            <div className=' bg-stone-700 rounded-lg shadow-xl px-4 text-white'>
                888-986-8263
            </div>
            <div className=' text-sm bg-stone-700 rounded-lg shadow-xl px-4 text-white py-2'>
              @2015 Kabbage inc, All rights reserved Kabbage is a registered trademark of Kabbage
                inc.<br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
                 perferendis assumenda eos,<br/>
                <span className=' text-gray-400'>cetic Bank Privacy Policy</span> 
                 
            </div>
        </div>
    </footer>
  )
}

export default Footer