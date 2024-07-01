export interface IBadge {
    text: string;
    variant?: 'success' | 'warning' | 'fail' | 'normal';
    className?: string;
}

const Badge: React.FC<IBadge> = ({ text, variant, className }) => {
    return (
        <div
            className={`w-fit rounded-3xl border border-light-gray400 px-2 py-1 text-center text-xs dark:border-dark-gray400 ${
                variant === 'success'
                    ? 'bg-light-success50 text-light-success900 dark:bg-dark-success50 dark:text-dark-success900'
                    : variant === 'warning'
                      ? 'bg-light-warning50 text-light-warning900 dark:bg-dark-warning50 dark:text-dark-warning900'
                      : variant === 'fail'
                        ? 'bg-light-error50 text-light-error900 dark:bg-dark-error50 dark:text-dark-error900'
                        : 'bg-light-gray50 text-light-gray900 dark:bg-dark-gray50 dark:text-dark-gray900'
            } ${className}`}
        >
            {text}
        </div>
    );
};

export default Badge;
