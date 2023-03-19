import { useRef, useState } from 'react';
import Loading from './Loading';

export interface IAutoCompleteInputField {
    label: string;
    searchText?: string;
    handleChange: Function;
    handleSelect: Function;
    placeholderText?: string;
    suggestionList: any[];
    isLoading?: boolean;
}

const AutoCompleteInputField: React.FC<IAutoCompleteInputField> = ({
    label,
    searchText,
    handleChange,
    handleSelect,
    placeholderText,
    suggestionList,
    isLoading = true,
}) => {
    const [selected, setSelected] = useState<boolean>(false);
    const ref = useRef(null);

    return (
        <>
            <label
                htmlFor="componentName"
                className="block text-sm font-bold mb-2"
            >
                {label}
            </label>
            <input
                ref={ref}
                type="text"
                placeholder={placeholderText}
                value={searchText}
                autoComplete="off"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                    handleChange(e.target.value);
                    setSelected(false);
                }}
            />
            {!selected && document.activeElement === ref.current ? (
                isLoading ? (
                    <Loading varient="small" className="pt-4" />
                ) : (
                    <div className="bg-main w-full">
                        {suggestionList && suggestionList?.length > 0 ? (
                            suggestionList.map((suggestion) => (
                                <div
                                    className="w-full p-2 cursor-pointer hover:bg-main_light"
                                    onClick={() => {
                                        handleSelect(suggestion);
                                        setSelected(true);
                                        // @ts-ignore
                                        ref.current.value = suggestion.name;
                                    }}
                                >
                                    {suggestion?.name || suggestion?.title}
                                </div>
                            ))
                        ) : (
                            <div className="w-full p-2 cursor-pointer hover:bg-main_light">
                                No data found
                            </div>
                        )}
                    </div>
                )
            ) : null}
        </>
    );
};

export default AutoCompleteInputField;
