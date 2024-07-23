
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function page() {
    return (
        <div className='container xl:px-40 lg:px-10 md:px-8 px-4 py-40 '>
            <div className="text-center ">

                <h1 className="md:text-4xl lg:text-5xl text-3xl xl:text-6xl font-extrabold  text-red-200 leading-[48px] lg:leading-[72.8px] mb-2 mt-2">OUR FOUNDER</h1>
                <p className="md:text-2xl text-sm md:leading-[34px] text-paragraph-200 font-normal mb-8">
                    Discover the dedicated team driving marketing excellence and innovation at Glossour.

                </p>
            </div>
            <div className='w-full space-y-8 md:space-y-0 md:space-x-8 flex md:flex-row flex-col p-4  bg-tertiary-200 rounded-md'>
                <div className='md:w-1/4 w-full flex flex-col h-full'>
                    <img loading='lazy' src="/images/founder.png" alt="" className='w-full   h-[65vh]    rounded-xl' />


                </div>
                <div className='md:w-3/4 w-full flex flex-col h-full   text-white text-justify'>

                    <div className=' text-3xl uppercase font-bold '>Mr. Yash Mishra</div>
                    <div className=' text-xl  '>Managing Director</div>
                    <div className=' text-xs font-bold uppercase  py-1 px-2 mt-1   flex-shrink text-black  w-1/4  bg-secondary-100 rounded-md flex justify-center items-center'> Founder</div>
                    <p className=" leading-relaxed  font-normal  mt-3  text-sm md:text-[16px]">
                        Yash Mishra, the Founder-CEO of Glossour, leads with a vision to redefine digital marketing by providing innovative and effective solutions that drive measurable results. With over 30 years of combined experience in various domains of digital marketing and technology, Yash founded Glossour two years ago to revolutionize the industry with a comprehensive 360° setup.
                    </p>
                    <p className=" leading-relaxed  font-normal  text-sm md:text-[16px]">
                        Under his leadership, Glossour has grown exponentially, establishing a leadership position in the market within a short span. Yash strategic insights and commitment to excellence have propelled Glossour to cater to over 800 brands globally, ranging from individual businesses to corporate giants.
                    </p>
                    <p className=" leading-relaxed  font-normal   text-sm md:text-[16px]">
                        With expansion plans underway in Dubai and existing branches across India and the US, Yash envisions Glossour as a global powerhouse in digital marketing. His passion for delivering unparalleled client satisfaction and staying ahead with cutting-edge digital strategies defines Glossour continued success.
                    </p>
                    <div className=' flex space-x-4 justify-start items-center w-full  my-3'>
                        <Link href={'https://www.linkedin.com/in/yash-mishra-65b750211/?originalSubdomain=in'}>
                            <button className=' rounded-full bg-secondary-100 w-12 h-12 flex justify-center items-center'>
                                <FaLinkedinIn color='#000' size={20} />
                            </button></Link>
                        <Link href={'https://www.instagram.com/myselfyashmishra/'}> <button className=' rounded-full bg-secondary-100 w-12 h-12 flex justify-center items-center'>
                            <FaInstagram color='#000' size={20} />
                        </button></Link>


                    </div>
                </div>
            </div>
        </div>
    )
}
