'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaChessBishop } from 'react-icons/fa';
import { WhatMakeDiff } from '../types/Services';

const WhatMakeDiffCompo: React.FC<WhatMakeDiff> = ({ heading, content }) => {
    return (
        <div className='w-full xl:px-32 lg:px-10 md:px-10 px-4 bg-tertiary-200 py-10'>
            <h1 className='text-white text-xl font-semibold'>{heading}</h1>
            <div className=' grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 mt-6'>
                {content.map((item, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='bg-white cursor-pointer xl:p-3 p-2 flex space-x-3 w-full shadow-2xl justify-center items-center rounded-md'
                    >
                        <item.icon size={75} color='#000' className=' lg:w-24' />
                        <div className='w-4/5'>
                            <h1 className='font-bold text-[#000]'>{item.title}</h1>
                            <p className='mt-2 text-[#000] text-xs'>{item.paragraph}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhatMakeDiffCompo;
