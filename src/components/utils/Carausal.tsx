import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { FaArrowDownUpAcrossLine, FaArrowRight } from "react-icons/fa6";
import { link } from "fs";
import Link from "next/link";

const sliderVariants = {
    incoming: (direction: number) => ({
        x: direction > 0 ? "200%" : "-200%",
        scale: 1.2,
        opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction: number) => ({
        x: direction > 0 ? "-200%" : "200%",
        scale: 1,
        opacity: 0.2,
    }),
};

const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04],
};

const IMAGES = [
    {
        id: 0,
        imageSrc:
            "/services/press-release/1.png",
        title: "Business Standard",
        description: "Glossour emerges Asia's best digital marketing agency",
        link: 'https://www.business-standard.com/content/press-releases-ani/glossour-emerges-asia-s-best-digital-marketing-agency-122101300920_1.html'
    },
    {
        id: 4,
        imageSrc:
            "/services/press-release/2.png",
        title: "Mid-Day",
        description: "Glossour: Elevating the Music Industry with Premier Digital Marketing Services",
        link: 'https://www.mid-day.com/brand-media/tech/article/glossour-elevating-the-music-industry-with-premier-digital-marketing-services-1504'
    },
    {
        id: 2,
        imageSrc:
            "/services/press-release/3.png",
        title: "ANI News",
        description: "Glossour emerges Asia's best digital marketing agency",
        link: 'https://www.aninews.in/news/business/business/glossour-emerges-asias-best-digital-marketing-agency20221013135043'
    },
    {
        id: 3,
        imageSrc:
            "/services/press-release/4.png",
        title: "Republic News India",
        description: "Best Digital strategist of India, Yash Mishra expressed his vision on role of digital platforms in influencing voters",
        link: 'https://republicnewsindia.com/best-digital-strategist-of-india-yash-mishra-expressed-his-vision-on-role-of-digital-platforms-in-influencing-voters/'
    },
    {
        id: 1,
        imageSrc:
            "/services/press-release/6.png",
        title: "Asia Business Outlook",
        description: "Indian Firm Glossour Emerges As Asia's Best Digital Marketing Agency",
        link: 'https://www.asiabusinessoutlook.com/news/indian-firm-glossour-emerges-as-asia-s-best-digital-marketing-agency-nwid-1319.html'
    },

    {
        id: 5,
        imageSrc:
            "/services/press-release/5.png",
        title: "Fox Interviewer",
        description: "Best Digital strategist of India, Yash Mishra expressed his vision on role of digital platforms in influencing votersy",
        link: 'https://foxinterviewer.com/politics/best-digital-strategist-of-india-yash-mishra-expressed-his-vision-on-role-of-digital-platforms-in-influencing-voters/'
    },

];

const Carusal = () => {
    const [[imageCount, direction], setImageCount] = useState([0, 0]);

    const activeImageIndex = wrap(0, IMAGES.length, imageCount);

    const swipeToImage = (swipeDirection: number) => {
        setImageCount([imageCount + swipeDirection, swipeDirection]);
    };

    const dragEndHandler = (dragInfo: PanInfo) => {
        const draggedDistance = dragInfo.offset.x;
        const swipeThreshold = 50;
        if (draggedDistance > swipeThreshold) {
            swipeToImage(-1);
        } else if (draggedDistance < -swipeThreshold) {
            swipeToImage(1);
        }
    };

    const skipToImage = (imageId: number) => {
        let changeDirection = 0;
        if (imageId > activeImageIndex) {
            changeDirection = 1;
        } else if (imageId < activeImageIndex) {
            changeDirection = -1;
        }
        setImageCount([imageId, changeDirection]);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            swipeToImage(1); // Auto slide to next image every 3 seconds
        }, 6000);

        return () => clearTimeout(timeout);
    }, [imageCount]); // Reset timeout on imageCount change

    return (
        <main className="w-full">
            <div className="flex flex-col w-full items-center">
                <div className="relative w-full md:h-[80vh] h-[40vh]  bg-red-200 rounded-2xl md:p-6 p-3 flex flex-col items-center ">
                    <div className="relative  h-full w-full overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={imageCount}
                                style={{
                                    backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
                                }}
                                custom={direction}
                                variants={sliderVariants}
                                initial="incoming"
                                animate="active"
                                exit="exit"
                                transition={sliderTransition}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                                className="absolute top-0 left-0 w-full rounded-2xl h-full     bg-center bg-cover md:bg-cover bg-no-repeat image"
                            >
                                <div className="absolute bottom-0 left-0 right-0 md:p-4 p-2 flex justify-between bg-black    rounded-b-2xl text-white">
                                    <div> <h2 className="md:text-xl text-[18px] font-bold  text-red-200">
                                        {IMAGES[activeImageIndex].title}
                                    </h2>
                                        <p className=" text-white text-xs md:text-xl">{IMAGES[activeImageIndex].description}</p></div>
                                    <Link href={IMAGES[activeImageIndex].link}>
                                        <FaArrowRight size={35} color="#fff" className=" -rotate-45" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-3  flex">
                        {IMAGES.map((image, index) => (
                            <button
                                key={image.id}
                                onClick={() => skipToImage(index)}
                                className={`${index === activeImageIndex ? " bg-black   scale-150" : " bg-white"
                                    } h-3 w-3 rounded-full mx-1 focus:outline-none`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Carusal;
