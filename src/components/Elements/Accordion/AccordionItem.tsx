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
            className="cursor-pointer overflow-hidden rounded-2xl border-b bg-light-primary50 dark:bg-dark-primary50"
            onClick={() => setExpanded(!expanded)}
        >
            <div className="grid select-none grid-cols-1 px-6 py-3">
                <div className="flex items-center justify-end">
                    <h6 className="w-full text-light-primary900 dark:text-dark-primary900">
                        {title}
                    </h6>
                    {trailing && (
                        <p className="caption min-w-fit">{trailing}</p>
                    )}
                    <AiFillCaretDown
                        style={{
                            transform: !expanded ? 'rotate(-90deg)' : '',
                        }}
                        className="w-7 transition-transform duration-300"
                    />
                </div>

                {subTitle && (
                    <p className="w-full text-sm font-light text-light-primary900 dark:text-dark-primary900">
                        {subTitle}
                    </p>
                )}
            </div>
            <div
                className={`overflow-hidden px-6 transition-[max-height] duration-500 ease-in ${
                    expanded ? 'h-auto' : 'h-0'
                }`}
            >
                <div className="pb-4">{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
