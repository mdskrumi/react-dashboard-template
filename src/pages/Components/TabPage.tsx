import Tab from 'components/Elements/Tab';
import MainLayout from 'layout/MainLayout';
import { useState } from 'react';

const TabPage = () => {
    const TABS = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' },
        { label: 'Tab 4', value: '4' },
    ];
    const [selected, setSelected] = useState(TABS[0].value);

    return (
        <MainLayout
            title="Tab"
            breadcrumbs={[{ title: 'Tab', link: '#', disabled: true }]}
        >
            <div className="card p-10">
                <Tab
                    tabItems={TABS}
                    value={selected}
                    handleClick={(idx: number) => setSelected(TABS[idx].value)}
                />

                <div className="text-center">{`Selected tab: ${selected}`}</div>
            </div>
        </MainLayout>
    );
};

export default TabPage;
