// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setSidebarOpen } from 'store/reducers/util';

// Icons
import Logo from '/logo.svg';

// Components
import SideBarItem from 'layout/Sidebar/SideBarItem';
import Image from 'components/Elements/Image';
import { menus } from './menus';

const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);

    return (
        <>
            {/* Desktop Design */}
            <div
                className={`fixed top-0 bottom-0 z-20 hidden lg:block ${
                    isOpen ? 'w-72' : 'w-20'
                } overflow-x-hidden border-r-[1px] border-light-gray300 bg-light-primary50 duration-300 dark:border-dark-gray300 dark:bg-dark-primary50`}
            >
                <div
                    className="flex h-16 cursor-default items-center justify-start border-b border-light-gray300 bg-light-primary100 pl-4 dark:border-dark-gray300 dark:bg-dark-primary100"
                    onClick={() => dispatch(setSidebarOpen(!isOpen))}
                >
                    <Image className="mr-4 w-12" src={Logo} />
                    {isOpen && (
                        <div className="animate-fade-in">
                            <h3 className="min-w-max">Dashboard</h3>
                            <p className="caption min-w-max">Simple and Fast</p>
                        </div>
                    )}
                </div>
                {menus.map((item) => (
                    <SideBarItem key={item.id} menuItem={item} />
                ))}
            </div>

            {/* Mobile Design */}
            <div
                className={`fixed top-0 bottom-0 left-0 z-50 block overflow-hidden overflow-y-auto backdrop-blur-sm lg:hidden ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
                onClick={() => dispatch(setSidebarOpen(false))}
            >
                <div
                    className={`relative ${
                        isOpen ? 'max-w-xs' : 'max-w-0'
                    } min-h-[100vh] border-light-gray300 bg-light-primary50 duration-300 dark:border-dark-gray300 dark:bg-dark-primary50`}
                >
                    <div
                        className="sticky top-0 flex h-16 cursor-pointer items-center justify-start border-b border-light-gray300 bg-light-primary100 pl-4 dark:border-dark-gray300 dark:bg-dark-primary100"
                        onClick={() => dispatch(setSidebarOpen(!isOpen))}
                    >
                        <Image className="mr-4 w-12" src={Logo} />
                        <div className="animate-fade-in">
                            <h3 className="min-w-max">Dashboard</h3>
                            <p className="caption min-w-max">Simple and Fast</p>
                        </div>
                    </div>
                    <div>
                        {menus.map((item) => (
                            <SideBarItem
                                key={item.id}
                                menuItem={item}
                                isMobile
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
