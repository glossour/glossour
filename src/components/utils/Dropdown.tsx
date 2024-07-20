'use client'
import React, { useEffect, useRef, useState } from "react";
import {
    FiArrowRight,
    FiBarChart2,
    FiChevronDown,
    FiHome,
    FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
interface TabProps {
    children: React.ReactNode;
    tab: number;
    handleSetSelected: (val: number | null) => void;
    selected: number | null;
    title: string;
}
interface ServiceInfo {
    subtitle: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}
interface ContentProps {
    selected: number | null;
    dir: 'l' | 'r' | null;
}

interface NubProps {
    selected: number | null;
}

interface TabType {
    id: number;
    title: string;
    Component: React.FC;
}

export const Tabs: React.FC = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [dir, setDir] = useState<'l' | 'r' | null>(null);

    const handleSetSelected = (val: number | null) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }

        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex md:flex-row flex-col h-fit  gap-2"
        >
            {TABS.map((t) => {
                return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        handleSetSelected={handleSetSelected}
                        tab={t.id}
                        title={t.title}
                    >
                        {t.title}
                    </Tab>
                );
            })}

            <AnimatePresence>
                {selected !== null && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Tab: React.FC<TabProps> = ({ children, tab, handleSetSelected, selected, title }) => {
    const pathname = usePathname();
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 rounded-full px-2 mt-1.5  text-sm transition-colors ${selected === tab || pathname.includes(title.toLowerCase())
                ? "   text-secondary-100"
                : "text-white"
                }`}
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform ${selected === tab ? "rotate-180" : ""
                    }`}
            />
        </button>
    );
};

const Content: React.FC<ContentProps> = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute left-0 top-[calc(100%_+_24px)]  rounded-lg border  border-tertiary-200 bg-gradient-to-b  from-secondary-300  via-secondary-300 to-neutral-800 p-4"
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge: React.FC = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub: React.FC<NubProps> = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected !== null) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border  border-tertiary-200 bg-neutral-900"
        />
    );
};

const About: React.FC = () => {
    const about = [{
        title: 'About us',
        href: '/about/about-us'
    },
    {
        title: 'Founder',
        href: '/about/team'
    },
    {
        title: 'Book Free Meeting',
        href: '/book-meeting'
    },
    {
        title: 'Contact',
        href: '/about/contact'
    },
    {
        title: 'Testimonials',
        href: '/about/testimonials'
    },
    {
        title: 'FAQ',
        href: '/about/faq'
    },

    ]
    return (
        <div>
            <div className="flex ">
                <div>


                    {about.map((item, index) => (
                        <Link key={index + 1} href={item.href} className="mb-1 block text-sm  text-white hover:text-secondary-100">
                            {item.title}
                        </Link>
                    ))
                    }

                </div>

            </div>


        </div>
    );
};

const Services: React.FC = () => {
    const [active, setActive] = useState<string>('Web Development');
    const hoverRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

    useEffect(() => {
        const activeIndex = ServicesInfo.findIndex(item => item.subtitle === active);
        if (hoverRefs.current[activeIndex]) {
            hoverRefs.current[activeIndex]?.focus();
        }
    }, [active, ServicesInfo]);

    return (
        <div>
            <div className="flex w-[26rem] space-x-12">
                <div className="w-full">
                    {ServicesInfo.map((item, index) => (
                        <Link
                            key={index}
                            href={item.buttonLink}
                            ref={(el) => { hoverRefs.current[index] = el; }}
                            className={`mb-1 text-sm flex justify-start items-center outline-none border-none hover:text-secondary-100 ${active === item.subtitle ? ' text-secondary-100' : 'text-paragraph-200'
                                }`}
                            onMouseEnter={() => setActive(item.subtitle)}
                        >
                            {item.subtitle}
                            <span className={`${active === item.subtitle ? 'flex' : 'hidden'} ml-2`}>
                                <FaArrowRight size={10} color="#FACC15" />
                            </span>
                        </Link>
                    ))}
                </div>
                <div className="w-[13rem]">
                    <img
                        src={ServicesInfo.find(item => item.subtitle === active)?.image}
                        alt={active}
                        className="w-full h-28 rounded-xl object-cover"
                    />
                    <Link href={ServicesInfo.find(item => item.subtitle === active)?.buttonLink || ''}>
                        <button className="bg-button-gradient mt-3 w-full rounded-md text-white flex border-tertiary-200 border-2 px-2 py-1 justify-center font-normal items-center text-sm">
                            <span>Request Quote</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


const TABS: TabType[] = [
    {
        title: "About",
        Component: About,
    },
    {
        title: "Services",
        Component: Services,
    },

].map((n, idx) => ({ ...n, id: idx + 1 }));
