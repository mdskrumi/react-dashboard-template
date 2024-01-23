export interface ITabItem {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface ITab {
    tabItems: ITabItem[];
    value: string;
    handleClick: Function;
    className?: string;
}

const Tab: React.FC<ITab> = ({ tabItems, handleClick, value, className }) => {
    return (
        <div
            className={`flex overflow-x-auto bg-ui text-center font-bold text-sm dark:bg-ui-dark rounded-full mb-8 ${className}`}
        >
            {tabItems.map((item: ITabItem, idx: number) => (
                <p
                    key={item.value}
                    className={`flex-1 min-w-max m-1 p-2 rounded-full ${
                        value === item.value &&
                        'bg-primary text-text-dark opacity-100'
                    } ${
                        item.disabled
                            ? 'opacity-60 cursor-not-allowed'
                            : 'cursor-pointer'
                    }`}
                    onClick={() => handleClick(idx)}
                >
                    {item.label}
                </p>
            ))}
        </div>
    );
};

export default Tab;
