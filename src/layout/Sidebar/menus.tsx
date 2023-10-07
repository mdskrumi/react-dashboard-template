// Icons
import { TbPackages, TbSquareNumber1 } from 'react-icons/tb';
import { CgWebsite, CgLogOut, CgSpinner } from 'react-icons/cg';
import { LuPackageCheck, LuSettings } from 'react-icons/lu';
import { HiBadgeCheck } from 'react-icons/hi';
import { RxButton, RxDropdownMenu } from 'react-icons/rx';
import { FaToggleOn } from 'react-icons/fa';

export interface SideBarItemInterface {
    id: string;
    title: string;
    icon: Function;
    url: string;
    subMenus?: SideBarItemInterface[];
    level: number;
}

export const menus: SideBarItemInterface[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        url: '/',
        icon: () => <CgWebsite size={'1.5em'} className="text-primary" />,
        level: 1,
        subMenus: [],
    },
    {
        id: 'components',
        title: 'Components',
        url: '#',
        icon: () => <TbPackages size={'1.5em'} className="text-primary" />,
        level: 1,
        subMenus: [
            {
                id: 'accordion',
                title: 'Accordion',
                url: '/accordion',
                icon: () => (
                    <LuPackageCheck size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'alert',
                title: 'Alert',
                url: '/alert',
                icon: () => (
                    <LuPackageCheck size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'badge',
                title: 'Badge',
                url: '/badge',
                icon: () => (
                    <HiBadgeCheck size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'button',
                title: 'Button',
                url: '/button',
                icon: () => (
                    <RxButton size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'dropdown',
                title: 'Dropdown',
                url: '/dropdown',
                icon: () => (
                    <RxDropdownMenu size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'iconActionButton',
                title: 'Icon Action Button',
                url: '/icon-action-button',
                icon: () => (
                    <RxButton size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'pagination',
                title: 'Pagination',
                url: '/pagination',
                icon: () => (
                    <TbSquareNumber1 size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'spinner',
                title: 'Spinner',
                url: '/spinner',
                icon: () => (
                    <CgSpinner size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'tab',
                title: 'Tab',
                url: '/tab',
                icon: () => (
                    <FaToggleOn size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
        ],
    },

    {
        id: 'settings',
        title: 'Settings',
        url: '/settings',
        icon: () => <LuSettings size={'1.5em'} className="text-primary" />,
        level: 2,
        subMenus: [],
    },
    {
        id: 'logout',
        title: 'Logout',
        url: '/',
        icon: () => <CgLogOut size={'1.5em'} className="text-primary" />,
        level: 2,
        subMenus: [],
    },
];
