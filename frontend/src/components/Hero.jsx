import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <section className= 'bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className= 'max-w-7x1m mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
         <div >
            <h1 className='text-4x1 md:text-6x1 font-bold mb-4'>Latest Electrode at Best Prices</h1>
            <p className='text-x1 mb-6 text-blue-100'>Discover cutting-edge technology with unbeatable deals on smartphones, laptops and more.</p>
            <div className='flex flex-col sm:flex-row gap-4'>
            <Button className='bg-white text-blue-600 hover:bg-gray-100'>Shop Now</Button>
            <Button variant='outline' className='border-white  text-white  hover:bg-white hover:text-blue-600
             bg-transparent'>View deals</Button>
                
            </div>
            </div>
            <div className='relative'>
                <img src="/ekart-hero1.png" alt="" width={500} height={400} className='rounded-1g shadow-2x1'/>

            </div>
         </div>
         </div>    
        </section>
    )
}

export default Hero