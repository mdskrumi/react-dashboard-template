// Slandered libraries
import { useEffect } from 'react';

// Redux
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setSidebarOpen } from 'store/reducers/util';

// Components
import MenuItem, { MenuItemInterface } from './MenuItem';

// Icons
import DashboardImage from 'assets/dashboard.svg';
import UserImage from 'assets/user.svg';
import UserSettingImage from 'assets/user-settings.svg';
import LogoutImage from 'assets/logout.svg';
import ClientManagementImage from 'assets/client-management.svg';

const Sidebar: React.FC = () => {
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const mobileSize = 767;
        if(window.innerWidth <= mobileSize) {
            dispatch(setSidebarOpen(false))
        }
        const handleResize = () => {
            if(window.innerWidth <= mobileSize) {
                dispatch(setSidebarOpen(false))
            } else {
                dispatch(setSidebarOpen(true))
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const menus: MenuItemInterface[] = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            url: '/',
            image: DashboardImage,
            type: 'url',
            subMenus: [],
        },

        {
            id: 'sample',
            title: 'Sample Pages',
            image: UserImage,
            type: 'expandable',
            subMenus: [
                {
                    id: 'sample-page-one',
                    title: 'Sample Page One',
                    url: '/sample-one',
                    image: UserSettingImage,
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-two',
                    title: 'Sample Page Two',
                    url: '/sample-two',
                    image: ClientManagementImage,
                    type: 'url',
                    subMenus: [],
                },
                {
                    id: 'sample-page-three',
                    title: 'Sample Page Three',
                    url: '/sample-three',
                    image: UserSettingImage,
                    type: 'url',
                    subMenus: [],
                },
            ],
        },
        {
            id: 'logout',
            title: 'Log Out',
            url: '/',
            image: LogoutImage,
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
