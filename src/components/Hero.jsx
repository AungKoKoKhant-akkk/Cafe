import React from 'react'
import { PiCoffeeFill } from "react-icons/pi";

import coffeeBanner from '../assets/coffeeBanneravif.avif';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function Hero() {
    return (





        <div className="hero  min-h-screen relative" style={{ backgroundImage: `url(${coffeeBanner})` }}>
            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/60 z-0'>     </div>

            {/* Content */}
            <div className='hero-content text-center relative z-10' >
                <div className=' max-w-2xl'>
                    <PiCoffeeFill className='mx-auto mb-4 text-6xl text-white animate-bounce transition-all duration-300' />
                    <h1 className='text-4xl font-bold text-white mb-5'>Welcome to Cozy Cafe</h1>
                    <p className='text-2xl text-white mb-4 drop-shadow-md'>Where Every Cup Tells a Story</p>
                    <p className='text-white mb-4 '>Experience the perfect blend of artisan coffee, fresh pastries, and warm hospitality. Your neighborhood coffee haven awaits.</p>
                    <div className='flex flex-col sm:flex-row justify-center gap-4'>


                        <Link to="/menu" className='btn btn-primary'>View Menu
                            <FaArrowRight className='hover:animate-' />
                        </Link>
                        <Link to="/about" className='btn'>About Us</Link>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Hero
