'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Input from './Input';
import toast from 'react-hot-toast';
import axios from 'axios';

type ContactFormData = {
    name: string;
    email: string;
    mobileNumber: string;
    description: string;
};

const ContactForm: React.FC = () => {
    const { control, handleSubmit, register, formState: { errors }, reset } = useForm<ContactFormData>();
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/contact', data); // Replace with your API endpoint

            if (response.status === 200) {
                toast.success(response.data.message);
                reset()
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('An error occurred. Please try again.');
        } finally {

            setLoading(false);
            reset()
        }
    };

    const onError = (errors: any) => {
        console.log(errors);
        toast.error('Please correct the errors in the form.');
    };

    return (
        <form className='quote-form' onSubmit={handleSubmit(onSubmit, onError)}>
            <h1>CONTACT US</h1>
            <p>Get in touch with us for any inquiries or support.</p>
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
            <Controller
                name='mobileNumber'
                defaultValue={''}
                rules={{ required: 'Mobile Number is required' }}
                control={control}
                render={({ field }) => (
                    <Input error={errors.mobileNumber?.message || ''} label='Mobile' type='text' placeholder='Enter mobile number' {...field} tabIndex={3} />
                )}
            />
            <div className="mb-4">

                <textarea
                    className=" input-field w-full"
                    id="description"
                    placeholder="Enter your message or description"
                    {...register('description')}
                    rows={2}
                    tabIndex={4}
                />
                {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                )}
            </div>
            <button type='submit' className='form-btn'>
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    'Submit'
                )}
            </button>
        </form>
    );
};

export default ContactForm;
