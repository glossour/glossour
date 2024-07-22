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

const imageVariants = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 50, delay: 0.2, duration: 1 } },
    constant: { x: 0 },
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

const Section5: React.FC<Section> = ({ heading, paragraph, subheading, img, btn }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

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
        <div ref={ref} className="w-full xl:px-32 lg:px-10 px-4 md:px-8">
            <div className="container md:px-[16px] lg:px-0 mx-auto">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="w-full pb-9 lg:pt-12 pt-[62px] flex justify-between flex-col-reverse lg:flex-row items-center gap-y-[20px] lg:gap-y-[51px] gap-x-48"
                >
                    <motion.div variants={contentVariants} className="lg:w-2/3 w-full">
                        <div className="lg:flex flex-col ">
                            <motion.h2 variants={textVariants} className="text-secondary-100 text-3xl md:leading-[44px] lg:text-5xl font-extrabold f-f-Lato lg:leading-[52px] md:mb-6">
                                {heading}
                            </motion.h2>
                            <motion.p variants={textVariants} className="text-white md:text-2xl text-xl font-bold md:leading-9 mb-3 md:mb-6">
                                {subheading}
                            </motion.p>
                        </div>
                        <div className="border-l-2 text-secondary-100 pl-4 mb-11">
                            <motion.p variants={textVariants} className="text-white md:text-xl md:leading-9 text-sm font-normal">
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
                            </motion.p>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="w-full lg:w-auto bg-secondary-100 text-secondary-300 p-3 rounded-sm font-bold f-f-DM uppercase"
                        >
                            {btn}
                        </button>
                    </motion.div>
                    <motion.img variants={imageVariants} loading='lazy' src={img} alt={img} className='lg:w-1/3 lg:h-96 w-full h-full object-contain' />
                </motion.div>
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title={heading} />
        </div>
    );
};

export default Section5;
