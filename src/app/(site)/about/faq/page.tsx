'use client'
import FAQ from '@/components/utils/FAQ';
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
type FAQItem = { q: string; a: string; };
type FAQData = {
    [key: string]: FAQItem[];
    'Web Development': FAQItem[];
    'Influencer Marketing': FAQItem[];
    'SEO': FAQItem[];
    'Social Media': FAQItem[];
    'PPC/Ads': FAQItem[];
    'Press Release': FAQItem[];
    'Reputation Mangement': FAQItem[];
};

const faqData: FAQData = {
    'Web Development': [
        {
            q: "What is web development?",
            a: "Web development involves building and maintaining websites, including aspects like web design, web publishing, web programming, and database management."
        },
        {
            q: "What is the difference between front-end and back-end development?",
            a: "Front-end development focuses on the visual and interactive aspects of a website, while back-end development deals with the server-side, database, and application logic."
        },
        {
            q: "What programming languages are commonly used in web development?",
            a: "Common programming languages include HTML, CSS, JavaScript for front-end development, and languages like PHP, Python, Ruby, and Java for back-end development."
        },
        {
            q: "What is responsive web design?",
            a: "Responsive web design is an approach to creating websites that work well on a variety of devices and window or screen sizes, ensuring a good user experience on desktops, tablets, and smartphones."
        },
        {
            q: "What is a content management system (CMS)?",
            a: "A CMS is a software application that allows users to create, edit, manage, and publish content on a website without needing to write code from scratch."
        },
        {
            q: "How do you ensure website security?",
            a: "Website security can be ensured through measures such as using HTTPS, regular software updates, strong passwords, firewalls, and securing against common vulnerabilities like SQL injection and cross-site scripting."
        },
        {
            q: "What is SEO in web development?",
            a: "SEO, or Search Engine Optimization, involves optimizing a website to rank higher in search engine results, improving its visibility to users searching for relevant terms."
        },
        {
            q: "What is the role of web hosting in web development?",
            a: "Web hosting provides the necessary infrastructure and services to make a website accessible on the internet. It stores the website files and makes them available to users online."
        },
        {
            q: "How do you improve website performance?",
            a: "Website performance can be improved by optimizing images, leveraging browser caching, minimizing HTTP requests, using a content delivery network (CDN), and ensuring efficient code."
        },
        {
            q: "What are web development frameworks?",
            a: "Web development frameworks are tools that provide a structured foundation for building websites and web applications. Popular frameworks include React, Angular, Vue.js for front-end, and Django, Ruby on Rails, and Laravel for back-end development."
        }
    ],
    'Influencer Marketing': [
        {
            q: "How does influencer marketing work?",
            a: "Influencer marketing involves collaborating with influencers to promote products or services to their followers."
        },
        {
            q: "What are the benefits of influencer marketing?",
            a: "Influencer marketing can increase brand awareness, reach a larger audience, and build trust with potential customers."
        },
        {
            q: "How do you choose the right influencer?",
            a: "Choosing the right influencer involves considering their relevance, reach, engagement, and authenticity."
        },
        {
            q: "How do you measure the success of an influencer marketing campaign?",
            a: "Success can be measured through metrics such as engagement rates, reach, website traffic, and conversions driven by the campaign."
        },
        {
            q: "What platforms are best for influencer marketing?",
            a: "Popular platforms for influencer marketing include Instagram, YouTube, TikTok, and Twitter, depending on the target audience."
        },
        {
            q: "How much does influencer marketing cost?",
            a: "The cost varies widely depending on the influencer's reach, engagement, and niche. It can range from a few hundred to several thousand dollars per post."
        },
        {
            q: "What are micro-influencers?",
            a: "Micro-influencers are individuals with a smaller but highly engaged follower base, typically between 1,000 to 100,000 followers."
        },
        {
            q: "Why are micro-influencers effective?",
            a: "Micro-influencers often have a more engaged and loyal audience, making their recommendations more trusted and impactful."
        },
        {
            q: "What are the risks of influencer marketing?",
            a: "Risks include influencer fraud, brand misalignment, negative publicity, and ineffective campaigns if the wrong influencer is chosen."
        },
        {
            q: "How do you find influencers?",
            a: "Influencers can be found through social media platforms, influencer marketing platforms, and by conducting hashtag and keyword searches relevant to your niche."
        }
    ],
    'SEO': [
        {
            q: "What is SEO?",
            a: "SEO stands for Search Engine Optimization, which involves optimizing a website to rank higher in search engine results."
        },
        {
            q: "Why is SEO important?",
            a: "SEO is important because it increases visibility, drives organic traffic, and helps build credibility and trust."
        },
        {
            q: "What are the main components of SEO?",
            a: "The main components of SEO are on-page SEO, off-page SEO, technical SEO, and content optimization."
        },
        {
            q: "What is on-page SEO?",
            a: "On-page SEO refers to optimizing individual web pages to improve their search engine rankings and earn more relevant traffic."
        },
        {
            q: "What is off-page SEO?",
            a: "Off-page SEO involves activities outside of your website to improve its search engine rankings, such as link building and social media marketing."
        },
        {
            q: "What is technical SEO?",
            a: "Technical SEO refers to optimizing the technical aspects of a website, such as site speed, mobile-friendliness, and crawlability, to improve its search engine rankings."
        },
        {
            q: "How long does it take to see results from SEO?",
            a: "SEO results can vary, but it typically takes several months to start seeing significant improvements in search engine rankings and traffic."
        },
        {
            q: "What are keywords in SEO?",
            a: "Keywords are the words and phrases that people use to search for information online. They are a crucial part of SEO strategy."
        },
        {
            q: "How do you perform keyword research?",
            a: "Keyword research involves identifying relevant keywords for your business using tools like Google Keyword Planner, Ahrefs, and SEMrush."
        },
        {
            q: "What is a meta description?",
            a: "A meta description is a brief summary of a webpage's content that appears in search engine results, helping to improve click-through rates."
        }
    ],
    'Social Media': [
        {
            q: "Why is social media important for businesses?",
            a: "Social media is important for businesses because it helps reach a larger audience, engage with customers, and build brand awareness."
        },
        {
            q: "How often should I post on social media?",
            a: "The frequency of social media posts depends on the platform and your audience, but consistency is key."
        },
        {
            q: "What type of content should I post on social media?",
            a: "You should post a mix of content, including informative, entertaining, and promotional posts, tailored to your audience."
        },
        {
            q: "How do you create a social media strategy?",
            a: "A social media strategy involves setting goals, identifying your target audience, choosing the right platforms, and creating and scheduling content."
        },
        {
            q: "What is social media engagement?",
            a: "Social media engagement refers to the interactions between your brand and your audience on social media, such as likes, comments, shares, and follows."
        },
        {
            q: "How do you measure social media success?",
            a: "Social media success can be measured through metrics like engagement rate, reach, impressions, follower growth, and website traffic."
        },
        {
            q: "What are social media analytics?",
            a: "Social media analytics involve collecting and analyzing data from social media platforms to measure performance and inform strategy."
        },
        {
            q: "How can I increase my social media followers?",
            a: "Increasing social media followers can be achieved by posting quality content, engaging with your audience, using hashtags, and running promotions or contests."
        },
        {
            q: "What are the best times to post on social media?",
            a: "The best times to post on social media vary by platform and audience, but generally, it's during weekdays and peak times like early morning or late evening."
        },
        {
            q: "What are social media ads?",
            a: "Social media ads are paid advertisements that appear on social media platforms, targeting specific audiences to promote products or services."
        }
    ],
    'PPC/Ads': [
        {
            q: "What is PPC?",
            a: "PPC stands for Pay-Per-Click, a model of internet marketing where advertisers pay a fee each time their ad is clicked."
        },
        {
            q: "How does PPC advertising work?",
            a: "PPC advertising involves bidding on keywords, creating ads, and paying for clicks to drive traffic to a website."
        },
        {
            q: "What are the benefits of PPC advertising?",
            a: "PPC advertising can quickly drive targeted traffic, increase brand visibility, and provide measurable results."
        },
        {
            q: "What platforms support PPC advertising?",
            a: "Major platforms for PPC advertising include Google Ads, Bing Ads, Facebook Ads, and LinkedIn Ads."
        },
        {
            q: "How do you create a successful PPC campaign?",
            a: "A successful PPC campaign involves thorough keyword research, compelling ad copy, effective targeting, and continuous monitoring and optimization."
        },
        {
            q: "What is a quality score in PPC?",
            a: "Quality score is a metric used by search engines to determine the relevance and quality of your ads and keywords, impacting your ad rank and cost-per-click."
        },
        {
            q: "How do you measure PPC performance?",
            a: "PPC performance can be measured through metrics such as click-through rate, conversion rate, cost-per-click, and return on ad spend."
        },
        {
            q: "What is retargeting in PPC?",
            a: "Retargeting is a PPC strategy that targets users who have previously visited your website but did not convert, aiming to bring them back to complete a desired action."
        },
        {
            q: "How much should I budget for PPC advertising?",
            a: "PPC budgets vary based on industry, competition, and campaign goals. It's important to start with a test budget and adjust based on performance and ROI."
        },
        {
            q: "What are negative keywords?",
            a: "Negative keywords are terms that you exclude from your PPC campaigns to prevent your ads from showing for irrelevant searches, improving ad relevance and budget efficiency."
        }
    ],
    'Reputation Mangement': [
        {
            q: "What is reputation management?",
            a: "Reputation management involves monitoring and influencing an individual’s or organization’s reputation."
        },
        {
            q: "Why is reputation management important?",
            a: "Reputation management is important because a positive reputation can enhance credibility, attract customers, and improve business success."
        },
        {
            q: "How do you manage online reputation?",
            a: "Managing online reputation involves monitoring mentions, responding to reviews, addressing negative feedback, and creating positive content."
        },
        {
            q: "What tools are used for reputation management?",
            a: "Common tools for reputation management include Google Alerts, Social Mention, Brandwatch, and Hootsuite."
        },
        {
            q: "How do you handle negative reviews?",
            a: "Handling negative reviews involves responding promptly and professionally, addressing the issue, and taking steps to resolve the problem to improve customer satisfaction."
        },
        {
            q: "What is a crisis management plan?",
            a: "A crisis management plan is a strategy for handling unexpected negative events or publicity that could harm an organization's reputation."
        },
        {
            q: "How can social media affect reputation management?",
            a: "Social media can significantly impact reputation management as it amplifies customer feedback and public perception, both positively and negatively."
        },
        {
            q: "What is online defamation?",
            a: "Online defamation involves false statements made about a person or business online, which can damage their reputation. Legal action may be taken to address defamation."
        },
        {
            q: "How do you build a positive online reputation?",
            a: "Building a positive online reputation involves consistently providing excellent products or services, engaging positively with customers, and actively managing your online presence."
        },
        {
            q: "Can SEO help with reputation management?",
            a: "Yes, SEO can help with reputation management by promoting positive content in search results and pushing down negative or harmful content."
        }
    ],
    'Press Release': [
        {
            q: "What is a press release?",
            a: "A press release is an official statement issued to media outlets to provide information, make announcements, or generate publicity."
        },
        {
            q: "Why are press releases important?",
            a: "Press releases are important because they help disseminate information to a wider audience and can enhance a company's reputation."
        },
        {
            q: "How do you write an effective press release?",
            a: "An effective press release should be clear, concise, newsworthy, and include a strong headline and contact information."
        },
        {
            q: "What should be included in a press release?",
            a: "A press release should include a headline, dateline, introduction, body, boilerplate, and contact information."
        },
        {
            q: "How long should a press release be?",
            a: "A press release should typically be one to two pages long, around 400-600 words."
        },
        {
            q: "When is the best time to send a press release?",
            a: "The best time to send a press release is generally early in the week and early in the day to maximize visibility and coverage."
        },
        {
            q: "How do you distribute a press release?",
            a: "A press release can be distributed via email to journalists, through press release distribution services, and by posting on your website and social media channels."
        },
        {
            q: "What are the common mistakes in writing a press release?",
            a: "Common mistakes include lack of newsworthiness, poor formatting, excessive jargon, lack of contact information, and failing to proofread."
        },
        {
            q: "Can press releases improve SEO?",
            a: "Yes, press releases can improve SEO by generating backlinks, increasing online visibility, and driving traffic to your website."
        },
        {
            q: "How do you measure the success of a press release?",
            a: "The success of a press release can be measured by media coverage, online mentions, website traffic, and engagement metrics such as shares and comments."
        }
    ]
}


export default function Page() {
    const services: string[] = ['Web Development', 'Influencer Marketing', 'SEO', 'Social Media', 'PPC/Ads', 'Press Release', 'Reputation Mangement'];
    const [active, setActive] = useState<number>(0);
    const [faqsList, setFaqsList] = useState(faqData[services[0]]);
    const [dimensions, setDimensions] = useState<{ width: number; left: number }>({ width: 0, left: 0 });

    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        if (buttonsRef.current[active]) {
            const { offsetWidth, offsetLeft } = buttonsRef.current[active]!;
            setDimensions({ width: offsetWidth, left: offsetLeft });
        }
    }, [active]);

    useEffect(() => {
        setFaqsList(faqData[services[active]]);
    }, [active, services]);

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 py-20 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="md:text-5xl text-2xl text-tertiary-200 font-bold">
                    Frequently Asked Questions
                </h1>
                <p className="text-paragraph-200 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className='lg:px-32 md:px-10  mt-16 px-4 overflow-x-hidden w-full'>
                <div className='relative w-full p-2 flex border overflow-x-scroll scroll-bar border-paragraph-200 rounded-md'>
                    <motion.div
                        className="absolute top-2 lg:h-9 h-6 bg-tertiary-200 rounded-md"
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
                    <FAQ faqsList={faqsList} />
                </motion.div>
            </div>
        </section>
    );
}
