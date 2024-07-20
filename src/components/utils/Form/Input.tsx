'use client'
import React from 'react';

interface InputProps {
    error: string
    label: string
    tabIndex: number
    type: string
    placeholder: string
}

const Input: React.FC<InputProps> = ({ error, label, type, placeholder, tabIndex, ...rest }) => {
    return (
        <>
            <input id={label}  {...rest} className='input-field' type={type} placeholder={label} tabIndex={tabIndex} />
            <h2 className='text-error'>{error}</h2>

        </>
    );
};
export default Input;