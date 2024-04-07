export interface ISpinner {
    className?: string;
    variant?: 'extra-small' | 'small' | 'normal' | 'large';
    message?: string;
}

const Spinner: React.FC<ISpinner> = ({ className, variant, message }) => (
    <div
        className={`min-h-full min-w-full flex-col items-center justify-center ${className}`}
    >
        {variant === 'extra-small' ? (
            <div className="spin m-auto h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-primary" />
        ) : variant === 'small' ? (
            <div className="spin m-auto h-10 w-10 animate-spin rounded-full border-8 border-gray-300 border-t-primary" />
        ) : variant === 'large' ? (
            <div className="spin m-auto h-32 w-32 animate-spin rounded-full border-8 border-gray-300 border-t-primary" />
        ) : (
            <div className="spin m-auto h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-primary" />
        )}
        {message && (
            <p className="mt-2 text-center font-medium italic">{message}</p>
        )}
    </div>
);

export default Spinner;
