'use client'
import React, { useEffect, useRef, useState } from 'react'
import Card from '../utils/Card'
import { FaArrowRight, FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa';

import { testimonials } from '@/content/testimonial';
import { motion } from 'framer-motion';

export default function CustomerReview() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollStartX, setScrollStartX] = useState<number>(0);
    // useEffect(() => {
    //     console.log(scrollRef.current?.clientWidth);

    //     const intervalId = setInterval(() => {
    //         handleScrollRight();
    //     }, 3000); // Change the interval time as needed

    //     return () => clearInterval(intervalId); // Clean up interval on component unmount
    // }, []);

    const handleScrollRight = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            if (scrollLeft + clientWidth >= scrollWidth) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }
    };

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            if (scrollLeft <= 0) {
                scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
            }
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollStartX(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;
        const moveX = e.pageX - startX;
        const newScrollPosition = scrollStartX - moveX;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = newScrollPosition;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };


    return (
        <div className=' customer-review w-full  py-16 flex flex-col  overflow-hidden'>
            <div className='flex w-full justify-between'>
                <div className='text-4xl w-4/5 text-white font-semibold'>
                    <p className=' text-paragraph-200 text-xs my-1'>TESTIMONIAL</p>
                    <h2 className="md:text-4xl text-3xl  font-bold mb-4  text-secondary-100">Customer Reviews</h2>
                </div>
                <div className='w-1/5 text-paragraph-200 text-xs font-normal flex  justify-end space-x-5  items-center'>
                    <motion.button transition={{ duration: 0.3, ease: "easeInOut" }} onClick={handleScrollLeft} whileHover={{ scale: 1.2 }} className=' rounded-full p-1 border-white border-2 '><FaArrowLeft color='#ffffff' size={10} /></motion.button>
                    <motion.button transition={{ duration: 0.3, ease: "easeInOut" }} onClick={handleScrollRight} whileHover={{ scale: 1.2 }} className=' rounded-full p-1 border-white border-2 '><FaArrowRight color='#ffffff' size={10} /></motion.button>
                </div>
            </div>
            <div onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp} // Also consider stopping drag on mouse leave
                onMouseUp={handleMouseUp} ref={scrollRef} className=' flex  my-5 space-x-5 overflow-x-scroll scroll-bar'>
                {testimonials.map((item, index) => (
                    <Card key={index + 1} name={item.name} profession={item.company} img={item.img} content={item.description} />
                ))

                }

            </div>
        </div>
    )
}



