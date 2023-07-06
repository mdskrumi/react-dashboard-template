import { MouseEventHandler, useState } from 'react';

export interface IListItem {
    title: string;
    handleClick: MouseEventHandler<HTMLDivElement>;
    renderIcon?: Function;
    iconFirst?: boolean;
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

    return (
        <div className="relative">
            <button
                className={`p-2 lg:px-4 text-center border border-solid rounded transition-all duration-300 w-fit font-medium hover:scale-105 ${
                    variant === 'secondary'
                        ? 'bg-secondary hover:bg-secondary-variant dark:bg-secondary-variant dark:hover:bg-secondary'
                        : variant === 'ghost'
                        ? 'bg-surface hover:bg-ui dark:bg-surface-dark dark:hover:bg-ui-dark'
                        : variant === 'danger'
                        ? 'bg-danger hover:bg-error-dark dark:bg-danger dark:hover:bg-error'
                        : 'bg-primary hover:bg-primary-variant dark:bg-primary-variant dark:hover:bg-primary'
                } ${
                    disabled ? 'cursor-not-allowed opacity-70' : ''
                } ${className}`}
                onClick={() => {
                    setIsActionVisible(() => !isActionVisible);
                }}
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
                className={`bg-surface dark:bg-surface-dark absolute duration-200 transition-all min-w-full ${
                    align === 'left' ? 'right-0 -left-10' : 'left-0 -right-10'
                } ${isActionVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {itemList?.map((item) => (
                    <div
                        className="cursor-pointer px-2 py-3 shadow hover:scale-105 w-full flex items-center gap-2"
                        onClick={item.handleClick}
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
