import React from 'react'
import image from '../src/assets/woman.jpg'
const Section = () => {
  return (
    <div className=' mt-10 min-w-full w-full bg-footer-texture lg:px-20 px-5'>
        <div className='flex sm:flex-row  pt-10 flex-col-reverse justify-center
         ml-4 mr-4 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 mt-5'>
            <div className='mr-0 sm:mr-20 sm:basis-2/3  basis-3/3  sm:text-start'>
                <h1 className='text-3xl text-white'>
                  Get the security of a business line of credit today</h1>
                <p className='text-white'>Quality for a Line up to $100,000 in minutes!</p>
                    <form className=' overflow-hidden'>
                      <input className=' p-2 ml-0 m-10 sm:w-2/5 w-full outline-none'
                       type='text' placeholder='First Name' />
                      <input className=' p-2 sm:w-2/5 w-full outline-none' type='text'
                       placeholder='Last Name' />
                      <input className=' p-2 sm:w-2/5 w-full sm:mt-0 mt-10 outline-none'
                       type='phone' placeholder='Preferred Phone Number' />
                    </form>
                    <div className='flex lg:flex-row flex-col justify-between  mt-10 w-full'>
                        <div className=' text-white flex flex-col justify-center items-center
                         bg-gradient-to-b from-green-400 shadow-lg to-green-600
                          lg:px-8 px-2 cursor-pointer
                          hover:scale-110 transition 
                         ease-in-out'>
                          <h2 className='text-xl'>Get Started</h2>
                          <p className='md:text-center'>FREE, No OBLIGATION</p>
                        </div>
                        <div className='lg:mt-0 mt-4 flex justify-center items-center text-white'>
                          <h1 className='lg:text-2xl text-xl mr-5 border-r-2 border-white pr-4 lg:pr-1'>
                            Forbes</h1>
                          <p>TOP 100 MOST FROMISING <br /> COMPANIES OF 2015</p>
                        </div>
                    </div>
            </div>
            <div className='sm:basis-1/3 basis-3/3 ml-18  mb-10 sm:mb-0'>
                <img src={image} />
            </div>
        </div>
    </div>
  )
}

export default Section