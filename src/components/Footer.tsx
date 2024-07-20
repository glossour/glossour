'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
export default function Footer() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const explore = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About Us',
            link: '/about/about-us'
        },
        {
            title: 'Services',
            link: '/services/seo'
        },
        {
            title: 'Contact Us',
            link: '/about/contact'
        }
    ]
    const socials = [
        {
            title: 'Facebook',
            link: 'https://www.facebook.com/glossour/?paipv=0&eav=AfaLZtJw3P3MIlG3FYYXP_YdFB3UPyJYto3l0wvomtlSnQkNWkfAs0TLiq-D-D--aqY&_rdr'
        },
        {
            title: 'Twitter',
            link: 'https://twitter.com/glossour'
        },
        {
            title: 'Instagram',
            link: 'https://www.instagram.com/glossour/'
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/company/glossour/mycompany/'
        },

    ]


    const onSubmit = async () => {
        setLoading(true);
        if (email === '' || null) {
            toast.error('Please enter your email address');
            setLoading(false);
            return
        }
        try {
            const payload = {
                email: email
            }
            const response = await axios.post('/api/subscribe', payload); // Replace with your API endpoint

            if (response.status === 200) {
                toast.success(response.data.message);
                setEmail('');
                setEmail('');
            } else {
                toast.error(response.data.message);
                setEmail('');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
            setEmail('');
        } finally {
            setEmail('');
            setLoading(false);

        }
    };
    return (
        <footer className="flex flex-col w-full justify-center items-center">
            {/* Top section */}
            <div className="w-full flex md:flex-row flex-col md:items-center md:space-y-0 space-y-5 xl:px-64 lg:px-20 md:px-8 px-4 bg-gradient-to-b py-16 from-tertiary-200 to-secondary-300 md:justify-between">
                <div>
                    <p className="md:text-4xl text-2xl  text-secondary-100 font-bold">
                        Empower your business with Glossour
                    </p>
                    <p className="text-sm text-paragraph-200">
                        Boost sales and enhance customer experience with our digital marketing solutions.
                    </p>
                </div>
                <Link href={'/about/contact'}> <button className="shadow-md text-sm  text-black font-bold bg-white px-3 py-2 rounded">
                    Get Connected
                </button></Link>
            </div>

            {/* Middle section */}
            <div className="flex w-full md:flex-row flex-col md:space-y-0 space-y-5 xl:px-64 lg:px-20 md:px-8 px-4 py-10">
                <div className="md:w-3/5 w-full md:pr-64 flex flex-col justify-start space-y-5">
                    <div className="text-3xl  text-secondary-100 font-bold">About Glossour</div>
                    <p className="text-paragraph-200 text-xs">
                        We are a dynamic digital marketing agency specializing in SEO, Social Media Marketing, and Content Marketing strategies.
                    </p>
                    <div className="w-full flex md:space-x-2 md:space-y-0 space-y-3 md:flex-row flex-col">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-3xl border-paragraph-200 text-white border py-2 px-3 bg-transparent placeholder:text-paragraph-200 placeholder:text-xs"
                            placeholder="Enter your email."
                        />
                        <button onClick={onSubmit} className="bg-white  text-black text-xs font-medium rounded-3xl md:py-2 py-3 text-nowrap px-3">
                            {loading ? (
                                <div className="loader"></div>
                            ) : (
                                'Subscribe Now'
                            )}
                        </button>
                    </div>
                    <p className="text-paragraph-200 text-[10px]">
                        Subscribe to our newsletter for the latest updates and digital marketing insights.
                    </p>
                </div>
                <div className="flex w-full md:items-end">
                    <div className="md:w-1/2 w-full flex flex-col space-y-2 justify-center md:items-end">
                        <h1 className=" text-secondary-100 font-semibold">Explore</h1>
                        {explore.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <p key={index} className="text-sm text-paragraph-200 hover:text-white cursor-pointer font-light">
                                    {item.title}
                                </p></Link>
                        ))}
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col space-y-2 justify-center md:items-end">
                        <h1 className="   text-secondary-100 font-semibold">Connect With Us</h1>
                        {socials.map((item, index) => (
                            <Link key={index + 1} href={item.link}>
                                <p key={index} className="text-sm text-paragraph-200 hover:text-white cursor-pointer font-light">
                                    {item.title}
                                </p></Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex w-full border-t justify-between border-[#333] xl:px-64 lg:px-24 md:px-8 px-4 py-8">
                <div className="flex md:justify-between md:flex-row flex-col w-full md:space-y-0 space-y-3">
                    <div className="text-xs text-paragraph-200">©{new Date().getFullYear()} Glossour. All rights reserved.</div>

                </div>
            </div>
        </footer>
    );
}
