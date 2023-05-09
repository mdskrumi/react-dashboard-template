import { useEffect, useState } from 'react';
import { SearchBarInterface } from 'types';

import useDebounce from 'hooks/useDebounce';

const SearchBar: React.FC<SearchBarInterface> = ({
    placeholder,
    callBackFunction,
    delay,
    className,
}) => {
    const [text, setText] = useState<string>('');
    const debouncedValue = useDebounce<string>(text, delay);

    useEffect(() => {
        if (debouncedValue !== '') callBackFunction(debouncedValue);
    }, [debouncedValue]);

    return (
        <div
            className={`relative flex items-center w-full min-w-[300px] h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ${className}`}
        >
            <input
                className="peer h-full w-full outline-none text-sm text-main pr-2 bg-white"
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                id="search"
                placeholder={placeholder}
            />
            <div
                className="grid place-items-center h-full w-12 text-main cursor-pointer"
                onClick={() => callBackFunction(text)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#1a242f"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchBar;
