'use client'
import React from 'react';
import ServiceQuoteForm from '../utils/Form/ServiceQuoteForm';
import { HeroSection } from '../types/Services';



const Hero: React.FC<HeroSection> = ({ heading, paragraph, service }) => {
    return (
        <div className=' flex w-full  lg:flex-row flex-col  xl:px-40 lg:px-10 md:px-8  py-28  xl:pt-32 xl:pb-16 lg:py-28 md:py-32 lg:space-y-0  space-y-8 justify-center items-center'>
            <div className="flex xl:w-4/6 lg:w-full w-full flex-col space-y-3 px-4">
                <h1 className=' xl:text-7xl lg:text-6xl md:text-4xl  text-3xl font-extrabold   text-secondary-100'> #1 Ranked </h1>
                <p className='  xl:text-7xl lg:text-6xl md:text-4xl  text-3xl font-bold text-white'>{heading}</p>
                <p className=' md:text-xl md:font-medium   text-sm font-extralight text-white  lg:w-3/4 w-full'>{paragraph}</p>
            </div>
            <div className="flex xl:w-2/6  lg:w-full w-full">
                <ServiceQuoteForm title={service} />
            </div>
        </div >
    );
};
export default Hero;