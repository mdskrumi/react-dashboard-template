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
        className={`p-2 lg:px-4 text-center border border-solid rounded transition-all duration-300 w-fit font-medium hover:scale-105 ${
            variant === 'secondary'
                ? 'bg-secondary hover:bg-secondary-variant dark:bg-secondary-variant dark:hover:bg-secondary'
                : variant === 'ghost'
                ? 'bg-surface hover:bg-ui dark:bg-surface-dark dark:hover:bg-ui-dark'
                : variant === 'danger'
                ? 'bg-danger hover:bg-error-dark dark:bg-danger dark:hover:bg-error'
                : 'bg-primary hover:bg-primary-variant dark:bg-primary-variant dark:hover:bg-primary'
        } ${disabled ? 'cursor-not-allowed opacity-70' : ''} ${className}`}
        onClick={(e) => {
            if (typeof handleClick === 'function') {
                handleClick!(e);
            }
        }}
        disabled={disabled}
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
