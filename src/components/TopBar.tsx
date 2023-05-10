// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setSidebarOpen, setNotificationBarOpen } from 'store/reducers/util';

// Icons
import Logo from '/logo.svg';
import NotificationIcon from 'assets/notification.svg';

// Model
import NotificationModal from 'components/NotificationModal';
import NotificationTile from './NotificationTile';

const TopBar = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const isNotificationBarOpen = useAppSelector(
        (state) => state.util.isNotificationBarOpen
    );

    return (
        <>
            <div className="bg-main_dark h-[3rem] w-full fixed p-2 z-50 flex items-center justify-between">
                <div
                    className="pl-2 flex justify-start cursor-pointer"
                    onClick={() => dispatch(setSidebarOpen(!isOpen))}
                >
                    <img className="w-7" src={Logo} />
                    <h5 className="cursor-pointer ml-5">React Dashboard</h5>
                </div>

                <div>
                    <div
                        className="pr-4 cursor-pointer"
                        onClick={() =>
                            dispatch(
                                setNotificationBarOpen(!isNotificationBarOpen)
                            )
                        }
                    >
                        <div className="absolute bottom-auto left-auto right-6 top-3 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-50 scale-y-50 rounded-full bg-red-700 p-2.5 text-xs"></div>
                        <img
                            className="w-6 h-6"
                            src={NotificationIcon}
                            alt="notifications"
                        />
                    </div>
                </div>
            </div>

            <NotificationModal
                isVisible={isNotificationBarOpen}
                setVisible={(val: boolean) =>
                    dispatch(setNotificationBarOpen(val))
                }
            >
                <NotificationTile
                    title="Sample Notifications"
                    content="This is a test notification body. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae numquam ab recusandae a itaque eaque ad, quos nulla et!"
                    date="25 May, 2023"
                    varient="green"
                />
                <NotificationTile
                    title="Sample Notifications"
                    content="This is a test notification body."
                    date="2 Apr, 2023"
                    varient="yellow"
                />
                <NotificationTile
                    title="Sample Notifications"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae numquam ab recusandae a itaque eaque ad, quos nulla et! Qui ducimus sed, sit debitis minus impedit dignissimos cumque facilis!"
                    date="1 Jan, 2023"
                    varient="red"
                />
                <NotificationTile
                    title="Sample Notifications"
                    content="This is a test notification body. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae numquam ab recusandae a itaque eaque ad, quos nulla et! Qui ducimus sed, sit debitis minus impedit dignissimos cumque facilis!"
                    date="25 Dec, 2022"
                    varient="read"
                />
            </NotificationModal>
        </>
    );
};

export default TopBar;
