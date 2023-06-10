import { FaRegHandPointRight } from 'react-icons/fa';

// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setSidebarOpen } from 'store/reducers/util';

// Icons
import Logo from '/logo.svg';

// Components
import SideBarItem, { SideBarItemInterface } from 'layout/Sidebar/SideBarItem';

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);

    const menus: SideBarItemInterface[] = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            url: '/',
            icon: () => (
                <FaRegHandPointRight size={'1.5em'} className="text-primary" />
            ),
            type: 'url',
            subMenus: [],
        },
        {
            id: 'sample',
            title: 'Sample Pages',
            icon: () => (
                <FaRegHandPointRight size={'1.5em'} className="text-primary" />
            ),
            type: 'expandable',
            subMenus: [
                {
                    id: 'sample-page-one',
                    title: 'Sample Page One',
                    url: '/sample-one',
                    icon: () => (
                        <FaRegHandPointRight
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
                        <FaRegHandPointRight
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
                        <FaRegHandPointRight
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
                <FaRegHandPointRight size={'1.5em'} className="text-primary" />
            ),
            type: 'url',
            subMenus: [],
        },
        {
            id: 'components',
            title: 'Components',
            icon: () => (
                <FaRegHandPointRight size={'1.5em'} className="text-primary" />
            ),
            type: 'expandable',
            subMenus: [
                {
                    id: 'button-page',
                    title: 'Buttons',
                    url: '/button-page',
                    icon: () => (
                        <FaRegHandPointRight
                            size={'1.5em'}
                            className="text-primary"
                        />
                    ),
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'filter-page',
                    title: 'Filters',
                    url: '/filter-page',
                    icon: () => (
                        <FaRegHandPointRight
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
                        <FaRegHandPointRight
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
            icon: () => (
                <FaRegHandPointRight size={'1.5em'} className="text-primary" />
            ),
            type: 'url',
            subMenus: [],
        },
    ];

    return (
        <div
            className={`fixed top-0 bottom-0 ${
                isOpen ? 'w-72' : 'w-16'
            } bg-main_dark duration-300 overflow-x-hidden bg-surface dark:bg-surface-dark border-r-[1px]`}
        >
            <div
                className="pl-2 flex justify-start items-center cursor-pointer h-16"
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
            <div>
                {menus.map((item) => (
                    <SideBarItem {...item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
