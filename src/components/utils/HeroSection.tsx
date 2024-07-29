'use client'
import React, { useEffect, useRef, useState } from "react";
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
    const [active, setActive] = useState(true);
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;

        if (video) {
            const handleLoadedData = () => setActive(false);
            video.addEventListener("loadeddata", handleLoadedData);

            // Cleanup function
            return () => {
                video.removeEventListener("loadeddata", handleLoadedData);
            };
        }
    }, [active, ref]);
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
            style={{ backgroundImage: backgroundImage }}
            className=" w-full  flex justify-center items-center  md:flex-row flex-col-reverse    xl:px-64 lg:px-20 md:px-8  bg-gray-950 px-4  xl:pt-36 lg:pt-24 md:pt-24 pt-28 xl:pb-12 lg:pb-12 md:pb-12 pb-12  xl:space-x-15 text-gray-200">




            <div className=' w-full flex flex-col justify-start '>
                <Reveal width='100%'>  <h1 style={{ lineHeight: 1 }} className='xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] text-[2.5rem] font-bold  text-white'>DIGITAL MARKETING</h1></Reveal>
                <Reveal width='100%'> <div className=' px-3 py-2 border border-white  text-white xl:w-[97%] lg:w-[87%] md:w-[80%] w-[100%]  font-light xl:text-[20px]  text-sm rounded-md my-5'>
                    Cutting-Edge Strategies, One Click Away.                </div></Reveal>
                <Reveal width='100%'> <p className=' text-paragraph-200 font-light xl:text-lg  text-sm'>
                    Transforming Your Online Presence with Tailored, Agile Marketing Solutions
                </p></Reveal>
            </div>
            <div className='w-full justify-start md:justify-end items-center mb-5 md:mb-0 flex '>

                <video
                    onLoadedData={() => setActive(false)}
                    autoPlay
                    loop
                    muted
                    className={` object-cover md:w-11/12 w-full    rounded-md ${active ? 'z-1' : 'z-10'}`}
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/glossour-43a64.appspot.com/o/WhatsApp%20Video%202024-07-28%20at%2019.54.45_df13f663%20(1)%20(1)%20(1).mp4?alt=media&token=9a3b544b-56bc-42ce-966c-219fd5f1d8dc" type="video/mp4" />

                </video>
            </div>
        </motion.section>
    );
};