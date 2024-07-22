'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { Section } from '../types/Services';
import RequestModal from '../utils/Form/RequsetQuote';
import { delay, motion, useAnimation, useInView } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'spring' } },
    constant: { opacity: 1 },
};

const imageVariants = {
    hidden: { x: '100vw', },
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

const Section3: React.FC<Section> = ({ heading, paragraph, img, bgImg, btn, subheading }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    const lastScrollY = useRef(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY.current) {
                setScrollDirection('up');
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            if (scrollDirection === 'down') {
                controls.start('visible');
            } else if (scrollDirection === 'up') {
                controls.start('constant');
            }
        }
        else {
            controls.start('hidden');
        }
    }, [isInView, scrollDirection, controls]);

    return (
        <div ref={ref} className="w-full mx-auto overflow-hidden relative bg-cover bg-no-repeat xl:px-32 lg:px-10 md:px-8 px-4 bg-right lg:bg-center false bg-transparent">
            <div className="container py-9 lg:py-24">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="flex flex-col-reverse lg:flex-row items-center justify-start gap-x-28 gap-y-8"
                >
                    <motion.div variants={contentVariants} className="md:px-[22px] lg:px-0 lg:w-7/12 w-full order-1">
                        <div className="false">
                            <motion.h2 variants={textVariants} className="text-3xl lg:text-5xl font-bold md:leading-[44px] lg:leading-[56px] text-secondary-100 md:mb-6">
                                {heading}
                            </motion.h2>
                            <motion.p variants={textVariants} className="text-white md:text-2xl text-xl f-f-Lato font-bold md:leading-9">
                                {subheading}
                            </motion.p>
                            <motion.p variants={textVariants} className="text-white text-sm md:text-xl text-justify f-f-Lato md:leading-[30px] font-normal md:mt-5 md:mb-12 mt-2">
                                {paragraph}
                            </motion.p>
                            <div className="pb-2 mt-3">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="w-full lg:w-auto font-bold uppercase bg-secondary-100 text-secondary-300 p-3 rounded-sm">
                                    {btn}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <div className="lg:w-5/12 w-full order-2 justify-center items-center flex">
                        <motion.img variants={imageVariants} loading='lazy' src={img} className="w-full h-80 object-cover" alt="image" />
                    </div>
                </motion.div>
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title={heading} />
        </div>
    );
};

export default Section3;
