import { useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { clearUser } from 'store/reducers/user';
import { setSidebarOpen } from 'store/reducers/util';

// Icon
import { BsArrowRightShort } from 'react-icons/bs';

export interface SideBarItemInterface {
    id: string;
    title: string;
    icon: Function;
    type: 'expandable' | 'url';
    url?: string;
    subMenus?: SideBarItemInterface[];
    children?: React.ReactNode;
    isMobile?: boolean;
}

const SideBarItem: React.FC<SideBarItemInterface> = ({
    id,
    title,
    type,
    icon,
    url,
    subMenus,
    isMobile,
}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const [isExpanded, setIsExpanded] = useState(false);

    console.log(isMobile);

    useEffect(() => {
        let shouldClose = true;
        for (let i = 0; subMenus && i < subMenus!.length; i++) {
            if (location.pathname.search(subMenus![i]!.url!) !== -1) {
                shouldClose = false;
            }
            if (subMenus![i].type === 'expandable') {
                for (let j = 0; j < subMenus![i].subMenus!.length; j++) {
                    if (
                        location.pathname.search(
                            subMenus![i].subMenus![j].url!
                        ) !== -1
                    ) {
                        shouldClose = false;
                    }
                }
            }
        }
        if (shouldClose) {
            setIsExpanded(false);
        }
    }, [url, location.pathname]);

    return (
        <>
            <div
                className="h-[52px] cursor-pointer flex items-center w-72 my-1"
                onClick={(e) => {
                    e.stopPropagation();

                    if (isMobile) {
                        dispatch(setSidebarOpen(!isOpen));
                    }

                    if (id === 'logout') {
                        // TODO: clear user data
                        localStorage.clear();
                        dispatch(clearUser());
                    }
                    if (type === 'expandable') {
                        setIsExpanded(!isExpanded);
                    } else {
                        navigate(url!);
                    }
                }}
            >
                <div className="h-[52px] content-center">
                    <div className="pl-7 mr-6">{icon()}</div>
                    <p
                        className={`mt-1 w-full caption text-center ${
                            isOpen
                                ? 'animate-fade-out hidden'
                                : 'animate-fade-in visible'
                        }`}
                    >
                        {title}
                    </p>
                </div>
                <div
                    className={`h-[52px] ${isOpen ? 'w-full' : 'w-0'} ${
                        location.pathname === url && id !== 'logout'
                            ? 'bg-main'
                            : ''
                    }`}
                >
                    <div className="flex justify-between items-center w-full">
                        {isOpen && (
                            <>
                                <span className="animate-fade-in">{title}</span>
                                {type === 'expandable' && (
                                    <BsArrowRightShort
                                        className="mr-4 duration-300"
                                        style={{
                                            transform: isExpanded
                                                ? 'rotate(90deg)'
                                                : '',
                                        }}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`overflow-hidden duration-500`}
                style={{
                    maxHeight: !isExpanded
                        ? 0
                        : 57 * import.meta.env.DASHBOARD_MAX_SUB_MENU,
                }}
            >
                {subMenus?.map((sub) => (
                    <div key={sub.id}>
                        <SideBarItem {...sub} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SideBarItem;
