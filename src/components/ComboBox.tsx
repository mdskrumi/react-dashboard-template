import { useEffect, useRef, useState } from 'react';

import useIntersectObserver from 'hooks/useIntersectObserver';
import useDebounce from 'hooks/useDebounce';

import Button from './Button';
import Loading from './Loading';

export interface IComboBox {
    visible?: boolean;
    setIsVisible: Function;
    text?: string;
    icon?: string;
    handleSearchChange: Function;
    handleSelect: Function;
    handleClear: Function;
    handleScrollFinish: Function;
    placeholderText?: string;
    suggestionList: any[];
    isLoading?: boolean;
    className?: string;
}

const ComboBox: React.FC<IComboBox> = ({
    visible = false,
    setIsVisible,
    icon,
    text,
    handleSearchChange,
    handleSelect,
    handleClear,
    handleScrollFinish,
    placeholderText,
    suggestionList,
    isLoading = true,
    className,
}) => {
    const [selected, setSelected] = useState();
    const [searchText, setSearchText] = useState<any>('');
    const debouncedValue = useDebounce<string>(searchText, 1000);

    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    useEffect(() => {
        handleSearchChange(debouncedValue);
    }, [debouncedValue]);

    useEffect(() => {
        if (isVisible) {
            handleScrollFinish();
        }
    }, [isVisible]);

    return (
        <div className={`w-fit ${className} bg-main`}>
            <div
                className={`float-right flex items-center gap-2 hover:bg-main_dark p-2 cursor-pointer ${
                    visible ? 'bg-main_dark' : ''
                }`}
                onClick={() => setIsVisible(!visible)}
            >
                <p>{text}</p>
                <img className="w-6" src={icon} alt={'title'} />
            </div>

            <div className={`${visible ? 'visible' : 'hidden'} bg-main`}>
                <input
                    type="search"
                    placeholder={placeholderText}
                    value={searchText}
                    autoComplete="off"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />

                <div className="border-2 border-solid rounded w-full mt-2 max-h-80 overflow-y-auto">
                    {suggestionList && suggestionList?.length > 0 ? (
                        suggestionList.map((suggestion, index) => (
                            <div
                                className={`cursor-pointer hover:bg-main_dark p-1 ${
                                    selected === suggestion
                                        ? 'bg-main_dark'
                                        : ''
                                }`}
                                onClick={() => {
                                    setSelected(suggestion);
                                }}
                                key={index}
                                ref={
                                    index === suggestionList.length - 1
                                        ? ref
                                        : null
                                }
                            >
                                {suggestion?.name || suggestion?.title}
                            </div>
                        ))
                    ) : (
                        <div className="w-full p-2 cursor-pointer hover:bg-main_light">
                            No data found
                        </div>
                    )}

                    {isLoading && <Loading className="p-2" varient="small" />}
                </div>
                <Button
                    title="FILTER"
                    handleClick={() => {
                        handleSelect(selected);
                        setIsVisible(false);
                    }}
                    variant="ghost"
                    className="mt-2 cursor-pointer text-l rounded py-1 bg-main_dark hover:bg-primary_light text-white hover:text-primary_light text-center w-full"
                />
                <Button
                    title="CLEAR"
                    handleClick={() => {
                        handleClear();
                        setSelected(undefined);
                        setIsVisible(false);
                        setSearchText('');
                    }}
                    variant="ghost"
                    className="mt-2 cursor-pointer text-l rounded py-1 bg-main_dark hover:bg-primary_light text-white hover:text-primary_light text-center w-full"
                />
            </div>
        </div>
    );
};

export default ComboBox;
