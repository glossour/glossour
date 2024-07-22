'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Section } from '../types/Services';
import RequestModal from '../utils/Form/RequsetQuote';
import { motion, useAnimation, useInView } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'spring' } },
    constant: { opacity: 1 },
};

const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
    constant: { opacity: 1 },
};

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 1 } },
    constant: { opacity: 1, y: 0 },
};

const Section4: React.FC<Section> = ({ heading, subheading, btn, paragraph }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} className="container mx-auto xl:px-32 lg:px-10 md:px-8 px-4">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="mb-[70px]"
            >
                <motion.div variants={contentVariants} className="relative w-full flex flex-col-reverse">
                    <motion.h2 variants={textVariants} className="text-left lg:text-center text-3xl md:text-5xl font-extrabold leading-10 text-secondary-100 md:mb-4 mb-2">
                        {heading}
                    </motion.h2>
                    <div className="sm:-right-6 sm:mb-0 lg:right-0 mb-2 sm:absolute f-f-Lato text-sm lg:text-xl leading-[30px] font-bold top-0 mt-1 cursor-pointer"></div>
                </motion.div>
                <motion.p variants={textVariants} className="md:text-2xl text-xl font-bold md:leading-9 lg:text-center text-white md:mb-4">
                    {subheading}
                </motion.p>
                <motion.p variants={textVariants} className="text-sm md:text-xl md:leading-9 lg:text-center text-justify my-3 text-white md:mb-6">
                    {paragraph}
                </motion.p>
                <div className="w-full text-center">
                    <div>
                        <motion.button variants={textVariants} onClick={() => setIsOpen(!isOpen)} type="button" className="w-full lg:w-auto bg-secondary-100 text-secondary-300 p-3 rounded-sm font-bold f-f-DM uppercase">
                            {btn}
                        </motion.button>
                    </div>
                </div>
            </motion.div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title={btn.replace('REQUEST A', '')} />
        </div>
    );
};

export default Section4;
