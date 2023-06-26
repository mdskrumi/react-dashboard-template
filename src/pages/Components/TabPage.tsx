import Tab from 'components/Tab';
import MainLayout from 'layout/MainLayout';
import { useState } from 'react';

const TabPage = () => {
    const [selected, setSelected] = useState('1');

    return (
        <MainLayout
            title="Tab"
            breadcrumbs={[{ title: 'Tab', link: '#', disabled: true }]}
        >
            <div className="card p-10 w-fit">
                <Tab
                    tabItems={[
                        { label: 'Tab 1', value: '1' },
                        { label: 'Tab 2', value: '2' },
                        { label: 'Tab 3', value: '3' },
                        { label: 'Tab 4', value: '4' },
                    ]}
                    value={selected}
                    handleClick={(val: string) => setSelected(val)}
                />

                <div className="text-center">{`Selected tab: ${selected}`}</div>
            </div>
        </MainLayout>
    );
};

export default TabPage;
