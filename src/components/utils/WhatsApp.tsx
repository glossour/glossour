'use client'
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
interface WhatsAppProps {
}

const WhatsApp: React.FC<WhatsAppProps> = ({ }) => {
    return (
        <>

            <Link href="https://wa.me/918818828823" className=" rounded-full font-semibold  bg-[#26C943]  text-white flex justify-center space-x-2 items-center fixed px-4 py-3 bottom-5 right-5  md:bottom-10  z-[100] md:right-10" target="_blank">
                <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>  <FaWhatsapp color='#fff' size={30} /> </motion.div><span className=' capitalize'>Chat with us! 24/7</span>
            </Link>
        </>
    );
};
export default WhatsApp;