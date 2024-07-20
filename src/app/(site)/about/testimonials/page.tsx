'use client'
import Section8 from '@/components/services/Section8';
import { GlobeDemo } from '@/components/utils/Globe';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { testimonials } from '@/content/testimonial';

export default function Page() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const { description, name, company, img } = testimonials[currentIndex];

    return (
        <div>
            <div className="container xl:px-40 lg:px-10 md:px-8 px-4  py-28  mx-auto">
                <div className="w-full lg:pt-40 lg:pb-20 lg:text-center  text-center">
                    <p className="text-sm font-bold tracking-widest leading-tight mb-1  text-white uppercase f-f-DM">TESTIMONIALS</p>
                    <h1 className="lg:text-6xl md:text-5xl text-2xl font-extrabold lg:leading-[72.8px] md:leading-[48px] f-f-Lato mb-4   text-tertiary-200">Our Client Experiences.</h1>
                    <p className="lg:text-2xl md:text-xl text-sm md:leading-9 lg:text-center f-f-DM  text-center  text-paragraph-200 mb-8">We have been helping businesses reach their target audiences for over fifteen years. We have learned a lot over these years, and our clients have benefited. Hear directly from our clients how we have helped them overcome their rigorous business challenges.</p>
                </div></div>

            <div className="xl:px-40 lg:px-10 md:px-8 px-4  w-full flex md:flex-row flex-col">
                <div className=' md:w-3/5 w-full justify-center items-center md:flex hidden '>
                    <GlobeDemo />
                </div>
                <div className=' md:w-2/5 w-full  flex flex-col justify-center items-center '>
                    <div className="container   flex justify-center  ">
                        <div className=" w-full text-center">
                            <p className="md:text-xl text-sm text-center text-paragraph-200 mb-6 f-f-DM">{description}</p>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div key={currentIndex} className="flex justify-center gap-x-3">
                                    <div className="rounded-full w-16 h-16 border-2 border-tertiary-200">
                                        <img loading='lazy' alt="image" src={img} className="w-full rounded-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="md:text-sm md:leading-normal f-f-DM text-xs text-left  text-white">{company}</p>
                                        <p className="text-lg  font-bold leading-relaxed f-f-Mul mb-3 text-left text-tertiary-200">{name}</p>
                                    </div>
                                </div>

                                <div className='flex space-x-8 justify-center mt-12 items-center'>
                                    <button className='w-10 h-10 border-2 border-white flex justify-center items-center rounded-full' onClick={handlePrevClick}><FaArrowLeft color='#fff' size={20} /></button>
                                    <button className='w-10 h-10 border-2 border-white flex justify-center items-center rounded-full' onClick={handleNextClick}><FaArrowRight color='#fff' size={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section8 />
        </div>
    )
}
