import { MouseEventHandler } from 'react';
import Spinner from '../Spinner';

export interface IIconActionButton {
    className?: string;
    title: string;
    renderIcon: Function;
    onClick: MouseEventHandler<HTMLDivElement>;
    iconFirst?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

const IconActionButton: React.FC<IIconActionButton> = ({
    className,
    title,
    renderIcon,
    onClick,
    iconFirst = false,
    disabled = false,
    loading = false,
}) => {
    return (
        <div
            className={`border rounded-lg flex items-center shadow-md  ${className}`}
        >
            {iconFirst && (
                <div
                    className={`py-1 px-2 ${
                        disabled ? 'opacity-50' : 'cursor-pointer'
                    }`}
                    onClick={onClick}
                >
                    {renderIcon()}
                </div>
            )}
            <div className={`${iconFirst ? 'border-l' : 'border-r'} py-1 px-4`}>
                {loading ? <Spinner variant="extra-small" /> : <p>{title}</p>}
            </div>
            {!iconFirst && (
                <div
                    className={`py-1 px-2 ${
                        disabled ? 'opacity-50' : 'cursor-pointer'
                    }`}
                    onClick={onClick}
                >
                    {renderIcon()}
                </div>
            )}
        </div>
    );
};

export default IconActionButton;
