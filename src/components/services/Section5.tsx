'use client'
import React, { useState } from 'react';
import { Section } from '../types/Services';
import RequestModal from '../utils/Form/RequsetQuote';


const Section5: React.FC<Section> = ({ heading, paragraph, subheading, img, btn }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="w-full   xl:px-32 lg:px-10 px-4 md:px-8">
            <div className="container md:px-[16px] lg:px-0 mx-auto">
                <div className="w-full pb-9 lg:pt-12 pt-[62px] flex justify-between flex-col-reverse lg:flex-row items-center gap-y-[20px] lg:gap-y-[51px] gap-x-48">
                    <div className="lg:w-2/3 w-full">
                        <div className="lg:flex flex-col ">
                            <h2 className=" text-secondary-100  text-3xl md:leading-[44px] lg:text-5xl font-extrabold f-f-Lato lg:leading-[52px] md:mb-6">
                                {heading}
                            </h2>
                            <p className=" text-white md:text-2xl text-xl font-bold md:leading-9   mb-3 md:mb-6">
                                {subheading}
                            </p>
                        </div>
                        <div className="border-l-2  text-secondary-100 pl-4 mb-11">
                            <p className=" text-white md:text-xl md:leading-9 text-sm font-normal ">
                                {isExpanded ? (
                                    <span>
                                        {paragraph.slice(0, 1000)}{' '}
                                    </span>
                                ) : (
                                    <span>
                                        {paragraph.slice(0, 200)}{' '}
                                    </span>
                                )}
                                <span
                                    className="font-bold cursor-pointer"
                                    role="button"
                                    onClick={toggleExpanded}
                                >
                                    {isExpanded ? ' READ LESS' : ' READ MORE'}
                                </span>
                            </p>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="w-full lg:w-auto  bg-secondary-100 text-secondary-300 p-3 rounded-sm font-bold f-f-DM uppercase"
                        >
                            {btn}
                        </button>
                    </div>

                    <img src={img} alt={img} className='lg:w-1/3 lg:h-96 w-full h-full object-contain' />
                </div>
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title={heading} />
        </div>
    );
};
export default Section5;