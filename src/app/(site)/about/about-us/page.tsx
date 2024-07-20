'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import Section8 from '@/components/services/Section8';
import Reveal from '@/components/utils/Reveal';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Abous() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    return (
        <div>
            <div className="container xl:px-40 lg:px-10 md:px-8 px-4 py-40  ">
                <div ref={ref} className="text-center ">
                    <Reveal width='100%'>  <p className="text-sm font-bold tracking-[7px] leading-tight text-white uppercase">ABOUT US</p></Reveal>
                    <Reveal width='100%'>  <h1 className="md:text-4xl lg:text-5xl text-3xl xl:text-6xl font-extrabold text-tertiary-200 leading-[48px] lg:leading-[72.8px] mb-2 mt-2">OUR COMMITMENT</h1></Reveal>
                    <Reveal width='100%'> <p className="md:text-2xl text-sm md:leading-[34px] text-paragraph-200 font-normal mb-8">
                        We’re constantly searching for the brightest people from all over the world. People who are as trusted as they are talented and as passionate about their work as they are about their team. People who want to make marketing magic happen for legendary clients.
                    </p></Reveal>
                </div>
                <Reveal width='100%'>  <video src="https://firebasestorage.googleapis.com/v0/b/glossour-43a64.appspot.com/o/Digital%20Agency%20(1).mp4?alt=media&token=116eed1d-7b94-4757-ada7-860e2d0f8e92" autoPlay muted loop className='w-full  rounded-3xl  mt-10' /></Reveal>
                <div className="grid my-20 grid-cols-1 lg:grid-cols-2 gap-10">
                    <Reveal width='100%'>  <motion.div >
                        <h2 className="text-4xl font-bold text-tertiary-200 mb-4">Our Mission</h2>
                        <p className="text-lg leading-relaxed text-paragraph-200 md:text-left text-justify mb-6">
                            At Glossour, our mission is to redefine digital marketing by providing innovative and effective solutions that drive measurable results. We aim to empower businesses to reach their full potential and achieve sustainable growth in an ever-evolving digital landscape.
                        </p>
                    </motion.div></Reveal>
                    <Reveal width='100%'>  <motion.div >
                        <h2 className="text-4xl font-bold text-tertiary-200 mb-4">Our Vision</h2>
                        <p className="text-lg leading-relaxed text-paragraph-200 mb-6 md:text-left text-justify ">
                            Our vision is to be the leading digital marketing agency known for our creativity, expertise, and client-centric approach. We aspire to build long-lasting partnerships with our clients, helping them navigate the complexities of the digital world with confidence and success.
                        </p>
                    </motion.div></Reveal>
                </div>
                <div ref={ref} className="mt-20 ">
                    <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-tertiary-200 mb-10 text-center">Our Values</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold  text-white mb-2">Innovation</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                We embrace creativity and continuously seek new ways to solve challenges and seize opportunities in the digital marketing space.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Integrity</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                We conduct our business with the highest ethical standards, ensuring transparency, honesty, and fairness in every interaction.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Excellence</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                We are committed to delivering exceptional quality in our work, consistently exceeding expectations and setting new benchmarks in the industry.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Collaboration</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                We believe in the power of teamwork, fostering a collaborative environment where diverse ideas and perspectives are valued and integrated.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Customer Focus</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                Our clients are at the heart of everything we do. We prioritize their needs, strive to understand their goals, and work tirelessly to achieve their desired outcomes.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Sustainability</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                We are dedicated to sustainable practices that positively impact our community and the environment, ensuring a better future for generations to come.
                            </p>
                        </motion.div>
                    </motion.div>


                </div>


            </div>
            <Section8 />
        </div>
    );
}
