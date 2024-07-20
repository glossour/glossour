'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion';
interface RevealProps {
    children: React.ReactNode
    width: 'fit-content' | "100%"
}

const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.25 }}
            >{children}</motion.div>

            {/* <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    background: "#FACC15",
                    zIndex: 20
                }}
            >

            </motion.div> */}
        </div>
    );
};
export default Reveal;