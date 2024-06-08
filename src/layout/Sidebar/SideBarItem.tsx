import { useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { clearUser } from 'store/reducers/user';

import { setSidebarOpen } from 'store/reducers/util';

import { SideBarItemInterface } from './menus';

// Icon
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { countSubmenus, hasMatchingSubMenu } from 'utils/sidebar';
import { useTranslation } from 'react-i18next';

interface Props {
    menuItem: SideBarItemInterface;
    isMobile?: boolean;
}

const SideBarItem: React.FC<Props> = ({ menuItem, isMobile }) => {
    const { id, icon, url, subMenus, level } = menuItem;

    const { t } = useTranslation();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const [isExpanded, setIsExpanded] = useState(
        hasMatchingSubMenu(menuItem, location.pathname)
    );

    useEffect(() => {
        setIsExpanded(hasMatchingSubMenu(menuItem, location.pathname));
    }, [location.pathname]);

    return (
        <>
            <div
                className={`${
                    isOpen ? 'py-3' : 'py-2'
                } flex cursor-pointer items-center font-medium ${
                    level === 2
                        ? 'border-l-4 pl-4'
                        : level === 3
                          ? 'border-l-4 pl-4'
                          : ''
                } ${
                    location.pathname === url &&
                    id !== 'logout' &&
                    'text-light-primary900 dark:text-dark-primary900'
                } hover:text-light-primary900 hover:dark:text-dark-primary900`}
                onClick={(e) => {
                    e.stopPropagation();

                    if (isMobile && !subMenus) {
                        dispatch(setSidebarOpen(!isOpen));
                    }

                    if (id === 'logout') {
                        localStorage.clear();
                        dispatch(clearUser());
                    }
                    if (subMenus && subMenus.length > 0) {
                        setIsExpanded(!isExpanded);
                    } else {
                        navigate(url!);
                    }
                }}
            >
                <div className="content-center">
                    <div className="mr-6 pl-7">{icon()}</div>
                    <p
                        className={`w-full text-center text-xs ${
                            isOpen
                                ? 'hidden animate-fade-out'
                                : 'visible animate-fade-in'
                        }`}
                    >
                        {t(id)}
                    </p>
                </div>
                <div className={`${isOpen ? 'w-full' : 'w-0'}`}>
                    <div className="flex w-full items-center justify-between">
                        {isOpen && (
                            <>
                                <p className="animate-fade-in"> {t(id)}</p>
                                {subMenus && subMenus.length > 0 && (
                                    <div className="pr-6">
                                        {isExpanded ? (
                                            <HiOutlineMinus />
                                        ) : (
                                            <HiOutlinePlus />
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`overflow-hidden duration-500 ${
                    isExpanded ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
                style={{
                    maxHeight: !isExpanded ? 0 : 72 * countSubmenus(menuItem),
                }}
            >
                {subMenus?.map((sub) => (
                    <div key={sub.id}>
                        <SideBarItem
                            key={sub.id}
                            menuItem={sub}
                            isMobile={isMobile}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SideBarItem;
