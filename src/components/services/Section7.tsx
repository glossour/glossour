'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';

interface Section7Props {
}

const Section7: React.FC<Section7Props> = ({ }) => {

    return (
        <div className="w-full mx-auto relative bg-cover px-32 bg-no-repeat bg-left lg:bg-center   bg-[url('//images.ctfassets.net/bete4dit0n31/110wbdtYVsuyKjzu7Zs2xV/30967814865a53d13f1d724707d453c0/service-5.webp')]" >
            <div className="h-full absolute inset-0 w-full z-[-1]  bg-tertiary-200"></div>
            <div className="container  mx-auto py-9 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-start gap-x-28 gap-y-11">
                    <div className="px-[22px] lg:px-0 lg:w-7/12 w-full order-2 ">
                        <div className="  border-l-2 border-white pl-8     ">
                            <div className=""><h2 className="text-white text-[40px] lg:text-[56px] leading-[48px] lg:leading-[56px] font-black lg:font-[800]  mb-6 f-f-Lato">Dominate Search Results</h2><p className="text-white  text-2xl f-f-Lato font-bold leading-9  ">Hire us to Focus on the Best Keywords.</p>
                                <p className="text-white f-f-DM text-[20px] leading[34px]   font-normal  mt-5 mb-12">The key to success in SEO lies in the keywords. Our SEO experts meticulously analyze a wide selection of keywords to choose the best for your SEO objectives. We improve search performance by balancing the search volume of your keywords and their relevance to your audience.</p><div className="pb-2"><button type="button" className="w-full lg:w-auto  font-bold f-f-DM uppercase  bg-tertiary-200 p-3 rounded-sm text-white">Start Now</button></div></div></div></div><div className="lg:w-5/12 w-full order-1"></div></div></div></div>
    );
};
export default Section7;