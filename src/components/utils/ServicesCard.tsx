'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
const cardVariants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

interface ServicesCardProps {
    subtitle: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ subtitle, title, description, image, features, buttonLink, buttonText }) => {
    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.4
    })
    return (
        <div>
            <motion.div ref={ref3} initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={containerVariants} className=" w-full flex md:space-y-0     bg-tertiary-200 rounded-md  md:px-8 px-4   flex-col-reverse md:flex-row md:space-x-10 py-5 justify-center items-center">

                <motion.div variants={cardVariants} className="w-full rounded-lg flex  flex-col mt-5 md:mt-0 justify-start items-start h-full">

                    <h2 className="md:text-4xl text-3xl  font-bold mb-4   capitalize text-secondary-100">{title}</h2>
                    <p className="mb-4 text-paragraph-200 text-sm text-justify md:text-left">{description}</p>
                    <ul className=' grid  grid-cols-1 gap-3 mb-5'>
                        {
                            features.map((feature, index) => (<li key={index + 1} className='font-light flex justify-start items-center text-white  text-sm '> <span className=' rounded-full p-0.5 border-white border-2 mr-3'><FaArrowRight color='#ffffff' size={8} /></span>{feature}</li>))
                        }


                    </ul>
                    <Link href={buttonLink}>   <button className='  md:mt-8 mt-3 rounded-md  text-black flex   bg-secondary-100  px-3 py-1.5  justify-center  font-semibold uppercase items-center md:text-sm  text-xs'><span>{buttonText}</span></button></Link>
                </motion.div>
                <motion.div variants={cardVariants} className=" w-full">
                    <img src={image} alt="Team Image" className="rounded-lg w-full xl:h-96 lg:h-80 md:h-72 h-56" />

                </motion.div>
            </motion.div>
        </div>
    );
};
export default ServicesCard;