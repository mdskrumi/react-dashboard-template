import IconActionButton from 'components/Elements/IconActionButton';
import MainLayout from 'layout/MainLayout';

import { GiConfirmed } from 'react-icons/gi';

const IconActionButtonPage = () => {
    return (
        <MainLayout
            title="IconActionButton"
            breadcrumbs={[
                { title: 'IconActionButton', link: '#', disabled: true },
            ]}
        >
            <div className="grid grid-cols-1 gap-4">
                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Basic
                    </div>
                    <div className="flex gap-4">
                        <IconActionButton
                            title="Action on icon"
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                    </div>
                </div>
                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Icon Right
                    </div>
                    <div className="flex gap-4">
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                        />
                    </div>
                </div>

                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Icon Left
                    </div>
                    <div className="flex gap-4">
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                            iconFirst={false}
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                            iconFirst={false}
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                            iconFirst={false}
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                            iconFirst={false}
                        />
                    </div>
                </div>

                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Icon with Disabled
                    </div>
                    <div className="flex gap-4">
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                            iconFirst={false}
                            disabled
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                            iconFirst={false}
                            disabled
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
                            iconFirst={false}
                            disabled
                        />
                        <IconActionButton
                            title="Action on icon"
                            renderIcon={() => <GiConfirmed />}
                            onClick={() => {}}
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
                        <IconActionButton
                            title="Action on icon"
                            disabled
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            disabled
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            disabled
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            disabled
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                    </div>
                </div>

                <div className="card pb-6 px-10 pt-3">
                    <div className="text-center font-bold text-xl mb-5">
                        Loading
                    </div>
                    <div className="flex gap-4">
                        <IconActionButton
                            title="Action on icon"
                            loading
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            loading
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            loading
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                        <IconActionButton
                            title="Action on icon"
                            loading
                            onClick={() => {}}
                            renderIcon={() => <GiConfirmed />}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default IconActionButtonPage;
