import { MouseEventHandler, useState } from 'react';

export interface IListItem {
    title: string;
    handleClick: MouseEventHandler<HTMLDivElement>;
    renderIcon?: Function;
    iconFirst?: boolean;
    disabled?: boolean;
}

export interface IDropDownButton {
    title: string;
    itemList: IListItem[];
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    renderIcon?: Function;
    iconFirst?: boolean;
    disabled?: boolean;
    className?: string;
    align?: 'left' | 'right';
}

const DropDownButton: React.FC<IDropDownButton> = ({
    title,
    variant = 'primary',
    renderIcon,
    iconFirst = true,
    disabled,
    className,
    itemList,
    align = 'right',
}) => {
    const [isActionVisible, setIsActionVisible] = useState(false);
    const toggleActionVisible = () => setIsActionVisible(!isActionVisible);

    return (
        <div className="relative">
            <button
                className={`w-fit rounded border border-solid border-light-gray400 p-2 text-center font-medium transition-all duration-300 hover:scale-105 dark:border-dark-gray400 lg:px-4 ${
                    variant === 'secondary'
                        ? 'bg-light-secondary300 hover:bg-light-secondary600 dark:bg-dark-secondary300 dark:hover:bg-dark-secondary600'
                        : variant === 'ghost'
                          ? 'bg-light-accent50 hover:bg-light-accent700 dark:bg-dark-accent50 dark:hover:bg-dark-accent700'
                          : variant === 'danger'
                            ? 'bg-light-error300 hover:bg-light-error600 dark:bg-dark-error300 dark:hover:bg-dark-error600'
                            : 'bg-light-primary200 hover:bg-light-primary600 dark:bg-dark-primary200 dark:hover:bg-dark-primary600'
                } ${
                    disabled ? 'cursor-not-allowed opacity-70' : ''
                } ${className}`}
                onClick={toggleActionVisible}
                disabled={disabled}
            >
                <div className="flex w-full items-center justify-around">
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
                </div>
            </button>
            <div
                className={`absolute min-w-full bg-light-gray50 transition-all duration-200 dark:bg-dark-gray50 ${
                    align === 'left' ? 'right-0 -left-10' : 'left-0 -right-10'
                } ${isActionVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {itemList?.map((item) => (
                    <div
                        className={`flex w-full cursor-pointer items-center gap-2 px-2 py-3 shadow hover:scale-105 ${
                            item.disabled ? 'opacity-50' : 'opacity-100'
                        }`}
                        onClick={(e) => {
                            if (item.disabled) return;
                            item.handleClick(e);
                            toggleActionVisible();
                        }}
                    >
                        {item.iconFirst &&
                            typeof item.renderIcon === 'function' &&
                            item.renderIcon()}
                        <p className="text-sm">{item.title}</p>
                        {!item.iconFirst &&
                            typeof item.renderIcon === 'function' &&
                            item.renderIcon()}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default DropDownButton;
