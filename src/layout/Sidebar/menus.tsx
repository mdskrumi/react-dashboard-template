// Icons
import { TbPackages, TbSquareNumber1 } from 'react-icons/tb';
import { CgWebsite, CgLogOut, CgSpinner } from 'react-icons/cg';
import { LuPackageCheck, LuSettings } from 'react-icons/lu';
import { HiBadgeCheck } from 'react-icons/hi';
import { RxButton, RxDropdownMenu } from 'react-icons/rx';
import { FaToggleOn } from 'react-icons/fa';

export interface SideBarItemInterface {
    id: string;
    icon: Function;
    url: string;
    subMenus?: SideBarItemInterface[];
    level: number;
}

export const menus: SideBarItemInterface[] = [
    {
        id: 'dashboard',
        url: '/',
        icon: () => <CgWebsite size={'1.5em'} className="text-primary" />,
        level: 1,
        subMenus: [],
    },
    {
        id: 'components',
        url: '#',
        icon: () => <TbPackages size={'1.5em'} className="text-primary" />,
        level: 1,
        subMenus: [
            {
                id: 'accordion',
                url: '/accordion',
                icon: () => (
                    <LuPackageCheck size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'alert',
                url: '/alert',
                icon: () => (
                    <LuPackageCheck size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'badge',
                url: '/badge',
                icon: () => (
                    <HiBadgeCheck size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'button',
                url: '/button',
                icon: () => (
                    <RxButton size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'dropdown',
                url: '/dropdown',
                icon: () => (
                    <RxDropdownMenu size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'iconActionButton',
                url: '/icon-action-button',
                icon: () => (
                    <RxButton size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'pagination',

                url: '/pagination',
                icon: () => (
                    <TbSquareNumber1 size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'spinner',

                url: '/spinner',
                icon: () => (
                    <CgSpinner size={'1.5em'} className="text-primary" />
                ),
                level: 2,
                subMenus: [],
            },
            {
                id: 'tab',
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
        url: '/settings',
        icon: () => <LuSettings size={'1.5em'} className="text-primary" />,
        level: 1,
        subMenus: [],
    },
    {
        id: 'logout',
        url: '/',
        icon: () => <CgLogOut size={'1.5em'} className="text-primary" />,
        level: 1,
        subMenus: [],
    },
];
