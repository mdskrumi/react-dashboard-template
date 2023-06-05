import { MouseEventHandler } from 'react';

export interface IMenuRightItem {
    title: string;
    icon: string;
    handleClick: MouseEventHandler<HTMLDivElement>;
}

const MenuRightItem: React.FC<IMenuRightItem> = ({
    title,
    icon,
    handleClick,
}) => (
    <div
        title={title}
        onClick={handleClick}
        className="flex justify-between items-center m-2 p-2 rounded-lg shadow-md bg-surface shadow-line dark:bg-surface-dark dark:shadow-line-dark"
    >
        <p className="font-bold">{title}</p>
        <img className="w-6 h-6" src={icon} alt={title} />
    </div>
);

export default MenuRightItem;
