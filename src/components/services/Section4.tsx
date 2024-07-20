'use client'
import React from 'react';
import { Section } from '../types/Services';
import RequestModal from '../utils/Form/RequsetQuote';
const Section4: React.FC<Section> = ({ heading, subheading, btn, paragraph }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className=' container mx-auto xl:px-32 lg:px-10 md:px-8 px-4'>
            <div className="mb-[70px]"><div className="relative w-full flex flex-col-reverse ">
                <h2 className="text-left lg:text-center text-3xl md:text-5xl font-extrabold leading-10   text-secondary-100 md:mb-4 mb-2">{heading}</h2>
                <div className="sm:-right-6 sm:mb-0 lg:right-0  mb-2 sm:absolute f-f-Lato text-sm lg:text-xl leading-[30px] font-bold top-0 mt-1 cursor-pointer">
                </div></div>
                <p className="md:text-2xl text-xl font-bold md:leading-9 lg:text-center   text-white md:mb-4">{subheading}</p>
                <p className="text-sm md:text-xl md:leading-9 lg:text-center  text-justify my-3  text-white md:mb-6">{paragraph}</p>
                <div className="w-full text-center">
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="w-full lg:w-auto   bg-secondary-100 text-secondary-300 p-3 rounded-sm  font-bold f-f-DM uppercase undefined">{btn}</button></div></div></div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title={btn.replace('REQUEST A', '')} />
        </div>
    );
};
export default Section4;