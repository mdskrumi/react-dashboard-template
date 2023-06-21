import { ReactNode } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

export interface IAccordionItem {
    title: string;
    subTitle?: string;
    trailing?: string;
    children: ReactNode;
    expanded: boolean;
    setExpanded: React.MouseEventHandler<HTMLDivElement>;
}

const AccordionItem: React.FC<IAccordionItem> = ({
    title,
    subTitle,
    trailing,
    children,
    expanded,
    setExpanded,
}) => {
    return (
        <div
            className="cursor-pointer rounded-2xl overflow-hidden bg-ui dark:bg-ui-dark"
            onClick={setExpanded}
        >
            <div className="px-6 py-3 select-none grid grid-cols-1">
                <h5>{title}</h5>

                <div className="flex justify-end items-center">
                    {subTitle && <p className="w-full">{subTitle}</p>}
                    {trailing && (
                        <p className="italic font-semibold text-xs">
                            {trailing}
                        </p>
                    )}
                    <AiFillCaretDown
                        style={{
                            transform: !expanded ? 'rotate(-90deg)' : '',
                        }}
                        className="w-7 transition-transform duration-300"
                    />
                </div>
            </div>
            <div
                className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in h-auto ${
                    expanded ? 'h-auto' : 'h-0'
                }`}
            >
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
