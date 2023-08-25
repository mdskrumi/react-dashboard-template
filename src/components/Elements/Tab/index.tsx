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
            className={`flex overflow-x-auto grid-rows-1 m-auto bg-ui text-center font-bold text-sm dark:bg-ui-dark rounded-full mb-8 ${className}`}
        >
            {tabItems.map((item: ITabItem) => (
                <p
                    key={item.value}
                    className={`min-w-fit flex-1 px-3 py-2 rounded-full ${
                        value === item.value &&
                        'bg-primary text-text-dark opacity-100'
                    } ${
                        item.disabled
                            ? 'opacity-60 cursor-not-allowed'
                            : 'cursor-pointer'
                    }`}
                    onClick={() => handleClick(item.value)}
                >
                    {item.label}
                </p>
            ))}
        </div>
    );
};

export default Tab;
