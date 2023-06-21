import { ReactNode } from 'react';

export interface IAccordionGroup {
    defaultExpanded?: number;
    children: ReactNode;
}

const AccordionGroup: React.FC<IAccordionGroup> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 gap-3 card p-5 rounded-lg w-fit">
            {children}
        </div>
    );
};

export default AccordionGroup;
