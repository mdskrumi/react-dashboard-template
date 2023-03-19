import { useState } from 'react';
import { FilterInterface, filterListItem } from 'types';
import Button from 'components/Button';

const FilterComponent: React.FC<FilterInterface> = ({
    filterList,
    callBackFunction,
}) => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [selectedItems, setSelectedItems] = useState<filterListItem[]>([]);
    const addOrRemove = (item: filterListItem) => {
        if (selectedItems.includes(item)) {
            setSelectedItems([...selectedItems.filter((el) => el !== item)]);
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };
    const submit = () => {
        callBackFunction(selectedItems);
        setIsOpenFilter(!isOpenFilter);
    };
    return (
        <div className="flex bg-main">
            <div className="mr-2">
                {isOpenFilter && (
                    <div>
                        <div className="flex justify-end items-center rounded border-2 p-1 w-64">
                            <div className="flex flex-wrap">
                                {selectedItems.map((item, index) => (
                                    <span
                                        key={index}
                                        className="px-1 rounded border m-1"
                                    >
                                        {item.title}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() => setSelectedItems([])}
                                className="cursor-pointer text-2xl mr-2 rounded-full px-2 h-8 hover:font-bold hover:bg-primary_light hover:text-black"
                            >
                                &times;
                            </button>
                        </div>
                        <ul className="border-2 border-solid rounded w-full mt-2">
                            {filterList.map((option, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer hover:bg-main_dark p-1 ${
                                        selectedItems.includes(option)
                                            ? 'bg-primary_light'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        addOrRemove({
                                            title: option.title,
                                            id: option.id,
                                        })
                                    }
                                >
                                    {option.title}
                                </li>
                            ))}
                        </ul>
                        <div className="text-center mt-2">
                            <Button
                                title="FILTER"
                                handleClick={submit}
                                variant="ghost"
                                // className="mt-2 cursor-pointer text-l rounded py-1 bg-primary_light hover:bg-main_dark text-main_dark hover:text-primary_light text-center w-full"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div onClick={() => setIsOpenFilter(!isOpenFilter)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 hover:bg-primary_dark cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                </svg>
            </div>
        </div>
    );
};
export default FilterComponent;
