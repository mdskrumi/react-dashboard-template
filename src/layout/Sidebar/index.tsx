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
                className={`z-20 hidden lg:block fixed top-0 bottom-0 ${
                    isOpen ? 'w-72' : 'w-20'
                } duration-300 overflow-x-hidden border-r-[1px] bg-surface dark:bg-surface-dark border-line dark:border-line-dark`}
            >
                <div
                    className="pl-4 flex justify-start items-center cursor-default h-16 border-b border-line dark:border-line-dark"
                    onClick={() => dispatch(setSidebarOpen(!isOpen))}
                >
                    <Image className="w-12 mr-4" src={Logo} />
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
                className={`z-50 block lg:hidden overflow-hidden overflow-y-auto fixed top-0 bottom-0 left-0 bg-overlay ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
                onClick={() => dispatch(setSidebarOpen(false))}
            >
                <div
                    className={`relative ${
                        isOpen ? 'max-w-xs' : 'max-w-0'
                    }  bg-surface dark:bg-surface-dark min-h-[100vh] duration-300`}
                >
                    <div
                        className="sticky bg-surface dark:bg-surface-dark top-0 pl-4 flex justify-start items-center cursor-pointer h-16 border-b border-line dark:border-line-dark"
                        onClick={() => dispatch(setSidebarOpen(!isOpen))}
                    >
                        <Image className="w-12 mr-4" src={Logo} />
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
