import React from 'react';

export interface IToggle {
    isActive: boolean;
    onToggle: Function;
    showMessage?: boolean;
    className?: string;
}

const Toggle: React.FC<IToggle> = ({
    isActive,
    onToggle,
    showMessage = false,
    className,
}) => {
    return (
        <label
            className={`relative inline-flex items-center mr-5 cursor-pointer ${className}`}
            onClick={() => onToggle()}
        >
            <div
                className={`w-12 h-7 rounded-full shadow-inner ${
                    isActive ? 'bg-primary' : 'bg-disable opacity-60'
                }`}
            />
            <div
                className={`${
                    isActive ? 'translate-x-6' : 'translate-x-1'
                } w-5 h-5 transition-transform transform bg-white rounded-full shadow-md absolute inset-y-1 left-0`}
            />
            {showMessage && (
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {isActive ? 'Active' : 'Inactive'}
                </span>
            )}
        </label>
    );
};

export default Toggle;
