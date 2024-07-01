import { FaSpinner } from 'react-icons/fa';

export interface ISpinner {
    className?: string;
    variant?: 'extra-small' | 'small' | 'normal' | 'large';
    message?: string;
}

const Spinner: React.FC<ISpinner> = ({ className, variant, message }) => (
    <div
        className={`flex min-h-full min-w-full flex-col items-center justify-center ${className}`}
    >
        {variant === 'extra-small' ? (
            <FaSpinner className="h-6 w-6 animate-spin text-light-primary600 dark:text-dark-primary600" />
        ) : variant === 'small' ? (
            <FaSpinner className="h-10 w-10 animate-spin text-light-primary600 dark:text-dark-primary600" />
        ) : variant === 'large' ? (
            <FaSpinner className="h-32 w-32 animate-spin text-light-primary600 dark:text-dark-primary600" />
        ) : (
            <FaSpinner className="h-20 w-20 animate-spin text-light-primary600 dark:text-dark-primary600" />
        )}
        {message && (
            <p className="mt-2 text-center font-medium italic">{message}</p>
        )}
    </div>
);

export default Spinner;
