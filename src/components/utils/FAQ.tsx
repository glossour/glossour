'use client'
import React from 'react';
import FaqsCard from './FaqsCard';

interface Faq {
    q: string;
    a: string;
}

interface FAQProps {
    faqsList: Faq[];
}

const FAQ: React.FC<FAQProps> = ({ faqsList }) => {
    return (
        <div className="mt-14  w-full mx-auto">
            {faqsList?.map((item, idx) => (
                <FaqsCard
                    key={idx}
                    idx={idx}
                    faqsList={item}
                />
            ))}
        </div>
    );
};

export default FAQ;
