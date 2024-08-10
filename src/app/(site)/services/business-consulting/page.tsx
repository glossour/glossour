import Section8 from '@/components/services/Section8';
import Carusal from '@/components/utils/Carausal';
import RequestModal from '@/components/utils/Form/RequsetQuote';
import FeaturedBy from '@/components/utils/Carausal';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BusinessConsulting: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div className="">
            <div className="container xl:px-40 lg:px-10 md:px-8 px-4 pt-40">
                <div className="text-center pb-20">
                    <p className="text-sm font-bold tracking-[7px] text-white uppercase">Client</p>
                    <h1 className="md:text-4xl lg:text-5xl text-3xl xl:text-6xl font-extrabold text-red-200 lg:leading-[72.8px] mb-2 mt-2">OUR BUSINESS CONSULTING SERVICES</h1>
                    <p className="md:text-2xl text-sm md:leading-[34px] text-paragraph-200 font-normal mb-8">
                        Explore our comprehensive business consulting services designed to help you achieve your business goals and maximize your potential.
                    </p>
                    <div className="flex justify-center">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-tertiary-200 text-white rounded-sm p-3 font-bold f-f-DM uppercase">Request free quote</button>
                    </div>
                </div>
                <Carusal />

                <div ref={ref} className="mt-20">
                    <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-red-200 mb-10 text-center">Our Offerings</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl bg-white" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-red-200 mb-2 text-center">Market Analysis</h3>
                            <p className="text-lg leading-relaxed text-center text-black">
                                Gain valuable insights into your market with our comprehensive market analysis services.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl bg-white" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-red-200 mb-2 text-center">Business Strategy</h3>
                            <p className="text-lg leading-relaxed text-center text-black">
                                Develop effective business strategies that drive growth and profitability.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl bg-white" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-red-200 text-center mb-2">Financial Planning</h3>
                            <p className="text-lg leading-relaxed text-center text-black">
                                Ensure financial stability and growth with our expert financial planning services.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl bg-white" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-red-200 text-center mb-2">Operations Consulting</h3>
                            <p className="text-lg leading-relaxed text-center text-black">
                                Optimize your operations and improve efficiency with our operations consulting services.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl bg-white" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-red-200 mb-2 text-center">Human Resources</h3>
                            <p className="text-lg leading-relaxed text-center text-black">
                                Develop and implement effective HR strategies that attract and retain top talent.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl bg-white" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-red-200 mb-2 text-center">Technology Consulting</h3>
                            <p className="text-lg leading-relaxed text-center text-black">
                                Leverage the latest technologies to drive innovation and business growth.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
                <FeaturedBy />
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title='Client' />
            <Section8 />
        </div>
    );
};

export default BusinessConsulting;
