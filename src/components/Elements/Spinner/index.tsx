export interface ISpinner {
    className?: string;
    variant?: 'extra-small' | 'small' | 'normal' | 'large';
    message?: string;
}

const Spinner: React.FC<ISpinner> = ({ className, variant, message }) => (
    <div
        className={`min-h-full min-w-full flex-col justify-center items-center ${className}`}
    >
        {variant === 'extra-small' ? (
            <div className="animate-spin border-4 m-auto rounded-full border-primary border-t-primary-variant border-r-secondary border-b-secondary-variant border-l-primary-dark w-6 h-6 spin" />
        ) : variant === 'small' ? (
            <div className="animate-spin border-8 m-auto rounded-full border-primary border-t-primary-variant border-r-secondary border-b-secondary-variant border-l-primary-dark w-10 h-10 spin" />
        ) : variant === 'large' ? (
            <div className="animate-spin border-8 m-auto rounded-full border-primary border-t-primary-variant border-r-secondary border-b-secondary-variant border-l-primary-dark w-32 h-32 spin" />
        ) : (
            <div className="animate-spin border-8 m-auto rounded-full border-primary border-t-primary-variant border-r-secondary border-b-secondary-variant border-l-primary-dark w-20 h-20 spin" />
        )}
        {message && (
            <p className="mt-2 italic font-medium text-center">{message}</p>
        )}
    </div>
);

export default Spinner;
