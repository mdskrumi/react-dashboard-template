import { Navigate, Outlet } from 'react-router-dom';

// Redux
import { useAppSelector } from 'store/hooks';

import Sidebar from 'layout/Sidebar';
import TopBar from 'layout/TopBar';

const PrivateOutlet = () => {
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const { token } = useAppSelector((state) => state.user);

    return token ? (
        <div className="overflow-hidden">
            <TopBar />
            <Sidebar />
            <div
                className={`pt-16 min-h-screen overflow-auto duration-300`}
                style={{ paddingLeft: isOpen ? '18.5rem' : '5.5rem' }}
            >
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to={'auth'} />
    );
};

export default PrivateOutlet;
