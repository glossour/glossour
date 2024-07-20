'use client'
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ServiceQuoteForm from "./ServiceQuoteForm";


const RequestModal = ({ isOpen, setIsOpen, title }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, title: string }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur scroll-bar  md:p-8 fixed inset-0 z-[10000000000000000000000000] w-full h-screen top-0 left-0 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className=" bg-tertiary-200 text-white  rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <ServiceQuoteForm title={title} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RequestModal;