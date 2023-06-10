import { useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { clearUser } from 'store/reducers/user';

export interface SideBarItemInterface {
    id: string;
    title: string;
    icon: Function;
    type: 'expandable' | 'url';
    url?: string;
    subMenus?: SideBarItemInterface[];
    children?: React.ReactNode;
}

const SideBarItem: React.FC<SideBarItemInterface> = ({
    id,
    title,
    type,
    icon,
    url,
    subMenus,
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
                className="h-[52px] cursor-pointer flex items-center pr-2 pl-5 w-72"
                onClick={(e) => {
                    e.stopPropagation();

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
                <div className="mr-4">{icon()}</div>
                <div
                    className={`${isOpen ? 'w-full' : 'w-0'} ${
                        location.pathname === url && id !== 'logout'
                            ? 'bg-main'
                            : ''
                    }`}
                >
                    <div className="flex justify-between items-center w-full">
                        {isOpen && (
                            <span className="animate-fade-in">{title}</span>
                        )}
                        {type === 'expandable' ? (
                            <img
                                style={{
                                    transform: isExpanded
                                        ? 'rotate(180deg)'
                                        : '',
                                }}
                                className="w-7"
                                src={'DropdownIcon'}
                            />
                        ) : (
                            ''
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
                        <SideBarItem {...sub} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SideBarItem;
