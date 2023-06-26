import Toggle from 'components/Toggle';
import MainLayout from 'layout/MainLayout';
import { useState } from 'react';

const TogglePage = () => {
    const [selected, setSelected] = useState('1');

    return (
        <MainLayout
            title="Toggle"
            breadcrumbs={[{ title: 'Toggle', link: '#', disabled: true }]}
        >
            <Toggle
                toggleItems={[
                    { label: 'Tab 1', value: '1' },
                    { label: 'Tab 2', value: '2' },
                    { label: 'Tab 3', value: '3' },
                    { label: 'Tab 4', value: '4' },
                ]}
                value={selected}
                handleClick={(val: string) => setSelected(val)}
            />

            <div className="text-center">{`Selected tab: ${selected}`}</div>
        </MainLayout>
    );
};

export default TogglePage;
