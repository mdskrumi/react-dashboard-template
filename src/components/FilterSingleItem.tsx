import { useState } from 'react';
import Button from 'components/Button';

export interface FilterItem {
    id: string;
    title: string;
    name: string;
}

export interface FilterSingleItemInterface {
    visible?: boolean;
    setIsVisible: Function;
    text?: string;
    icon?: string;
    filterList: any[];
    handleSubmit: Function;
    handleClear: Function;
    className?: string;
}

const FilterSingleItem: React.FC<FilterSingleItemInterface> = ({
    visible,
    setIsVisible,
    text,
    icon,
    filterList,
    handleSubmit,
    handleClear,
    className,
}) => {
    const [selectedItem, setSelectedItem] = useState<any>();

    return (
        <div className={`w-fit ${className} bg-main`}>
            <div
                className={`float-right flex items-center gap-2 hover:bg-main_dark p-2 cursor-pointer ${
                    visible ? 'bg-main_dark' : ''
                }`}
                onClick={() => setIsVisible(!visible)}
            >
                {text && <p>{text}</p>}
                {icon && <img className="w-6" src={icon} alt={'title'} />}
            </div>

            <div className={`${visible ? 'visible' : 'hidden'} bg-main`}>
                <div className="border-2 border-solid rounded w-full mt-2 max-h-80 overflow-y-auto">
                    {filterList && filterList?.length > 0 ? (
                        filterList.map((option: FilterItem) => (
                            <div
                                key={option.id}
                                className={`cursor-pointer hover:bg-main_dark p-1 pr-4 ${
                                    selectedItem === option
                                        ? 'bg-main_dark'
                                        : ''
                                }`}
                                onClick={() => setSelectedItem(option)}
                            >
                                {option?.title || option?.name}
                            </div>
                        ))
                    ) : (
                        <div className="w-full p-2 cursor-pointer hover:bg-main_light">
                            No data found
                        </div>
                    )}
                </div>
                <Button
                    title="FILTER"
                    handleClick={() => {
                        handleSubmit(selectedItem);
                        setIsVisible(false);
                    }}
                    variant="ghost"
                    className="mt-2 cursor-pointer text-l rounded py-1 bg-main_dark hover:bg-primary_light text-white hover:text-primary_light text-center w-full"
                />
                <Button
                    title="CLEAR"
                    handleClick={() => {
                        handleClear();
                        setSelectedItem(undefined);
                        setIsVisible(false);
                    }}
                    variant="ghost"
                    className="mt-2 cursor-pointer text-l rounded py-1 bg-main_dark hover:bg-primary_light text-white hover:text-primary_light text-center w-full"
                />
            </div>
        </div>
    );
};
export default FilterSingleItem;
