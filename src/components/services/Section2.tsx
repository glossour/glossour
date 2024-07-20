'use client';
import React, { useState } from 'react';
import { Section } from '../types/Services';
import RequestModal from '../utils/Form/RequsetQuote';

const Section2: React.FC<Section> = ({ heading, paragraph, subheading, bgImg, btn }) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full mx-auto relative bg-cover bg-no-repeat bg-right lg:bg-center  " style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="h-full absolute inset-0 w-full z-[0]   bg-black bg-opacity-60">
            </div>
            <div className="container xl:px-32 lg:px-10 mx-auto py-9 lg:py-24 z-10">
                <div className="flex flex-col lg:flex-row items-center z-10 justify-start gap-x-28 gap-y-11">
                    <div className="px-[22px] lg:px-0 lg:w-7/12 z-10 w-full order-1">
                        <div className="md:border-l-2 border-white md:pl-8 ">
                            <div>
                                <h2 className=" text-secondary-100  text-3xl lg:text-[56px] md:leading-[48px] lg:leading-[56px] font-black lg:font-[800] md:mb-6 ">{heading}</h2>
                                <p className="text-white lg:text-2xl text-xl  font-bold md:leading-9">{subheading}</p>
                                <p className="text-white f-f-DM md:text-[20px]  text-sm md:leading-[34px] font-normal mt-5 mb-12">{paragraph}</p>
                                <div className="pb-2">
                                    <div>
                                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="w-full lg:w-auto bg-secondary-100 text-secondary-300 p-3 rounded-sm font-bold uppercase">{btn}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-5/12 lg:w-3/12 md:w-2/12 w-0  order-2"></div>
                </div>
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title={heading} />
        </div>
    );
};

export default Section2;
