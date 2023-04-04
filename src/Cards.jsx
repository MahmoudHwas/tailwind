import React from 'react'
import paybal from '../src/assets/paypal.png'
import amazon from '../src/assets/amazon.png'
import sage from '../src/assets/sage.png'
import ebay from '../src/assets/ebay.png'
import xero from '../src/assets/xero.png'
import stipe from '../src/assets/stripe.png'
import etsy from '../src/assets/etsy.png'
import auth from '../src/assets/auth.png'
import google from '../src/assets/google.png'
import yahoo from '../src/assets/yahoo.jpg'
import dollar from '../src/assets/dollar.jpg'
import {BsEnvelopePaper,BsArrowUpRight} from 'react-icons/bs'
const Cards = () => {
    console.log(NaN == NaN)
  return (
    <div className='my-14'>
        <div className="md:px-10 lg:px-32 px-1 ">
                <div>
                    <div className="grid sm:grid-cols-2
                     md:grid-cols-2 grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3
                      justify-items-stretch gap-2 md:gap-24 lg:gap-20">
                        <div className=" relative border-2 rounded-lg border-gray-300 w-full
                         border-1">
                            <div className='absolute left-1/2 -translate-x-2/4 -top-6  w-10 h-10 '>
                    <p className='text-center border-2 border-gray-300 bg-green-400
                     text-white p-2 rounded-full'>
                        1
                    </p>
                </div>
                <h1 className='my-6 text-center text-cyan-500 font-bold text-xl'>
                    Sign UP in minutes</h1>
                    <div className='text-center mb-2 lg:p-6 p-1'>
                    <span className=' text-gray-500'>its simple - just provide basic <br/>
                     information aout your buisenss</span>
                     <p className=' font-bold'>Sign UP is Free</p>
                    </div>
                    <div className='bg-card-img w-full bg-no-repeat bg-cover h-48 flex items-center relative'>
                        <div className='top-10 text-white bg-green-500 hover:bg-green-400
                    transition-all ease-in-out sm:px-8 md:px-4 px-4 py-4 cursor-pointer w-4/4 md:w-2/4
                     lg:w-3/4 rounded-r-lg text-2xl z-50'>
                          <h2 className='text-center md:text-sm text-xl lg:text-2xl'>
                        Get Started</h2>
                        </div>
                         </div>
                        </div>
                        <div className="relative border-2 rounded-lg border-gray-300 w-full
                         border-1">
                            <div className='absolute left-1/2 -translate-x-2/4 -top-6  w-10 h-10 '>
                    <p className='text-center border-2 border-gray-300 bg-green-400
                     text-white p-2 rounded-full'>
                        2
                    </p>
                </div>
                <h1 className='my-6 text-center text-cyan-500 font-bold text-xl'>
                    Get a dicison instanly</h1>
                    <div className='text-center mb-2'>
                    <span className=' text-gray-500'>Link the services you use to run <br/> yor business,
                     and we will instanly<br/> review your business health</span>
                    
                     <div className='flex flex-row gap-4 mt-5 justify-center '>
                            <div className=' overflow-hidden w-14 h-16'>
                                <span className=' text-sm'>Link Any <br/> Services:</span>
                            </div>
                            <div className=' overflow-hidden h-16'>
                               <div className='flex text-cyan-500 text-xl'>
                                <BsEnvelopePaper className='mt-3 text-4xl'/>
                               Business <br/> Checking</div> 
                            </div>
                           
                     </div>
                     <div className='flex flex-row gap-4 mt-5 justify-center '>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={paybal} alt="paybal" />
                            </div>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={amazon} alt="amazon" />
                            </div>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={sage} alt="sage" />
                            </div>
                     </div>
                     <div className='flex flex-row gap-1 justify-center '>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={ebay} alt="ebay" />
                            </div>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={xero} alt="xero" />
                            </div>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={stipe} alt="stipe" />
                            </div>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={etsy} alt="etsy" />
                            </div>
                     </div>
                     <div className='flex flex-row gap-8 justify-center items-center'>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={yahoo} alt="yahoo" />
                            </div>
                            <div className=' overflow-hidden w-16 h-10'>
                                <img src={auth} alt="auth" />
                            </div>
                            <div className=' overflow-hidden w-14 h-10'>
                                <img src={google} alt="google" />
                            </div>
                           
                     </div>
                    </div>
                        </div>
                        <div className="relative border-2 rounded-lg border-gray-300 w-full
                         border-1">
                            <div className='absolute left-1/2 -translate-x-2/4 -top-6  w-10 h-10 '>
                    <p className='text-center border-2 border-gray-300 bg-green-400
                     text-white p-2 rounded-full'>
                        3
                    </p>
                </div>
                <h1 className='my-6 text-center text-cyan-500 font-bold text-xl'>
                    Get a dicison instanly</h1>
                    <div className='text-center mb-2'>
                    <span className=' text-gray-500'>Link the services you use to run <br/> yor business,
                     and we will instanly<br/> review your business health</span>
                    </div>
                         <div className='relative h-32 overflow-hidden mb-8 mt-5'>
                             <img src={dollar} alt="dollar" 
                             className='w-full h-full' />
                        </div>
                            <p className=' text-center text-gray-500'>
                                <span className='text-xl'>O</span>
                                ngoing Access, 24/7
                                </p>
                        </div>
                       
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col justify-between gap-10 items-center mt-16 
                        lg:px-20 md:px-16 sm:px-8 px-1'>
                        <div>
                             <div className='flex felx-nowrap'>
                               <div className='text-sm h-6 w-6 bg-green-400 p-1 rounded-full text-white'>
                                 <BsArrowUpRight />
                                 </div>
                                    <p className='ml-2 text-gray-500'>
                                        No cost or obligatio to draw funds.</p>

                            </div>   
                            <div className='flex felx-nowrap mt-5'>
                               <div className='text-sm h-6 w-6 bg-green-400 p-1 rounded-full text-white'>
                                 <BsArrowUpRight />
                                 </div>
                                    <p className='ml-2 text-gray-500'>
                                        Pay only for only what you take.</p>
                                        
                            </div>            
                        </div>
                        <div>
                             <div className='flex felx-nowrap'>
                               <div className='text-sm h-6 w-6 bg-green-400 p-1 rounded-full text-white'>
                                 <BsArrowUpRight />
                                 </div>
                                    <p className='ml-2 text-gray-500'>
                                    No cost or obligatio to draw funds.</p>

                            </div>   
                            <div className='flex felx-nowrap mt-5'>
                               <div className='text-sm h-6 w-6 bg-green-400 p-1 rounded-full text-white'>
                                 <BsArrowUpRight />
                                 </div>
                                    <p className='ml-2 text-gray-500'>
                                    Pay only for only what you take.</p>
                                        
                            </div> 

                        </div>
                </div>
        </div>
    </div>
  )
}

export default Cards