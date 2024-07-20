import BookMeetingForm from '@/components/utils/Form/BookMeeting';
import React from 'react';

export default function Page() {
    return (
        <div className="container xl:px-40 lg:px-10 md:px-8 px-4 py-40">
            <div className="text-center">
                <p className="text-sm font-bold tracking-[7px] leading-tight text-white uppercase">BOOK A MEETING</p>
                <h1 className="md:text-4xl lg:text-5xl text-3xl xl:text-6xl font-extrabold text-tertiary-200 leading-[48px] lg:leading-[72.8px] mb-2 mt-2">{`LET'S CONNECT`}</h1>
                <p className="md:text-2xl text-sm md:leading-[34px] text-paragraph-200 font-normal mb-8">
                    We are eager to connect with you. Schedule a meeting with our team to discuss how we can make marketing magic happen for your business. Our experts are ready to bring their passion and expertise to help you achieve your goals.
                </p>
            </div>
            <BookMeetingForm title="BOOK A FREE MEETING" />
        </div>
    );
}
