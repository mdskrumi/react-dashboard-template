import { ButtonInterface } from '../types';

const Button: React.FC<ButtonInterface> = ({
    title,
    handleClick,
    type = 'button',
    variant = 'primary',
    disabled,
    className,
}) => (
    <button
        type={type}
        className={`${
            disabled
                ? 'font-bold bg-main p-2 lg:px-4 text-gray-400 text-center border border-solid border-gray-400 rounded w-fit hover:cursor-not-allowed'
                : variant === 'danger'
                ? 'font-bold bg-red-600 p-2 lg:px-4 text-white text-center border border-solid border-red-600 rounded hover:bg-red-200 hover:text-red-600 transition-colors duration-300 w-fit focus-within:outline-red-400'
                : variant === 'secondary'
                ? 'font-bold bg-secondary p-2 lg:px-4 text-white text-center border border-solid border-secondary_dark rounded hover:bg-secondary_light hover:text-secondary_dark transition-colors duration-300 w-fit focus-within:outline-secondary_dark'
                : variant === 'ghost'
                ? 'font-bold bg-main p-2 lg:px-4 text-white text-center border border-solid border-white rounded hover:bg-main_light hover:text-white transition-colors duration-300 w-fit focus-within:outline-main'
                : 'font-bold bg-primary p-2 lg:px-4 text-white text-center border border-solid border-primary_dark rounded hover:bg-primary_light hover:text-white transition-colors duration-300 w-fit focus-within:outline-primary_dark'
        } ${className}`}
        onClick={(e) => {
            if (typeof handleClick === 'function') {
                handleClick!(e);
            }
        }}
        disabled={disabled}
    >
        {title}
    </button>
);

export default Button;
