import Button from 'components/Elements/Button';
import MainLayout from 'layout/MainLayout';

import { GiConfirmed } from 'react-icons/gi';

const ButtonPage = () => {
    return (
        <MainLayout
            title="Button"
            breadcrumbs={[{ title: 'Button', link: '#', disabled: true }]}
        >
            <div className="grid grid-cols-1 gap-4">
                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Basic
                    </div>
                    <div className="flex gap-4">
                        <Button title="Button" variant="primary" />
                        <Button title="Button" variant="secondary" />
                        <Button title="Button" variant="ghost" />
                        <Button title="Button" variant="danger" />
                    </div>
                </div>
                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Icon Right
                    </div>
                    <div className="flex gap-4">
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
                </div>

                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Icon Left
                    </div>
                    <div className="flex gap-4">
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
                </div>

                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Icon with Disabled
                    </div>
                    <div className="flex gap-4">
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
                </div>

                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Disabled
                    </div>
                    <div className="flex gap-4">
                        <Button title="Button" variant="primary" disabled />
                        <Button title="Button" variant="secondary" disabled />
                        <Button title="Button" variant="ghost" disabled />
                        <Button title="Button" variant="danger" disabled />
                    </div>
                </div>

                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Loading
                    </div>
                    <div className="flex gap-4">
                        <Button title="Button" variant="primary" loading />
                        <Button title="Button" variant="secondary" loading />
                        <Button title="Button" variant="ghost" loading />
                        <Button title="Button" variant="danger" loading />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ButtonPage;
