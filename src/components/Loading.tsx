export interface ILoading {
    className?: string;
    varient?: 'small' | 'normal' | 'large';
    message?: string;
}

const Loading: React.FC<ILoading> = ({ className, varient, message }) => (
    <div
        className={`min-h-full min-w-full flex-col justify-center items-center ${className}`}
    >
        {varient === 'small' ? (
            <div className="animate-spin border-8 m-auto rounded-full border-primary border-t-primary-varient border-r-secondary border-b-secondary-varient border-l-primary-dark w-10 h-10 spin" />
        ) : varient === 'large' ? (
            <div className="animate-spin border-8 m-auto rounded-full border-primary border-t-primary-varient border-r-secondary border-b-secondary-varient border-l-primary-dark w-32 h-32 spin" />
        ) : (
            <div className="animate-spin border-8 m-auto rounded-full border-primary border-t-primary-varient border-r-secondary border-b-secondary-varient border-l-primary-dark w-20 h-20 spin" />
        )}
        {message && (
            <p className="mt-2 italic font-medium text-center">{message}</p>
        )}
    </div>
);

export default Loading;
