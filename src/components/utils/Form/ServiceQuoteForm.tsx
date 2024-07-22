'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller, } from 'react-hook-form';
import Input from './Input';
import { serviceRequestQuote } from '@/components/types/Forms';
import toast from 'react-hot-toast';
import axios from 'axios';
import Dropdown from './Dropdown';

interface ServiceQuoteFormProps {
    title: string;
}

const ServiceQuoteForm: React.FC<ServiceQuoteFormProps> = ({ title }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<serviceRequestQuote>();
    const [loading, setLoading] = useState(false);
    const countryCodes = ['+91', '+1', '+44', '+61', '+971', '+966', '+65', '+60', '+63', '+92', '+94', '+977', '+880', '+62', '+66', '+84', '+86', '+81', '+82', '+852', '+886',];
    const currencyOption = ['USD', 'INR', 'EUR', 'GBP', 'AUD', 'AED', 'SAR', 'SGD', 'MYR', 'PHP', 'PKR', 'LKR', 'BDT', 'IDR', 'THB', 'VND', 'CNY', 'JPY', 'KRW', 'TWD',];
    const onSubmit: SubmitHandler<serviceRequestQuote> = async (data) => {
        setLoading(true);
        try {
            const payload = {
                ...data,

                services: title,
            };
            const response = await axios.post('/api/request-quote', payload);

            if (response.status === 200) {
                toast.success('Quotation request sent successfully!', {
                    duration: 4000, // Duration in milliseconds (e.g., 4000ms = 4 seconds)

                });
                reset()
            } else {
                toast.error('Failed to send quotation request.', {
                    duration: 4000, // Duration in milliseconds (e.g., 4000ms = 4 seconds)
                },);
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
        <>
            <form className='quote-form' onSubmit={handleSubmit(onSubmit, onError)}>
                <h1 className=' uppercase'>REQUEST A QUOTE FOR {title}</h1>
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
                    name='website'
                    defaultValue={''}
                    control={control}
                    render={({ field }) => (
                        <Input error={errors.website?.message || ''} label='Website' type='text' placeholder='Enter website URL' {...field} tabIndex={4} />
                    )}
                />


                <button type='submit' className='form-btn'>
                    {loading ? (
                        <div className="loader"></div>
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </>
    );
};

export default ServiceQuoteForm;
