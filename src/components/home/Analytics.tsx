'use client'
import React from 'react'
import { FaChartLine, FaBullhorn, FaRocket, FaUsers, FaGlobe, FaHandsHelping, FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Space from '../utils/Space'
import Link from 'next/link'
import Reveal from '../utils/Reveal'

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}


export default function Analytics() {

    const Card = ({ icon: Icon, color, title, description, bgImage }: { icon: React.ElementType, color: string, title: string, description: string, bgImage: string }) => {
        const cardVariants = {
            hover: { translateY: -10 }
        };

        return (
            <motion.div
                whileHover={cardVariants.hover}
                transition={{ duration: 0.3 }}
                className='relative md:space-y-5 space-y-2 md:col-span-1 p-12 flex flex-col justify-center items-center rounded-3xl '
                style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='absolute inset-0 bg-black opacity-50 rounded-3xl'></div> {/* Overlay */}
                <div className='relative z-10 flex flex-col space-y-3 justify-center items-center'>
                    <div className='rounded-2xl bg-black p-6  w-fit flex justify-center items-center'>
                        <Icon color={color} size={26} />
                    </div>
                    <h1 className='text-secondary-100 text-3xl font-bold text-center'>{title}</h1>
                    <p className='text-paragraph-200 font-normal text-sm text-center'>{description}</p>
                </div>
            </motion.div>
        );
    };

    return (
        <div className='w-full  py-16 flex flex-col justify-center items-center'>
            <div className='flex md:flex-row flex-col w-full md:justify-between md:space-y-0 space-y-3'>
                <div className='xl:text-4xl lg:text-3xl md:text-3xl text-3xl w-full text-secondary-100 capitalize font-bold'>
                    <Reveal width='100%'> <p className='w-full'>
                        Data-Driven Insights for Your Digital Marketing</p> </Reveal>
                </div>
                <div className='  text-white text-xs font-normal flex justify-center text-justify md:text-left items-center'>
                    <Reveal width='100%'>  <p className='md:w-4/5 w-full   text-sm'>
                        Gain valuable insights from your website, web app, or mobile app analytics to enhance your marketing strategies. Harness the power of data to make informed decisions and stay ahead in the competitive market.

                    </p></Reveal>
                </div>
            </div>

            <motion.div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3 w-full py-8'>
                <Card
                    icon={FaChartLine}
                    title="Analytics"
                    description="We provide comprehensive analytics to help you track and measure your marketing performance."
                    color="#FACC15"
                    bgImage={'/analytics/1.png'}
                />
                <Card
                    icon={FaBullhorn}
                    title="Campaigns"
                    description="Optimize your marketing campaigns with data-driven insights and reach your target audience effectively."
                    color="#FACC15"
                    bgImage={'/analytics/2.png'}
                />
                <Card
                    icon={FaRocket}
                    title="Growth"
                    description="Leverage our tools to drive growth and achieve your business objectives faster."
                    color="#FACC15"
                    bgImage={'/analytics/3.png'}
                />
                <Card
                    icon={FaUsers}
                    title="Audience"
                    description="Understand your audience better with in-depth analytics and tailor your strategies to their needs."
                    color="#FACC15"
                    bgImage={'/analytics/4.png'}
                />
                <Card
                    icon={FaGlobe}
                    title="Global Reach"
                    description="Expand your global reach with our data-driven marketing strategies and tools."
                    color="#FACC15"
                    bgImage={'/analytics/5.png'}
                />
                <Card
                    icon={FaHandsHelping}
                    title="Support"
                    description="We provide exceptional support to help you navigate and optimize your marketing efforts."
                    color="#FACC15"
                    bgImage={'/analytics/6.png'}
                />
            </motion.div>

            <Space h={16} />

            <motion.div className="w-full flex md:space-y-0 md:flex-row  flex-col-reverse   md:space-x-10 py-5 justify-center items-center">
                <motion.div className="w-full rounded-lg flex flex-col md:mt-0 mt-3 justify-start items-start h-full">
                    <Reveal width='100%'> <h2 className="md:text-4xl text-3xl font-bold mb-4  capitalize text-secondary-100">Unleash Your Potential with YouTube Artist Promotion</h2></Reveal>
                    <Reveal width='100%'><p className="mb-4  text-white text-sm text-justify md:text-left">
                        Elevate your music career by harnessing the power of our YouTube Artist Promotion services. Our comprehensive approach not only boosts your channel visibility but also engages your audience effectively. With our expertise, artists can reach new heights and inspire change.
                    </p></Reveal>
                    <Link href={'https://glossour-yt.vercel.app/'}> <button className='bg-button-gradient uppercase rounded-md text-white flex border-tertiary-200 border-2 px-3 py-1.5 justify-center font-normal items-center text-sm'>
                        <span> youtube Promotion</span>
                        <span className='ml-2'><img loading='lazy' src='/icons/right-arrow.svg' alt="Explore More" /></span>
                    </button></Link>
                </motion.div>
                <Reveal width='100%'>
                    <motion.div className="w-full">
                        <img loading='lazy' src="/images/yt.png" alt="Team Image" className="rounded-lg w-full xl:h-96 lg:h-80 md:h-60 h-56" />
                    </motion.div></Reveal>
            </motion.div>


            <Space h={16} />
            <motion.div className="analytics-section-3 w-full flex md:space-x-10 md:space-y-0 space-y-5 flex-col md:flex-row py-5 justify-center items-center">
                <Reveal width='100%'><motion.div className="w-full">
                    <img loading='lazy' src="/images/meet.png" alt="Team Image" className="rounded-lg w-full xl:h-96 lg:h-80 md:h-60 h-56" />
                </motion.div></Reveal>
                <motion.div className="w-full rounded-lg flex flex-col justify-start items-start h-full">
                    <Reveal width='100%'> <p className='text-paragraph-200 text-xs my-1'>BOOK A FREE MEETING</p></Reveal>
                    <Reveal width='100%'> <h2 className="xl:text-4xl lg:text-3xl md:text-3xl text-3xl font-bold mb-4   capitalize text-secondary-100">Unlock Your Potential with a Free Consultation</h2></Reveal>
                    <Reveal width='100%'>   <p className="mb-4  text-white text-sm md:text-left text-justify">Discover how our tailored solutions can drive growth and inspire change for your business. Book a free meeting with our experts and explore the endless possibilities at your fingertips.</p></Reveal>
                    <Reveal width='100%'><ul className='grid md:grid-cols-2 grid-cols-1 gap-3 mb-5 xl:text-sm text-xs'>
                        <li className='font-light flex justify-start items-center text-white'>
                            <span className='rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>
                            Scalability and Adaptability
                        </li>
                        <li className='font-light flex justify-start items-center text-white'>
                            <span className='rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>
                            Reliability and Performance
                        </li>
                        <li className='font-light flex justify-start items-center text-white'>
                            <span className='rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>
                            Continuous Innovation
                        </li>
                        <li className='font-light flex justify-start items-center text-white'>
                            <span className='rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>
                            Innovative Features
                        </li>
                    </ul></Reveal>
                    <Link href={'/book-meeting'}> <button className='bg-button-gradient rounded-md text-white flex border-tertiary-200 border-2 px-3 py-1.5 justify-center font-normal items-center text-sm'>
                        <span>BOOK NOW</span>
                        <span className='ml-2'><img loading='lazy' src='/icons/right-arrow.svg' alt="Book Now" /></span>
                    </button></Link>
                </motion.div>
            </motion.div>

        </div>
    )
}



