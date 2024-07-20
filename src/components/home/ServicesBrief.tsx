'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesCard from '../utils/ServicesCard';

interface ServicesBriefProps { }

const ServicesBrief: React.FC<ServicesBriefProps> = () => {
    const services: string[] = ['Website Development', 'Influencer Marketing', 'Search Engine Optimization(SEO)', 'Social Media', 'Pay-per-click (PPC)', 'Press Release', 'Reputation Mangement'];
    const ServicesInfo: any[] = [
        {
            subtitle: 'Website Development',
            title: 'Cutting-Edge Web Development',
            description: 'We build websites that are fast, secure, and easy to manage. Our development process ensures your site is responsive, user-friendly, and SEO optimized for maximum reach and performance.',
            image: '/services-brief/web.png',
            features: ['Fast', 'Secure', 'User-Friendly'],
            buttonText: 'EXPLORE WEB DEVELOPMENT',
            buttonLink: '/services/web-development'
        },
        {
            subtitle: 'Influencer Marketing',
            title: 'Impactful Influencer Marketing',
            description: 'Amplify your brand’s reach and engagement through our strategic Influencer Marketing services. We connect you with the right influencers to create authentic and compelling content that resonates with your target audience.',
            image: '/services-brief/influencer.png',
            features: ['Influencer Selection', 'Content Creation', 'Campaign Management'],
            buttonText: 'DISCOVER INFLUENCER MARKETING',
            buttonLink: '/services/influencer-marketing'
        },

        {
            subtitle: 'Search Engine Optimization(SEO)',
            title: 'Expert Search Engine Optimization',
            description: 'Enhance your online visibility and drive organic traffic with our expert SEO services. We offer On-Page SEO, Off-Page SEO, and Technical SEO to ensure your site ranks higher on search engines.',
            image: '/services-brief/seo.png',
            features: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO'],
            buttonText: 'LEARN ABOUT SEO',
            buttonLink: '/services/seo'
        },
        {
            subtitle: 'Social Media Marketing',
            title: 'Engaging Social Media Campaigns',
            description: 'Increase your online presence and engagement with our Social Media Marketing services. We specialize in Facebook, Instagram, and LinkedIn Marketing to help you connect with your audience.',
            image: '/services-brief/social.png',
            features: ['Facebook Marketing', 'Instagram Marketing', 'LinkedIn Marketing'],
            buttonText: 'EXPLORE SOCIAL MEDIA MARKETING',
            buttonLink: '/services/social-media-marketing'
        },
        {
            subtitle: 'PPC Advertising',
            title: 'Effective Pay-per-click (PPC) Campaigns',
            description: 'Maximize your online sales and revenue with our PPC services. We offer Google Ads, Bing Ads, and Facebook Ads to ensure your ads reach the right audience and achieve your marketing goals.',
            image: '/services-brief/ppc.png',
            features: ['Google Ads', 'Bing Ads', 'Facebook Ads'],
            buttonText: 'LEARN ABOUT PPC',
            buttonLink: '/services/ppc'
        },
        {
            subtitle: 'Press Release Services',
            title: 'Impactful Press Releases',
            description: 'Enhance your online visibility and credibility with our Press Release services. We provide Press Release Writing and Distribution to ensure your news reaches the right audience.',
            image: '/services-brief/press.png',
            features: ['Press Release Writing', 'Press Release Distribution', 'Increase Visibility'],
            buttonText: 'DISCOVER PRESS RELEASE SERVICES',
            buttonLink: '/services/press-release'
        },
        {
            subtitle: 'Reputation Management',
            title: 'Comprehensive Reputation Management',
            description: 'Protect and enhance your brand’s image with our Reputation Management services. We offer tailored strategies to improve your online visibility and credibility through various channels.',
            image: '/services-brief/reputation.png',
            features: ['Brand Monitoring', 'Crisis Management', 'Review Management'],
            buttonText: 'LEARN ABOUT REPUTATION MANAGEMENT',
            buttonLink: '/services/reputation-management'
        }
    ];

    const [active, setActive] = useState<number>(0);
    const [dimensions, setDimensions] = useState<{ width: number; left: number }>({ width: 0, left: 0 });

    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        if (buttonsRef.current[active]) {
            const { offsetWidth, offsetLeft } = buttonsRef.current[active]!;
            setDimensions({ width: offsetWidth, left: offsetLeft });
        }
    }, [active]);

    return (
        <div className='w-full overflow-x-hidden'>
            <div className='relative w-full md:p-2 p-1 flex border overflow-x-scroll scroll-bar border-paragraph-200 rounded-md'>
                <motion.div
                    className="absolute md:top-2 top-1 lg:h-8 h-7 bg-tertiary-200 rounded-md"
                    initial={false}
                    animate={{ width: dimensions.width, left: dimensions.left }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
                {services.map((service, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        ref={(el: HTMLButtonElement | null) => {
                            buttonsRef.current[index] = el;
                        }}
                        className={`relative z-10 flex justify-center rounded-md transition-all items-center text-nowrap lg:px-2.5 xl:px-3.5 py-1.5 lg:text-sm xl:text-[16px] text-xs px-2 text-white ${active === index ? 'bg-transparent' : ''}`}
                    >
                        {service}
                    </button>
                ))}
            </div>
            <motion.div className='py-5 w-full'>
                {
                    <ServicesCard subtitle={ServicesInfo[active]?.subtitle} title={ServicesInfo[active]?.title} description={ServicesInfo[active]?.description} image={ServicesInfo[active]?.image} buttonLink={ServicesInfo[active]?.buttonLink} buttonText={ServicesInfo[active]?.buttonText} features={ServicesInfo[active]?.features} />
                }

            </motion.div>
        </div>
    );
};

export default ServicesBrief;
