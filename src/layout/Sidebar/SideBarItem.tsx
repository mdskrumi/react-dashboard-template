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
    isSub?: boolean;
}

const SideBarItem: React.FC<SideBarItemInterface> = ({
    id,
    title,
    type,
    icon,
    url,
    subMenus,
    isMobile,
    isSub = false,
}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const [isExpanded, setIsExpanded] = useState(false);

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
                className={`${
                    isOpen ? 'py-2' : 'py-1'
                } cursor-pointer flex items-center ${
                    isSub
                        ? 'bg-ui dark:bg-ui-dark border-l-4 border-primary'
                        : ''
                } ${
                    location.pathname === url &&
                    id !== 'logout' &&
                    'text-primary font-semibold'
                }`}
                onClick={(e) => {
                    e.stopPropagation();

                    if (isMobile && type !== 'expandable') {
                        dispatch(setSidebarOpen(!isOpen));
                    }

                    if (id === 'logout') {
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
                <div className="py-1 content-center">
                    <div className="pl-7 mr-6">{icon()}</div>
                    <p
                        className={`mt-1 w-full caption text-center ${
                            isOpen
                                ? 'animate-fade-out hidden'
                                : 'animate-fade-in visible'
                        } hover:text-primary hover:font-semibold`}
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
                                <span className="animate-fade-in hover:text-primary hover:font-semibold">
                                    {title}
                                </span>
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
                style={{ maxHeight: !isExpanded ? 0 : 57 * 7 }}
            >
                {subMenus?.map((sub) => (
                    <div key={sub.id}>
                        <SideBarItem
                            {...sub}
                            isMobile={isMobile}
                            key={sub.id}
                            isSub
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SideBarItem;
