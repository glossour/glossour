'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Reveal from '../utils/Reveal'

export default function TrustedBy() {
    const variants = {
        intial: {
            opacity: 0,
            y: 100
        },
        animate: (e: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1 * e

            }
        })
    }
    return (
        <Reveal width='100%'>
            <div className=' w-full  grid md:grid-cols-6 grid-cols-2 justify-center items-center    md:py-20 gap-5 py-10'>
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <motion.div variants={variants} initial="intial" whileInView="animate" custom={index} key={index} className='flex justify-center items-center   '>
                            <div>
                                <img loading='lazy' src={`/testimonial/${item}.png`} alt="trusted by" className='w-20 h-20 object-contain' />
                            </div>
                        </motion.div>
                    ))
                }
            </div></Reveal>
    )
}
