'use client'
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import Reveal from "./Reveal";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    return (
        <motion.section

            className=" w-full  flex justify-center items-center h-[70vh]  xl:px-64 lg:px-20 md:px-8  bg-gray-950 px-4  xl:pt-36 lg:pt-24 md:pt-24 pt-28 xl:pb-12 lg:pb-12 md:pb-12 pb-12  xl:space-x-15 text-gray-200">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full    object-cover  h-[70vh] z-0"
            >
                <source src="/main.mp4" type="video/mp4" />

            </video>
            <div className="absolute inset-0 h-[70vh] bg-black opacity-50 z-1"></div> {/* Overlay */}


            <div className=' w-full flex flex-col justify-start '>
                <Reveal width='100%'>  <h1 style={{ lineHeight: 1 }} className='xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] text-[2.5rem] font-bold  text-white'>DIGITAL MARKETING</h1></Reveal>
                <Reveal width='100%'> <div className=' px-3 py-2 border border-white  text-white xl:w-[97%] lg:w-[87%] md:w-[80%] w-[100%]  font-light xl:text-[20px]  text-sm rounded-md my-5'>
                    Cutting-Edge Strategies, One Click Away.                </div></Reveal>
                <Reveal width='100%'> <p className=' text-paragraph-200 font-light xl:text-lg  text-sm'>
                    Transforming Your Online Presence with Tailored, Agile Marketing Solutions
                </p></Reveal>
            </div>
            <div className='w-full justify-end items-center md:flex hidden '>
                <img loading='lazy' src='/images/hero.svg' className=' object-contain w-11/12' />
            </div>
        </motion.section>
    );
};