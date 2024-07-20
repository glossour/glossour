'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';


import { Section } from '../types/Services';
import RequestModal from '../utils/Form/RequsetQuote';
const Section3: React.FC<Section> = ({ heading, paragraph, img, bgImg, btn, subheading }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full mx-auto relative bg-cover bg-no-repeat xl:px-32 lg:px-10 md:px-8 px-4 bg-right lg:bg-center false bg-transparent " >
            <div className="container   py-9 lg:py-24">
                <div className="flex  flex-col-reverse lg:flex-row items-center justify-start gap-x-28 gap-y-8">
                    <div className="md:px-[22px] lg:px-0 lg:w-7/12 w-full order-1 ">
                        <div className="  false "><div className="">
                            <h2 className=" text-3xl  lg:text-5xl font-bold md:leading-[44px] lg:leading-[56px]  text-secondary-100  md:mb-6">{heading}</h2>
                            <p className="   text-white md:text-2xl text-xl f-f-Lato font-bold md:leading-9  ">{subheading}</p>
                            <p className="text-white  text-sm text-justify f-f-Lato md:leading-[30px]  font-normal  md:mt-5 md:mb-12 mt-2">{paragraph}</p>
                            <div className="pb-2 mt-3"><div>
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="w-full lg:w-auto   font-bold  uppercase bg-secondary-100 text-secondary-300 p-3 rounded-sm ">{btn}</button>
                            </div></div>
                        </div></div>
                    </div>
                    <div className="lg:w-5/12 w-full order-2 justify-center items-center flex">
                        <img loading='lazy' src={img} className="w-full  h-80 object-cover " alt="image" />
                    </div></div>
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title={heading} />
        </div>
    );
};
export default Section3;