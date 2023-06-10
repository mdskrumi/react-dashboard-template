import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { clearUser } from 'store/reducers/user';

// Icons
import DropdownIcon from 'assets/dropdown.svg';

export interface MenuItemInterface {
    id: string;
    title: string;
    icon: string;
    type: 'expandable' | 'url';
    url?: string;
    subMenus?: MenuItemInterface[];
    children?: React.ReactNode;
    isChild?: boolean;
    level?: number;
}

const getColorForLevel = (level = 0) => {
    switch (level) {
        case 0:
            return '#98c9eb';
        case 1:
            return '#5ca1d1';
        case 2:
            return '#2775ab';
        default:
            return '#98c9eb';
    }
};

const MenuItem: React.FC<MenuItemInterface> = ({
    id,
    title,
    type,
    icon,
    url,
    subMenus,
    isChild = false,
    level = 0,
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
                <div
                    className={`h-[52px] cursor-pointer flex items-center pr-2 pl-5 space-x-3 hover:bg-main ${
                        isOpen ? 'w-72' : 'w-16'
                    } ${
                        location.pathname === url && id !== 'logout'
                            ? 'bg-main'
                            : ''
                    }`}
                    style={{
                        borderLeft:
                            isExpanded || isChild
                                ? `2px solid ${getColorForLevel(level)}`
                                : 'none',
                    }}
                >
                    <img className="w-5 h-5 mr-4" src={icon} alt={title} />
                    <div className="flex justify-between items-center w-full">
                        {isOpen && <span>{title}</span>}
                        {type === 'expandable' ? (
                            <img
                                style={{
                                    transform: isExpanded
                                        ? 'rotate(180deg)'
                                        : '',
                                }}
                                className="w-7"
                                src={DropdownIcon}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            {id !== 'logout' && (
                <hr
                    className="border-main
            "
                />
            )}
            <div
                className={`overflow-hidden duration-500`}
                style={{ maxHeight: !isExpanded ? 0 : 57 * 7 }}
            >
                {subMenus?.map((sub) => (
                    <ul className="text-sm" key={sub.id}>
                        <MenuItem
                            {...{ ...sub, isChild: true, level: level + 1 }}
                        />
                    </ul>
                ))}
            </div>
        </>
    );
};

export default MenuItem;
