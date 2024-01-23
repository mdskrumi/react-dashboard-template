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

interface Props {
    menuItem: SideBarItemInterface;
    isMobile?: boolean;
}

const SideBarItem: React.FC<Props> = ({ menuItem, isMobile }) => {
    const { id, title, icon, url, subMenus, level } = menuItem;

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
                } cursor-pointer flex items-center ${
                    level === 2
                        ? 'bg-ui dark:bg-ui-dark border-l-4 border-primary'
                        : level === 3
                        ? 'bg-ui-variant dark:bg-ui-dark-variant border-l-4 border-primary-variant'
                        : ''
                } ${
                    location.pathname === url &&
                    id !== 'logout' &&
                    'text-primary'
                } hover:text-primary`}
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
                    <div className="pl-7 mr-6">{icon()}</div>
                    <p
                        className={`w-full text-center text-xs ${
                            isOpen
                                ? 'animate-fade-out hidden'
                                : 'animate-fade-in visible'
                        }`}
                    >
                        {title}
                    </p>
                </div>
                <div
                    className={`${isOpen ? 'w-full' : 'w-0'} ${
                        location.pathname === url && id !== 'logout'
                            ? 'bg-main'
                            : ''
                    }`}
                >
                    <div className="flex justify-between items-center w-full">
                        {isOpen && (
                            <>
                                <p className="animate-fade-in">{title}</p>
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
