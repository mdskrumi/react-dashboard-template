// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { toggleTheme, setSidebarOpen } from 'store/reducers/util';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { FiMoon, FiSun } from 'react-icons/fi';

const TopBar = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.util.theme);
    const isSidebarOpen = useAppSelector((state) => state.util.isSidebarOpen);

    return (
        <>
            <div
                className={`max-w-[1920px] m-auto fixed items-center justify-between flex h-16 top-0 w-full border-b-[1px] border-line dark:border-line-dark bg-surface dark:bg-surface-dark select-none duration-300`}
                style={{
                    marginLeft:
                        window.innerWidth > 1024
                            ? isSidebarOpen
                                ? '287px'
                                : '79px'
                            : '0',
                }}
            >
                <div>
                    <RiMenuUnfoldFill
                        size={'1.5em'}
                        className="ml-4 cursor-pointer"
                        onClick={() => dispatch(setSidebarOpen(!isSidebarOpen))}
                    />
                </div>
                <div
                    onClick={() => dispatch(toggleTheme())}
                    className="fixed right-6 top-4 cursor-pointer"
                >
                    {theme === 'light' ? (
                        <FiMoon size="1.5rem" />
                    ) : (
                        <FiSun size="1.5rem" />
                    )}
                </div>
            </div>
        </>
    );
};

export default TopBar;
