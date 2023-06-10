import { FaRegHandPointRight } from 'react-icons/fa';
// Redux
import { useAppSelector } from 'store/hooks';

// Components
import MenuItem, { MenuItemInterface } from './MenuItem';

const Sidebar: React.FC = () => {
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);

    const menus: MenuItemInterface[] = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            url: '/',
            icon: 'material-symbols:dashboard',
            type: 'url',
            subMenus: [],
        },
        {
            id: 'sample',
            title: 'Sample Pages',
            icon: 'UserIcon',
            type: 'expandable',
            subMenus: [
                {
                    id: 'sample-page-one',
                    title: 'Sample Page One',
                    url: '/sample-one',
                    icon: 'UserSettingIcon',
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-two',
                    title: 'Sample Page Two',
                    url: '/sample-two',
                    icon: 'ClientManagementIcon',
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-three',
                    title: 'Sample Page Three',
                    url: '/sample-three',
                    icon: 'UserSettingIcon',
                    type: 'url',
                    subMenus: [],
                },
            ],
        },
        {
            id: 'typography',
            title: 'Typography',
            url: '/typography',
            icon: 'TypographyIcon',
            type: 'url',
            subMenus: [],
        },
        {
            id: 'components',
            title: 'Components',
            icon: 'ReactIcon',
            type: 'expandable',
            subMenus: [
                {
                    id: 'button-page',
                    title: 'Buttons',
                    url: '/button-page',
                    icon: 'ButtonIcon',
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'filter-page',
                    title: 'Filters',
                    url: '/filter-page',
                    icon: 'FilterIcon',
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'loading-page',
                    title: 'Loader',
                    url: '/loading-page',
                    icon: 'LoadingIcon',
                    type: 'url',
                    subMenus: [],
                },
            ],
        },
        {
            id: 'logout',
            title: 'Log Out',
            url: '/',
            icon: 'LogoutIcon',
            type: 'url',
            subMenus: [],
        },
    ];

    return (
        <div
            className={`fixed bottom-0 ${
                isOpen ? 'w-72' : 'w-16'
            } h-[calc(100vh-2.5rem)] bg-main_dark duration-300 overflow-x-hidden`}
        >
            <FaRegHandPointRight size="4rem" color="black" />
            <div className="pt-2 pb-4 text-sm">
                {menus.map((item) => (
                    <MenuItem {...item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
