'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function FeaturedBy() {
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
        <div className='  flex justify-center items-center my-10  rounded-2xl  md:p-10 p-6 flex-col'>
            <h1 className=' md:text-4xl text-3xl md:w-3/4 w-full text-center  text-secondary-100 font-bold mb-10  uppercase'>Get Premium Press Release Opportunties</h1>
            <div className=' w-full  grid md:grid-cols-5  grid-cols-2 justify-center items-center  gap-10  '>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                        <motion.div variants={variants} initial="intial" whileInView="animate" custom={index} key={index} className='flex justify-center bg-white  h-28 p-3 items-center w-full   shadow-md rounded-md  '>
                            <div>
                                <img loading='lazy' src={`/featured/${item}.png`} alt="trusted by" className='  object-contain ' />
                            </div>
                        </motion.div>
                    ))
                }
            </div></div>
    )
}
