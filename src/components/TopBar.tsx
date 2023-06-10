// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
    setSidebarOpen,
    setNotificationBarOpen,
    toggleTheme,
} from 'store/reducers/util';

// Component
import MenuRightItem from './MenuRightItem';

// Icons
import Logo from '/logo.svg';
import NotificationIcon from 'assets/notification.svg';
import light from 'assets/light/theme.svg';
import dark from 'assets/dark/theme.svg';
import menu from 'assets/light/menu.svg';
import menuDark from 'assets/dark/menu.svg';

const TopBar = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const theme = useAppSelector((state) => state.util.theme);
    const isNotificationBarOpen = useAppSelector(
        (state) => state.util.isNotificationBarOpen
    );

    return (
        <>
            <div className="max-w-[1920px] m-auto fixed items-center justify-between flex h-12 top-0 w-full border-b-[1px] border-line dark:border-line-dark bg-ui dark:bg-ui-dark">
                <div
                    className="pl-2 flex justify-start cursor-pointer"
                    onClick={() => dispatch(setSidebarOpen(!isOpen))}
                >
                    <img className="w-7" src={Logo} />
                    <h5 className="cursor-pointer ml-5">React Dashboard</h5>
                </div>

                <div className="cursor-pointer flex w-fit mr-4 gap-4">
                    <img
                        src={theme === 'light' ? menuDark : menu}
                        className="w-7 h-7"
                        alt="menu"
                        onClick={() =>
                            dispatch(
                                setNotificationBarOpen(!isNotificationBarOpen)
                            )
                        }
                    />
                </div>
            </div>

            <div
                className={`fixed top-12 bottom-0 right-0 h-full max-w-sm ${
                    isNotificationBarOpen ? 'w-[50%]' : 'w-0'
                } duration-300 bg-surface dark:bg-surface-dark`}
            >
                <MenuRightItem
                    title="Theme"
                    icon={theme === 'light' ? dark : light}
                    handleClick={() => {
                        dispatch(toggleTheme());
                    }}
                />
                <MenuRightItem
                    title="Notifications"
                    icon={NotificationIcon}
                    handleClick={() => {}}
                />
            </div>
        </>
    );
};

export default TopBar;
