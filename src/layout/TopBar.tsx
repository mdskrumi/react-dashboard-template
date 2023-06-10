// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
    setSidebarOpen,
    setNotificationBarOpen,
    toggleTheme,
} from 'store/reducers/util';

// Component
import MenuRightItem from 'components/MenuRightItem';

// Icons
import Logo from '/logo.svg';

const TopBar = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const theme = useAppSelector((state) => state.util.theme);
    const isNotificationBarOpen = useAppSelector(
        (state) => state.util.isNotificationBarOpen
    );

    return (
        <>
            <div
                className={`max-w-[1920px] m-auto fixed items-center justify-between flex h-16 top-0 w-full border-b-[1px] bg-surface dark:bg-surface-dark`}
            ></div>

            <div
                className={`fixed top-12 bottom-0 right-0 h-full max-w-sm ${
                    isNotificationBarOpen ? 'w-[50%]' : 'w-0'
                } duration-300 bg-surface dark:bg-surface-dark`}
            >
                <MenuRightItem
                    title="Theme"
                    icon={''}
                    handleClick={() => {
                        dispatch(toggleTheme());
                    }}
                />
                <MenuRightItem
                    title="Notifications"
                    icon={''}
                    handleClick={() => {}}
                />
            </div>
        </>
    );
};

export default TopBar;
