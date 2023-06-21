import { ReactNode, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

export interface IAccordionItem {
    title: string;
    subTitle?: string;
    trailing?: string;
    children: ReactNode;
}

const AccordionItem: React.FC<IAccordionItem> = ({
    title,
    subTitle,
    trailing,
    children,
}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="cursor-pointer rounded-2xl overflow-hidden bg-ui dark:bg-ui-dark"
            onClick={() => setExpanded(!expanded)}
        >
            <div className="px-6 py-3 select-none grid grid-cols-1">
                <div className="flex justify-end items-center">
                    <h5 className="w-full">{title}</h5>
                    {trailing && (
                        <p className="italic font-semibold text-xs min-w-fit">
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

                {subTitle && <p className="w-full">{subTitle}</p>}
            </div>
            <div
                className={`px-6 overflow-hidden transition-[max-height] duration-500 ease-in ${
                    expanded ? 'h-auto' : 'h-0'
                }`}
            >
                <div className="pb-4">{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
