import { useRef, useState } from 'react';
import Spinner from '../Spinner';

export interface IAutoCompleteInputField {
    label: string;
    searchText?: string;
    handleChange: Function;
    handleSelect: Function;
    placeholder?: string;
    suggestionList: any[];
    isLoading?: boolean;
    isSelected?: boolean;
    addNewButton?: boolean;
    addNewButtonText?: string;
    handleAddNewButtonClick?: React.MouseEventHandler<HTMLDivElement>;
    className?: string;
}

const AutoCompleteInputField: React.FC<IAutoCompleteInputField> = ({
    label,
    searchText,
    handleChange,
    handleSelect,
    placeholder,
    suggestionList,
    isLoading = true,
    isSelected = false,
    addNewButton = false,
    addNewButtonText,
    handleAddNewButtonClick,
    className,
}) => {
    const [selected, setSelected] = useState<boolean>(isSelected);
    const ref = useRef(null);

    return (
        <div className={className}>
            <label htmlFor={`label-${label}`}>{label}</label>
            <input
                id={`label-${label}`}
                ref={ref}
                type="text"
                value={searchText}
                placeholder={placeholder}
                autoComplete="off"
                onChange={(e) => {
                    handleChange(e.target.value);
                    setSelected(false);
                }}
            />
            {!selected && document.activeElement === ref.current ? (
                isLoading ? (
                    <Spinner variant="extra-small" className="mt-3" />
                ) : (
                    <div className="border shadow-lg ">
                        {suggestionList && suggestionList?.length > 0 ? (
                            suggestionList.map((suggestion) => (
                                <div
                                    className="w-full p-2 cursor-pointer border-b"
                                    onClick={() => {
                                        setSelected(true);
                                        handleSelect(suggestion);
                                    }}
                                    key={suggestion?.id}
                                >
                                    {suggestion?.name}
                                </div>
                            ))
                        ) : document.activeElement === ref.current &&
                          searchText !== undefined &&
                          searchText !== '' ? (
                            <div className="w-full p-2 cursor-pointer">
                                No data found
                            </div>
                        ) : null}

                        {addNewButton &&
                            document.activeElement === ref.current &&
                            searchText !== undefined &&
                            searchText !== '' && (
                                <div
                                    className="w-full p-2 cursor-pointer flex justify-center font-bold items-center border-t text-secondary"
                                    onClick={handleAddNewButtonClick}
                                >
                                    {addNewButtonText}
                                </div>
                            )}
                    </div>
                )
            ) : null}
        </div>
    );
};

export default AutoCompleteInputField;
