import React from 'react';
import ContactForm from '@/components/utils/Form/ContactForm';
import { FaAddressBook, FaEnvelope, FaHourglass, FaMobile, FaPhone, FaTimes } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import Section8 from '@/components/services/Section8';

const ContactPage: React.FC = () => {
    return (
        <>
            <div className="w-full xl:px-40 lg:px-10 md:px-8 px-4 md:py-40 py-20 flex lg:flex-row flex-col lg:space-y-0 space-y-8  lg:space-x-5 text-paragraph-200">

                {/* Left Half: Contact Information */}
                <div className="w-full flex flex-col p-5 md:space-y-5 space-y-3">
                    <h1 className="md:text-5xl text-3xl lg:text-6xl text-red-200 font-extrabold">Contact Us</h1>
                    <p className='md:text-xl text-sm'>Our digital marketing team is always ready to help. Give us a call, send us an email, or fill out the form below.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-5 w-full">
                        <div className=" flex  space-y-1 flex-col">
                            <div className='text-white flex  text-2xl font-semibold items-center'>
                                <span><FaLocationPin color='#fff' size={25} className="mr-2" /></span>
                                <span className="font-semibold">OFFICE ADDRESS</span>
                            </div>
                            <p className=' pl-8'>5, Daryaganj, Delhi, 110002, India</p>
                        </div>
                        <div className=" flex  space-y-1 flex-col">
                            <div className='text-white flex  text-2xl font-semibold items-center'>
                                <span><FaMobile color='#fff' size={25} className="mr-2" /></span>
                                <span className="font-semibold">PHONE NUMBER</span>
                            </div>
                            <p className=' pl-8'>+91 881 882 882 3</p>
                        </div>
                        <div className=" flex  space-y-1 flex-col">
                            <div className='text-white flex  text-2xl font-semibold items-center'>
                                <span><FaEnvelope color='#fff' size={25} className="mr-2" /></span>
                                <span className="font-semibold">EMAIL US</span>
                            </div>
                            <p className=' pl-8'>Team@glossour.com</p>
                        </div>

                        <div className=" flex  space-y-1 flex-col">
                            <div className='text-white flex  text-2xl font-semibold items-center'>
                                <span><FaHourglass color='#fff' size={25} className="mr-2" /></span>
                                <span className="font-semibold">OFFICE TIMINGS</span>
                            </div>
                            <p className=' pl-8'>
                                Mon-Sat: 11.00 AM – 6.00 PM</p>
                        </div>

                        {/* Additional Contact Information */}
                        <div className=" flex  space-y-1 flex-col">
                            <div className='text-white flex  text-2xl font-semibold items-center'>
                                <span><FaAddressBook color='#fff' size={25} className="mr-2" /></span>
                                <span className="font-semibold">VISIT US</span>
                            </div>
                            <p className=' pl-8'>Visit our office during business hours for a consultation.</p>
                        </div>
                        <div className=" flex  space-y-1 flex-col">
                            <div className='text-white flex  text-2xl font-semibold items-center'>
                                <span><FaPhone color='#fff' size={25} className="mr-2" /></span>
                                <span className="font-semibold">CALL US</span>
                            </div>
                            <p className=' pl-8'>Call us directly to speak with a member of our team.</p>
                        </div>
                    </div>
                </div>

                {/* Right Half: Contact Form */}
                <div className="w-full lg:px-10 flex justify-center items-center">
                    <ContactForm />
                </div>
            </div>


            <div className="container lg:px-32 md:px-10 px-4 h-content-fit  py-10"><iframe className="relative" width="100%" height="600" style={{ border: 0 }} loading="lazy" src="https://maps.google.com/maps?q=+28.6421698,77.1631991&amp;hl=en&amp;z=14&amp;output=embed"></iframe></div>
            <Section8 />
        </>
    );
};

export default ContactPage;
