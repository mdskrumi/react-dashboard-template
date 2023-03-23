// Redux
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setSidebarOpen } from 'store/reducers/util';

// Icons
import Logo from '/logo.svg';

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
                <h3 className="cursor-pointer ml-5">React Dashboard</h3>
            </div>
        </div>
    );
};

export default TopBar;
