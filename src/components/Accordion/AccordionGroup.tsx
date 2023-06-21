import { useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionGroup = () => {
    const [expanded, setExpanded] = useState(-1);

    return (
        <div className="grid grid-cols-1 gap-3 card p-5 rounded-lg">
            <AccordionItem
                title="Accordion Example 1"
                expanded={expanded === 1 ? true : false}
                setExpanded={() =>
                    setExpanded((curr) => (curr === -1 ? 1 : -1))
                }
                subTitle="asd"
                trailing="asd"
            >
                <div>Accordion Body</div>{' '}
            </AccordionItem>
            <AccordionItem
                title="Accordion Example 1"
                expanded={expanded === 1 ? true : false}
                setExpanded={() =>
                    setExpanded((curr) => (curr === -1 ? 1 : -1))
                }
                subTitle="asd"
                trailing="asd"
            >
                <div>Accordion Body</div>{' '}
            </AccordionItem>
        </div>
    );
};

export default AccordionGroup;
