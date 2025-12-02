import React from 'react'
import CoffeeStory from '../assets/ourStory.jpg'
import { FaRegHeart } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { RiUserCommunityLine } from "react-icons/ri";




function Story() {
    return (
        <div className="hero min-h-screen bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row-reverse px-20 mt-20 gap-20 tracking-wide text-justify">
                <img
                    src={CoffeeStory}
                    className="max-w-lg rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Our Story</h1>
                    <p className="py-6">
                        Founded in 2015, The Daily Brew has been serving the finest artisan coffee and freshly baked goods to our community. We believe in the power of a perfect cup of coffee to bring people together and create meaningful moments.
                        <br />
                        <br />
                        Our beans are ethically sourced from small farms around the world, and our pastries are baked fresh every morning by our talented team of bakers.
                    </p>
                    <div className='flex flex-row gap-12 '>
                        <div className='flex flex-col justify-center items-center text-center '>
                            <FaRegHeart className='text-5xl  mt-4 mb-2' />
                            <span className='text-lg'>Crafted with Love</span>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center'>
                            <BsAward className='text-5xl  mt-4 mb-2' />
                            <span className='text-lg'>Award-Winning Quality</span>
                        </div>

                        <div className='flex flex-col justify-center items-center text-center'>
                            <RiUserCommunityLine className='text-5xl  mt-4 mb-2' />
                            <span className='text-lg'>Community Focused</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Story
