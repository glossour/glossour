'use client'
import React from 'react';
import Link from 'next/link';
import Reveal from '../utils/Reveal';

interface Section8Props {
}

const Section8: React.FC<Section8Props> = ({ }) => {
    return (
        <div>
            <div className="container xl:px-[22px] lg:px-4 pt-14 py-10">
                <div>
                    <Reveal width='100%'><p className="text-sm text-center  font-bold  leading-[21px] mb-1 text-secondary-100 uppercase">Our Dedicated Sales Team</p></Reveal>
                    <Reveal width='100%'> <h4 className="md:text-3xl text-xl font-black f-f-Lato md:leading-[41px] text-center text-white capitalize">We are Always Here for You</h4></Reveal>
                </div>
            </div>

            <Reveal width='100%'>  <div className="container mx-auto mb-12 overflow-hidden xl:px-32 lg:px-10 md:px-8">
                <div className="w-full bg-tertiary-200 flex flex-col lg:flex-row gap-x-12 items-stretch">
                    <div className="lg:w-2/4 w-full md:px-[22px] px-4 lg:pl-[73px]">
                        <div className="lg:py-[85px] pt-[34px] pb-[19px]">
                            <div className="lg:mb-11 mb-8">
                                <h3 className="lg:text-6xl  text-3xl font-black   capitalize text-white">
                                    Get Your Free Consultation <span className="lg:text-5xl  text-3xl font-black  text-yellow-400 md:mb-2">Trust Us to Guide You
                                    </span>
                                </h3>




                                <p className="md:text-xl   text-sm font-normal text-white md:mt-6 mt-1">Connect with our experts and learn how our Digital Consumer Intelligence solutions can revolutionize your business.</p>
                            </div>
                            <div className="cursor-pointer">
                                <Link href={"/book-meeting"}>
                                    <button type="button" className="font-bold f-f-DM uppercase bg-white p-3 rounded-sm">Book Your Free Meeting</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/4 w-full">
                        <img src="/images/meeting.png" alt="Book a Meeting" className="object-cover w-full h-full pt-10" />
                    </div>
                </div>
            </div></Reveal>
        </div>



    );
};
export default Section8;