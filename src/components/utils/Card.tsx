'use client'
import React from 'react';
import { FaGoogle, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
interface CardProps {
    content: string
    img: string
    name: string
    profession: string

}

const Card: React.FC<CardProps> = ({ content, img, name, profession }) => {
    return (
        <motion.div whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} className=' flex-shrink-0 rounded-md bg-card-gradient p-6 h-96 w-80  flex flex-col space-y-3 justify-center items-center'>

            <div className='h-3/4 flex flex-col justify-center items-center w-full'>
                <div className='  space-x-3 flex justify-center items-center my-3'>
                    <FaStar size={25} color='#FACC15' />    <FaStar size={25} color='#FACC15' />    <FaStar size={25} color='#FACC15' />    <FaStar size={25} color='#FACC15' />    <FaStar size={25} color='#FACC15' />
                </div>
                <p className=' text-paragraph-200 text-xs font-normal text-center my-3'>
                    {content}
                </p>
            </div>
            <div className=' w-full h-1/4  flex justify-center items-center flex-col  '>
                <img src={img} className=' rounded-full h-10 w-10' />
                <h1 className='  text-secondary-100 text-sm mt-1'>{name}</h1>
                <p className=' text-paragraph-200 text-xs'>{profession}</p>
            </div>
        </motion.div>
    );
};
export default Card;