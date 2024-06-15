import Spinner from '../Spinner';

export interface IButton {
    title: string;
    handleClick?: Function;
    type?: 'button' | 'submit' | 'reset' | undefined;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    renderIcon?: Function;
    iconFirst?: boolean;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

const Button: React.FC<IButton> = ({
    title,
    handleClick,
    type = 'button',
    variant = 'primary',
    renderIcon,
    iconFirst = true,
    disabled,
    loading = false,
    className,
}) => (
    <button
        type={type}
        className={`w-fit rounded border border-solid border-light-gray400 p-2 text-center font-medium transition-all duration-300 hover:scale-105 dark:border-dark-gray400 lg:px-4 ${
            variant === 'secondary'
                ? 'bg-light-secondary300 hover:bg-light-secondary600 dark:bg-dark-secondary300 dark:hover:bg-dark-secondary600'
                : variant === 'ghost'
                  ? 'bg-light-accent50 hover:bg-light-accent700 dark:bg-dark-accent50 dark:hover:bg-dark-accent700'
                  : variant === 'danger'
                    ? 'bg-light-error300 hover:bg-light-error600 dark:bg-dark-error300 dark:hover:bg-dark-error600'
                    : 'bg-light-primary200 hover:bg-light-primary600 dark:bg-dark-primary200 dark:hover:bg-dark-primary600'
        } ${disabled ? 'cursor-not-allowed opacity-70' : ''} ${className}`}
        onClick={(e) => {
            if (typeof handleClick === 'function') {
                handleClick!(e);
            }
        }}
        disabled={disabled || loading}
    >
        <div className="flex w-full items-center justify-around">
            {loading ? (
                <Spinner variant="extra-small" />
            ) : (
                <>
                    {iconFirst &&
                        typeof renderIcon === 'function' &&
                        renderIcon()}
                    <p
                        className={`${
                            typeof renderIcon === 'function' && iconFirst
                                ? 'ml-1'
                                : 'mr-1'
                        }`}
                    >
                        {title}
                    </p>
                    {!iconFirst &&
                        typeof renderIcon === 'function' &&
                        renderIcon()}
                </>
            )}
        </div>
    </button>
);

export default Button;
