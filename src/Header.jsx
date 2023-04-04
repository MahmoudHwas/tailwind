import React from 'react'
import {BsBoxArrowInRight} from 'react-icons/bs';
import imf from '../src/assets/th.jpg'
const Header = () => {
  return (
    <div>
       {/* start first header*/}
    <div className='md:p-0 lg:p-1 bg-lime-100 drop-shadow-lg'>
        <div className=' flex items-center  sm:justify-end justify-center sm:mr-32'>
          <ul className='flex font-medium'>
                <li className='mr-5 cursor-pointer'><a>Already a Customer?</a></li>
                <li className='inline-flex items-center text-base cursor-pointer'>
                <BsBoxArrowInRight className='text-2xl'/><a href='#'>Sign In</a></li>
          </ul>
        </div>
    </div>
    {/* end first header */}

    {/* start logo */}
    <div className=' mx-1 sm:ml-10 sm:mr-10 md:ml-20 md:mr-36 mt-5'>
        <div className='flex xsm:flex-row flex-col justify-between  items-center'>
                <div className=' flex items-center'>
                    <div className='w-20'>
                      <img src={imf} alt='Logo'/>
                    </div>
                   <h1 className=' text-3xl '>Kabbage</h1>
                </div>

                <div> 
                    <button className='text-lg text-white font-medium
                      hover:text-black transition-all
                        hover:bg-green-200 ease-in-out 
                         p-5 sm:px-10 px-5 rounded-lg
                          bg-green-400 tracking-wider'>Get Start</button>
                </div>

        </div>

    </div>
     {/* start logo */}
    </div>
  )
}

export default Header