import React from 'react'
import {HiCheck} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
const Review = () => {
  return (
    <div>
    <div className='my-10'>
        <div className=' bg-gray-100 py-10 text-center overflow-hidden shadow-xl'>
            <h1 className=' text-cyan-500 lg:text-5xl         
             sm:text-4xl
              text-2xl'>
                Trusted by 100,000+ small business owner
            </h1>
            <p className=' text-gray-400 mt-7'>Kabbage has funded over 51 billion to help business grow, kabbage 
            is the industry leader in<br/> providing working capital online, but dont take it
            from us, Read what our customers have to say aboute kabbage.</p>
            <div className='flex justify-center items-center mt-14'>
                <div className='border-2 sm:flex  items-center p-3'>
                    <div className='flex sm:border-r-2 pr-2 border-gray-400 items-center'>
                        <div className=' bg-orange-500 mr-1'><HiCheck /></div>
                        <h2 className=' tracking-tighter font-bold text-2xl'>TRUST
                        <span className='text-gray-300'>PILOT</span></h2>
                    </div>
                    <div className='flex flex-wrap items-center justify-between ml-4
                     lg:gap-20 md:gap-14 sm:gap-8 gap-4'>
                            <p className='text-gray-400 '>Reviews</p>
                            <h1 className='text-2xl font-bold '>
                                9.2<span className='text-lg font-normal'>out of</span> 10
                            </h1>
                            <div className='flex flex-nowrap text-xl text-yellow-400
                            '>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </div>
                            <div>
                                <a href="#" className=' text-sm text-blue-500'>
                                    View All Reviews
                                </a>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className='flex justify-center items-center mt-24'>
          <div className='w-40 flex justify-center
           items-center text-white text-xl
            bg-green-500 p-4 rounded-lg hover:bg-green-300 transition-all ease-in-out '>
            <a href='#'>
                Get Started</a>
                 </div> 
    </div>
    </div>
  )
}

export default Review