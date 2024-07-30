'use client'
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { Tabs } from './utils/Dropdown';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import SpringModal from './utils/Form/GetIn';
import RequestModal from './utils/Form/RequsetQuote';

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    const [active, setActive] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState({
        about: false,
        services: false,
    });

    type DropdownKeys = keyof typeof activeDropdown;

    const handleDropdownToggle = (dropdown: DropdownKeys) => {
        setActiveDropdown((prev) => ({
            ...prev,
            [dropdown]: !prev[dropdown],
        }));
    };


    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navbarRef]);
    useEffect(() => {
        console.log(pathname.split('/')[1])
        if (pathname.split('/')[1] === '') {
            gsap.registerPlugin(ScrollTrigger);
            gsap.fromTo('.navbar', { opacity: 1, display: 'flex' }, {
                scrollTrigger: {
                    trigger: '.analytics-section-3',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                display: 'none',
                duration: 0.5
            })
        }
    }, [pathname])



    return (
        <>
            <div ref={navbarRef} className={`bg-card-gradient w-4/5 fixed top-0 md:hidden left-0 h-screen p-3 flex justify-between flex-col z-[110] transition-all ${active ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col'>
                    <Link href={'/'} onClick={() => setActive(!active)}>
                        <button className=''><img loading='lazy' src='/logo/brand.svg' className='w-48 h-full' /></button>
                    </Link>

                    <div className={`mt-5 bg-white text-black rounded font-semibold`}>
                        <div onClick={() => handleDropdownToggle('about')}
                            className="flex text-xl px-2 cursor-pointer items-center justify-between rounded-lg py-1.5"
                        >
                            <span>About</span>
                            <span className={`shrink-0 transition duration-300 ${activeDropdown.about ? "-rotate-180" : "rotate-0"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <ul className={`overflow-hidden transition-all text-sm duration-300 px-3 ${activeDropdown.about ? 'max-h-screen ' : 'max-h-0'}`}>
                            <Link onClick={() => setActive(!active)} href={'/about/about-us'}><li className='py-1'>About us</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/about/team'}><li className='py-1'>Founder</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/about/contact'}><li className='py-1'>Contact</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/about/testimonials'}><li className='py-1'>Testimonial</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/about/faq'}><li className='py-1'>FAQ</li></Link>
                        </ul>
                    </div>

                    <div className='mt-2 bg-white text-black rounded font-semibold'>
                        <div onClick={() => handleDropdownToggle('services')}
                            className="flex  text-xl cursor-pointer items-center px-2 py-1.5 justify-between rounded-lg"
                        >
                            <span>Services</span>
                            <span className={`shrink-0 transition duration-300 ${activeDropdown.services ? "-rotate-180" : "rotate-0"}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <ul className={`overflow-hidden transition-all duration-300 text-sm  px-3 ${activeDropdown.services ? 'max-h-screen' : 'max-h-0'}`}>
                            <Link onClick={() => setActive(!active)} href={'/services/web-development'}><li className='py-1'>Website Development</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/services/seo'}><li className='py-1'>Search Engine Optimization(SEO)</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/services/social-media-marketing'}><li className='py-1'>Social Media Marketing</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/services/influencer-marketing'}><li className='py-1'>Influencer Marketing</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/services/ppc'}><li className='py-1'>Pay-per-click (PPC)</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/services/reputation-management'}><li className='py-1'>Reputation Management</li></Link>
                            <Link onClick={() => setActive(!active)} href={'/services/press-release'}><li className='py-1'>Press Release</li></Link>
                        </ul>
                    </div>

                    <Link href={'/book-meeting'}>
                        <button onClick={() => setActive(!active)} className='text-white text-xl mt-2 px-2 py-1.5 flex justify-start'>Book Meeting</button>
                    </Link>
                </div>
                <div>
                    <Link href={process.env.NEXT_PUBLIC_YT_LINK || ''} onClick={() => setActive(!active)}>
                        <button className='px-3 py-1.5 w-full rounded border-[#807cd4] text-xl mt-3 bg-button-gradient border transition-all justify-start items-center text-white font-normal flex'>
                            <span className='mr-3'><img loading='lazy' src='/icons/right-arrow.svg' /></span>Youtube Promotion
                        </button>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className='px-3 py-1.5 w-full rounded border-[#807cd4] text-xl mt-1.5 bg-button-gradient border transition-all justify-start items-center text-white font-normal flex'>
                        <span className='mr-3'><img loading='lazy' src='/icons/right-arrow.svg' /></span>Get in touch
                    </button>
                </div>
            </div>
            <nav className=' navbar xl:max-w-5xl lg:max-w-3xl md:max-w-3xl z-[100] backdrop-blur-md backdrop-filter bg-opacity-50 bg-secondary-300    sm:max-w-sm  max-w-xs top-5  fixed rounded-2xl   border-tertiary-200 border-2   right-0 left-0 mx-auto  md:p-3 py-2 pr-3 text-[14px]  font-medium  justify-between items-center    text-white flex space-x-3'>

                <div className=' md:flex hidden justify-start space-x-8  items-center'>
                    <Link href={'/'}>
                        <button className='  transition-all  justify-center items-center flex  text-lg font-semibold text-white '><img loading='lazy' src='/logo/brand.svg' className='w-44 h-full' /></button>
                    </Link>
                    <div className=' flex '>
                        <Tabs />
                        <Link href={'/book-meeting'}>  <button className={` ${pathname.includes("book") ? ' text-secondary-100' : 'text-white'}  text-sm px-2 mt-1.5`}>Book Meeting</button></Link></div>
                </div>
                <div className=' space-x-3 md:flex hidden justify-center items-center'>
                    <Link href={process.env.NEXT_PUBLIC_YT_LINK || ''}>
                        <button className=' px-3 py-1.5 rounded  border-[#807cd4] text-xs   bg-button-gradient border transition-all  justify-start items-center text-white font-normal flex  '><span className=' mr-3'><img loading='lazy' src='/icons/right-arrow.svg' /></span>Youtube Promotion</button>
                    </Link>

                    <button onClick={() => setIsOpen(!isOpen)} className=' px-3 py-1.5 rounded  border-[#807cd4] text-xs   bg-button-gradient border transition-all  justify-start items-center text-white font-normal flex  '><span className=' mr-3'><img loading='lazy' src='/icons/right-arrow.svg' /></span>get in touch</button>
                </div>
                <div className='  md:hidden flex justify-between w-full'>
                    <Link href={'/'}>
                        <button className=''><img loading='lazy' src='/logo/brand.svg' className='w-32 h-full' /></button>
                    </Link>

                    <button className=' ' onClick={() => setActive(!active)}><FaBars color='#fff' size={15} /></button>

                </div>


            </nav>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    );
};
export default Navbar;