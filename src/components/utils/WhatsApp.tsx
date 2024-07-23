'use client';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const icons: React.ElementType[] = [FaWhatsapp, FaTelegram, FaInstagram];

const iconColors = ['bg-[#26C943]', 'bg-[#34AAE2]', 'bg-instagram-gradient'];
interface WhatsAppProps { }

const WhatsApp: React.FC<WhatsAppProps> = () => {
    const [showAll, setShowAll] = useState(false);
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleIconClick = () => {
        setShowAll(!showAll);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 3000); // Change icon every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowAll(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const CurrentIcon = icons[currentIconIndex];

    const backgroundColor = iconColors[currentIconIndex];
    return (
        <motion.div
            ref={containerRef}
            initial={{ width: 90 }}
            animate={{ width: showAll ? 200 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }} className='flex justify-center items-center bottom-5 right-10 md:bottom-10 fixed space-x-3  p-2.5 rounded-full z-[100] md:right-10'>
            <div
                onClick={handleIconClick}

                className={`${showAll ? "hidden" : ""} rounded-full font-semibold ${backgroundColor} transition-all text-white flex justify-center space-x-2 items-center px-3 py-3 cursor-pointer`}
            >
                <CurrentIcon color='#fff' size={45} />
            </div>

            {showAll && (
                <>  <Link href="https://wa.me/918818828823" className="rounded-full font-semibold bg-[#26C943] text-white flex justify-center space-x-2 items-center px-3 py-3" target="_blank">
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}> <FaWhatsapp color='#fff' size={45} /> </motion.div>
                </Link>
                    <Link href="https://t.me/Teamglossour" className="rounded-full font-semibold bg-[#34AAE2] text-white flex justify-center space-x-2 items-center px-3 py-3" target="_blank">
                        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}> <FaTelegram color='#fff' size={45} /> </motion.div>
                    </Link>

                    <Link href="https://www.instagram.com/glossour/" className="rounded-full font-semibold bg-instagram-gradient text-white flex justify-center space-x-2 items-center px-3 py-3" target="_blank">
                        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}> <FaInstagram color='#fff' size={45} /> </motion.div>
                    </Link>
                </>
            )}
        </motion.div>
    );
};

export default WhatsApp;
