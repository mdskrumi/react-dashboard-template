// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setSidebarOpen } from 'store/reducers/util';

// Icons
import Logo from '/logo.svg';
import NotificationIcon from 'assets/notification.svg';

const TopBar = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);

    return (
        <div className="bg-main_dark h-[3rem] w-full fixed p-2 z-50 flex items-center justify-between">
            <div
                className="pl-2 flex justify-start cursor-pointer"
                onClick={() => dispatch(setSidebarOpen(!isOpen))}
            >
                <img className="w-7" src={Logo} />
                <h5 className="cursor-pointer ml-5">React Dashboard</h5>
            </div>

            <div className="pr-4 cursor-pointer">
                <div className="absolute bottom-auto left-auto right-6 top-3 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-50 scale-y-50 rounded-full bg-red-700 p-2.5 text-xs"></div>
                <img
                    className="w-5 h-5"
                    src={NotificationIcon}
                    alt="notifications"
                />
            </div>
        </div>
    );
};

export default TopBar;
