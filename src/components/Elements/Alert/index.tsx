export interface IAlert {
    content: string;
    variant?: 'success' | 'warning' | 'fail' | 'normal';
    renderIcon?: Function;
    className?: string;
}

const Alert: React.FC<IAlert> = ({
    content,
    variant = 'normal',
    renderIcon,
    className,
}) => (
    <div
        className={`w-fit rounded-xl border p-4 text-center text-sm ${
            variant === 'success'
                ? 'bg-light-success50 text-light-success900 dark:bg-dark-success50 dark:text-dark-success900'
                : variant === 'warning'
                  ? 'bg-light-warning50 text-light-warning900 dark:bg-dark-warning50 dark:text-dark-warning900'
                  : variant === 'fail'
                    ? 'bg-light-error50 text-light-error900 dark:bg-dark-error50 dark:text-dark-error900'
                    : 'bg-light-gray50 text-light-gray900 dark:bg-dark-gray50 dark:text-dark-gray900'
        } ${className}`}
    >
        <div className="flex w-full items-center justify-around">
            {typeof renderIcon === 'function' && renderIcon()}
            <p className="ml-1">{content}</p>
        </div>
    </div>
);

export default Alert;
