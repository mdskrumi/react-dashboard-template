import Button from 'components/Button';
import MainLayout from 'layout/MainLayout';

import { GiConfirmed } from 'react-icons/gi';

const ButtonPage = () => {
    return (
        <MainLayout
            title="Button"
            breadcrumbs={[{ title: 'Button', link: '#', disabled: true }]}
        >
            <div className="grid grid-cols-1 gap-4">
                <div className="flex card w-fit p-10 gap-4">
                    <Button title="Button" variant="primary" />
                    <Button title="Button" variant="secondary" />
                    <Button title="Button" variant="ghost" />
                    <Button title="Button" variant="danger" />
                </div>

                <div className="flex card w-fit p-10 gap-4">
                    <Button
                        title="Button"
                        variant="primary"
                        renderIcon={() => <GiConfirmed />}
                    />
                    <Button
                        title="Button"
                        variant="secondary"
                        renderIcon={() => <GiConfirmed />}
                    />
                    <Button
                        title="Button"
                        variant="ghost"
                        renderIcon={() => <GiConfirmed />}
                    />
                    <Button
                        title="Button"
                        variant="danger"
                        renderIcon={() => <GiConfirmed />}
                    />
                </div>
                <div className="flex card w-fit p-10 gap-4">
                    <Button
                        title="Button"
                        variant="primary"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                    />
                    <Button
                        title="Button"
                        variant="secondary"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                    />
                    <Button
                        title="Button"
                        variant="ghost"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                    />
                    <Button
                        title="Button"
                        variant="danger"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                    />
                </div>
                <div className="flex card w-fit p-10 gap-4">
                    <Button
                        title="Button"
                        variant="primary"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                        disabled
                    />
                    <Button
                        title="Button"
                        variant="secondary"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                        disabled
                    />
                    <Button
                        title="Button"
                        variant="ghost"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                        disabled
                    />
                    <Button
                        title="Button"
                        variant="danger"
                        renderIcon={() => <GiConfirmed />}
                        iconFirst={false}
                        disabled
                    />
                </div>

                <div className="flex card w-fit p-10 gap-4">
                    <Button title="Button" variant="primary" disabled />
                    <Button title="Button" variant="secondary" disabled />
                    <Button title="Button" variant="ghost" disabled />
                    <Button title="Button" variant="danger" disabled />
                </div>
            </div>
        </MainLayout>
    );
};

export default ButtonPage;
