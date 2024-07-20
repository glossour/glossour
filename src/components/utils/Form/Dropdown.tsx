"use client";

import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ title, options, value, onChange }: { title: string, options: string[], value: string, onChange: (value: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        onChange(option);
        setIsOpen(false);
        setSearch('');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="w-full" ref={dropdownRef}>
            <div className="relative w-full">
                <div
                    onClick={toggleDropdown}
                    className="outline-none w-full border-white flex justify-between items-center border-b py-2 text-lg mt-4 rounded-sm bg-transparent font-light placeholder:text-white text-white cursor-pointer"
                >
                    <span>{value || title}</span>
                    <svg className="w-6 h-6 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                {isOpen && (
                    <div className="absolute w-full flex flex-col mt-1 border bg-white rounded-sm text-black font-medium shadow-lg z-10">
                        <input
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            ref={inputRef}
                            className="w-full p-2 border-b outline-none text-xs placeholder:text-xs"
                        />
                        <div className="overflow-y-scroll h-32 scroll-bar">
                            {filteredOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className="flex items-center h-8 px-3 hover:bg-tertiary-200 hover:text-white cursor-pointer"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
