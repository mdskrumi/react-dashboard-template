import DropDownButton from 'components/Elements/DropDownButton';
import MainLayout from 'layout/MainLayout';

import { MdOutlinePendingActions } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';

const DropDownPage = () => {
    return (
        <MainLayout
            title="DropDown"
            breadcrumbs={[{ title: 'DropDown', link: '#', disabled: true }]}
        >
            <div className="grid grid-cols-1 gap-4">
                <div className="flex card w-fit p-10 gap-4">
                    <DropDownButton
                        title="Button"
                        variant="primary"
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                        ]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="secondary"
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                        ]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="ghost"
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                        ]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="danger"
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                            },
                        ]}
                    />
                </div>

                <div className="flex card w-fit p-10 gap-4">
                    <DropDownButton
                        title="Button"
                        variant="primary"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                        ]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="secondary"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                        ]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="ghost"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                        ]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="danger"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[
                            {
                                title: 'Action 1',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                            {
                                title: 'Action 2',
                                handleClick: () => {},
                                renderIcon: () => <GiConfirmed />,
                                iconFirst: true,
                            },
                        ]}
                    />
                </div>
                <div className="flex card w-fit p-10 gap-4">
                    <DropDownButton
                        title="Button"
                        variant="primary"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                    />
                    <DropDownButton
                        title="Button"
                        variant="secondary"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                    />
                    <DropDownButton
                        title="Button"
                        variant="ghost"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                    />
                    <DropDownButton
                        title="Button"
                        variant="danger"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                    />
                </div>
                <div className="flex card w-fit p-10 gap-4">
                    <DropDownButton
                        title="Button"
                        variant="primary"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                        disabled
                    />
                    <DropDownButton
                        title="Button"
                        variant="secondary"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                        disabled
                    />
                    <DropDownButton
                        title="Button"
                        variant="ghost"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                        disabled
                    />
                    <DropDownButton
                        title="Button"
                        variant="danger"
                        renderIcon={() => <MdOutlinePendingActions />}
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                        iconFirst={false}
                        disabled
                    />
                </div>

                <div className="flex card w-fit p-10 gap-4">
                    <DropDownButton
                        title="Button"
                        variant="primary"
                        disabled
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="secondary"
                        disabled
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="ghost"
                        disabled
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                    />
                    <DropDownButton
                        title="Button"
                        variant="danger"
                        disabled
                        align="right"
                        itemList={[{ title: 'Action ', handleClick: () => {} }]}
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default DropDownPage;
