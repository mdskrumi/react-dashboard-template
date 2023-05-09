// Redux
import { useAppSelector } from 'store/hooks';

// Components
import MenuItem, { MenuItemInterface } from './MenuItem';

// Icons
import DashboardIcon from 'assets/dashboard.svg';
import UserIcon from 'assets/user.svg';
import UserSettingIcon from 'assets/user-settings.svg';
import ClientManagementIcon from 'assets/client-management.svg';
import TypographyIcon from 'assets/typography.svg';
import ReactIcon from 'assets/react.svg';
import ButtonIcon from 'assets/buttons.svg';
import LogoutIcon from 'assets/logout.svg';

const Sidebar: React.FC = () => {
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);

    const menus: MenuItemInterface[] = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            url: '/',
            icon: DashboardIcon,
            type: 'url',
            subMenus: [],
        },
        {
            id: 'sample',
            title: 'Sample Pages',
            icon: UserIcon,
            type: 'expandable',
            subMenus: [
                {
                    id: 'sample-page-one',
                    title: 'Sample Page One',
                    url: '/sample-one',
                    icon: UserSettingIcon,
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-two',
                    title: 'Sample Page Two',
                    url: '/sample-two',
                    icon: ClientManagementIcon,
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-three',
                    title: 'Sample Page Three',
                    url: '/sample-three',
                    icon: UserSettingIcon,
                    type: 'url',
                    subMenus: [],
                },
            ],
        },
        {
            id: 'typography',
            title: 'Typography',
            url: '/typography',
            icon: TypographyIcon,
            type: 'url',
            subMenus: [],
        },
        {
            id: 'components',
            title: 'Components',
            icon: ReactIcon,
            type: 'expandable',
            subMenus: [
                {
                    id: 'button-page',
                    title: 'Buttons',
                    url: '/button-page',
                    icon: ButtonIcon,
                    type: 'url',
                    subMenus: [],
                },
            ],
        },
        {
            id: 'logout',
            title: 'Log Out',
            url: '/',
            icon: LogoutIcon,
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
            <ul className="pt-2 pb-4 text-sm">
                {menus.map((item) => (
                    <MenuItem {...item} key={item.id} />
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
