export interface IBadge {
    text: string;
    variant?: 'success' | 'warning' | 'fail' | 'normal';
    className?: string;
}

const Badge: React.FC<IBadge> = ({ text, variant, className }) => {
    return (
        <div
            className={`w-fit text-center rounded-3xl px-2 py-1 text-xs ${
                variant === 'success'
                    ? 'bg-[#D1FAE5] text-[#097552]'
                    : variant === 'warning'
                    ? 'bg-[#FAF7D1] text-[#736e0b]'
                    : variant === 'fail'
                    ? 'bg-[#FFE4E6] text-[#F43F5E]'
                    : 'bg-ui dark:bg-ui-dark'
            } ${className}`}
        >
            {text}
        </div>
    );
};

export default Badge;
