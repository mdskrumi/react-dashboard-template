// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setSidebarOpen } from 'store/reducers/util';

// Icons
import Logo from '/logo.svg';

// Components
import SideBarItem, { SideBarItemInterface } from 'layout/Sidebar/SideBarItem';

// Icons
import { TbPackages } from 'react-icons/tb';
import { CgWebsite, CgComponents, CgLogOut } from 'react-icons/cg';
import { LuPackageCheck } from 'react-icons/lu';
import { TbTypography } from 'react-icons/tb';
import { SiBigbluebutton } from 'react-icons/si';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);

    const menus: SideBarItemInterface[] = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            url: '/',
            icon: () => <CgWebsite size={'1.5em'} className="text-primary" />,
            type: 'url',
            subMenus: [],
        },
        {
            id: 'sample',
            title: 'Sample Pages',
            icon: () => <TbPackages size={'1.5em'} className="text-primary" />,
            type: 'expandable',
            subMenus: [
                {
                    id: 'sample-page-one',
                    title: 'Sample Page One',
                    url: '/sample-one',
                    icon: () => (
                        <LuPackageCheck
                            size={'1.5em'}
                            className="text-primary"
                        />
                    ),
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-two',
                    title: 'Sample Page Two',
                    url: '/sample-two',
                    icon: () => (
                        <LuPackageCheck
                            size={'1.5em'}
                            className="text-primary"
                        />
                    ),
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-three',
                    title: 'Sample Page Three',
                    url: '/sample-three',
                    icon: () => (
                        <LuPackageCheck
                            size={'1.5em'}
                            className="text-primary"
                        />
                    ),
                    type: 'url',
                    subMenus: [],
                },
            ],
        },
        {
            id: 'typography',
            title: 'Typography',
            url: '/typography',
            icon: () => (
                <TbTypography size={'1.5em'} className="text-primary" />
            ),
            type: 'url',
            subMenus: [],
        },
        {
            id: 'components',
            title: 'Components',
            icon: () => (
                <CgComponents size={'1.5em'} className="text-primary" />
            ),
            type: 'expandable',
            subMenus: [
                {
                    id: 'button-page',
                    title: 'Buttons',
                    url: '/button-page',
                    icon: () => (
                        <SiBigbluebutton
                            size={'1.5em'}
                            className="text-primary"
                        />
                    ),
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'loading-page',
                    title: 'Loader',
                    url: '/loading-page',
                    icon: () => (
                        <AiOutlineLoading3Quarters
                            size={'1.5em'}
                            className="text-primary"
                        />
                    ),
                    type: 'url',
                    subMenus: [],
                },
            ],
        },
        {
            id: 'logout',
            title: 'Log Out',
            url: '/',
            icon: () => <CgLogOut size={'1.5em'} className="text-primary" />,
            type: 'url',
            subMenus: [],
        },
    ];

    return (
        <>
            <div
                className={`hidden lg:block fixed top-0 bottom-0 ${
                    isOpen ? 'w-72' : 'w-20'
                } duration-300 overflow-x-hidden border-r-[1px] bg-surface dark:bg-surface-dark border-line dark:border-line-dark`}
            >
                <div
                    className="pl-4 flex justify-start items-center cursor-pointer h-16 mb-6"
                    onClick={() => dispatch(setSidebarOpen(!isOpen))}
                >
                    <img className="w-12 mr-4" src={Logo} />
                    {isOpen && (
                        <div className="animate-fade-in">
                            <h4>Dashboard</h4>
                            <p className="caption">Simple and Fast</p>
                        </div>
                    )}
                </div>
                {menus.map((item) => (
                    <SideBarItem {...item} key={item.id} />
                ))}
            </div>
            <div
                className={`block lg:hidden overflow-hidden overflow-y-auto fixed top-0 bottom-0 left-0 bg-[#00000090] ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
            >
                <div
                    className={`relative ${
                        isOpen ? 'max-w-xs' : 'max-w-0'
                    }  bg-surface dark:bg-surface-dark min-h-[100vh] duration-300`}
                >
                    <div
                        className="sticky bg-surface dark:bg-surface-dark top-0 pl-4 flex justify-start items-center cursor-pointer h-16 mb-6"
                        onClick={() => dispatch(setSidebarOpen(!isOpen))}
                    >
                        <img className="w-12 mr-4" src={Logo} />
                        <div className="animate-fade-in">
                            <h4>Dashboard</h4>
                            <p className="caption">Simple and Fast</p>
                        </div>
                    </div>
                    <div>
                        {menus.map((item) => (
                            <SideBarItem {...item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
