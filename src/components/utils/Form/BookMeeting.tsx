'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Input from './Input';
import { BookMeetingFormElements } from '@/components/types/Forms';
import toast from 'react-hot-toast';
import axios from 'axios';
import Dropdown from './Dropdown';
import { Calendar } from './Calender';

interface BookMeetingFormProps {
    title: string;
}

const BookMeetingForm: React.FC<BookMeetingFormProps> = ({ title }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<BookMeetingFormElements>();
    const [loading, setLoading] = useState(false);
    const countryCodes = ['+91', '+1', '+44', '+61', '+971', '+966', '+65', '+60', '+63', '+92', '+94', '+977', '+880', '+62', '+66', '+84', '+86', '+81', '+82', '+852', '+886'];
    const Timing = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', 'Other'];
    const Services = ['Web Development', 'Influencer Marketing', 'SEO', 'Social Media', 'PPC/Ads', 'Press Release', 'Reputation Management', 'Other'];
    const currencyOption = ['USD', 'INR', 'EUR', 'GBP', 'AUD', 'AED', 'SAR', 'SGD', 'MYR', 'PHP', 'PKR', 'LKR', 'BDT', 'IDR', 'THB', 'VND', 'CNY', 'JPY', 'KRW', 'TWD'];
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const onSubmit: SubmitHandler<BookMeetingFormElements> = async (data) => {
        setLoading(true);
        try {
            const payload = {
                ...data,
                date: selectedDate,
            };
            console.log(payload);
            const response = await axios.post('/api/meet-link', payload);

            if (response.status === 200) {
                toast.success(response.data.message, {
                    duration: 4000, // Duration in milliseconds (e.g., 4000ms = 4 seconds)
                });
                reset()
            } else {
                toast.error(response.data.message, {
                    duration: 4000, // Duration in milliseconds (e.g., 4000ms = 4 seconds)

                });
            }
        } catch (error) {
            console.error('Error sending quotation request:', error);
            toast.error('An error occurred. Please try again.', {
                duration: 4000, // Duration in milliseconds (e.g., 4000ms = 4 seconds)
            },);
        } finally {
            setLoading(false);
            reset()
        }
    };

    const onError = (errors: any) => {
        console.log(errors);
        toast.error('Please correct the errors in the form.', {
            duration: 4000, // Duration in milliseconds (e.g., 4000ms = 4 seconds)
        },);
    };



    return (
        <div className='w-full space-y-8 md:space-y-0 md:space-x-8 h-full flex md:flex-row flex-col p-4 bg-tertiary-200 rounded-md'>
            <div className='w-full flex flex-col h-full'>
                <img loading='lazy' src="/images/Glossour.svg" alt="" className='w-full h-1/2 object-fill' />
                <div className=' w-full h-1/2  mt-5'>
                    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} /></div>
            </div>
            <form className='quote-form' onSubmit={handleSubmit(onSubmit, onError)}>
                <h1>{title}</h1>
                <p>{`IT'S FAST, EASY & FREE`}</p>
                <Controller
                    name='name'
                    defaultValue={''}
                    control={control}
                    render={({ field }) => (
                        <Input error={errors.name?.message || ''} label='Name' type='text' placeholder='Enter name' {...field} tabIndex={1} />
                    )}
                />
                <Controller
                    name='email'
                    defaultValue={''}
                    rules={{ required: 'Email is required' }}
                    control={control}
                    render={({ field }) => (
                        <Input error={errors.email?.message || ''} label='Email' type='email' placeholder='Enter email' {...field} tabIndex={2} />
                    )}
                />
                <div className='flex justify-start items-center w-full space-x-3'>
                    <Controller
                        name='countryCode'
                        defaultValue={'+91'}
                        control={control}
                        render={({ field }) => (
                            <div className='w-20'>
                                <Dropdown {...field} options={countryCodes} title='+91' />
                            </div>
                        )}
                    />
                    <div className='w-full'>
                        <Controller
                            name='mobileNumber'
                            defaultValue={''}
                            rules={{ required: 'Mobile Number is required' }}
                            control={control}
                            render={({ field }) => (
                                <Input error={errors.mobileNumber?.message || ''} label='Mobile' type='text' placeholder='Enter mobile number' {...field} tabIndex={3} />
                            )}
                        />
                    </div>
                </div>
                {/* <div className='flex justify-start items-center w-full space-x-3'>
                    <Controller
                        name='currency'
                        defaultValue={'INR'}
                        control={control}
                        render={({ field }) => (
                            <div className='w-20'>
                                <Dropdown {...field} options={currencyOption} title='INR' />
                            </div>
                        )}
                    />
                    <div className='w-full'>
                        <Controller
                            name='budget'
                            defaultValue={''}
                            control={control}
                            render={({ field }) => (
                                <Input error={errors.budget?.message || ''} label='Budget' type='text' placeholder='Enter budget' {...field} tabIndex={3} />
                            )}
                        />
                    </div>
                </div> */}
                <Controller
                    name='service'
                    defaultValue={Services[0]}
                    control={control}
                    render={({ field }) => (
                        <Dropdown {...field} options={Services} title='Services' />
                    )}
                />
                <Controller
                    name='timeSlot'
                    defaultValue={Timing[0]}
                    control={control}
                    render={({ field }) => (
                        <Dropdown {...field} options={Timing} title='Time Slot' />
                    )}
                />
                <Controller
                    name='website'
                    defaultValue={''}
                    control={control}
                    render={({ field }) => (
                        <Input error={errors.website?.message || ''} label='Website Url' type='text' placeholder='Enter website URL' {...field} tabIndex={4} />
                    )}
                />
                <button type='submit' className='form-btn'>
                    {loading ? (
                        <div className="loader"></div>
                    ) : (
                        'Book Meeting'
                    )}
                </button>
            </form>
        </div>
    );
};

export default BookMeetingForm;
