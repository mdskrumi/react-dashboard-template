export interface ITabItem {
    label: string;
    value: string;
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
            className={`flex justify-center w-fit m-auto bg-ui text-center font-bold text-sm dark:bg-ui-dark rounded-full mb-8 ${className}`}
        >
            {tabItems.map((item: ITabItem) => (
                <p
                    className={`min-w-fit px-3 py-2 rounded-full cursor-pointer ${
                        value === item.value
                            ? 'bg-primary text-text-dark opacity-100'
                            : 'opacity-70'
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
