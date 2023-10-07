import { SideBarItemInterface } from 'layout/Sidebar/menus';

export const hasMatchingSubMenu = (
    item: SideBarItemInterface,
    targetRouteSegment: string
): boolean => {
    if (!item.subMenus) {
        return item.url === targetRouteSegment;
    }

    if (item.url === targetRouteSegment) {
        return true;
    }

    for (const submenu of item.subMenus) {
        if (hasMatchingSubMenu(submenu, targetRouteSegment)) {
            return true;
        }
    }

    return false;
};

export const countSubmenus = (item: SideBarItemInterface): number => {
    if (!item.subMenus) {
        return 0;
    }
    let count = item.subMenus.length;
    for (const submenu of item.subMenus) {
        count += countSubmenus(submenu);
    }
    return count;
};
