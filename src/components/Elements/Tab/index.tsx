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
            className={`mb-8 flex overflow-x-auto rounded-full bg-light-primary200 text-center text-sm font-bold dark:bg-dark-primary200 ${className}`}
        >
            {tabItems.map((item: ITabItem, idx: number) => (
                <p
                    key={item.value}
                    className={`m-1 min-w-max flex-1 rounded-full p-2 ${
                        value === item.value &&
                        'bg-light-primary400 text-white opacity-100 dark:bg-dark-primary400'
                    } ${
                        item.disabled
                            ? 'cursor-not-allowed opacity-60'
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
