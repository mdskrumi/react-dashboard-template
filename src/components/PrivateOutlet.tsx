import { Outlet } from 'react-router-dom';

// Redux
import { useAppSelector } from 'store/hooks';

import LoginPage from 'pages/LoginPage';

import Sidebar from 'components/Sidebar';
import TopBar from 'components/TopBar';

const PrivateOutlet = () => {
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const { token } = useAppSelector((state) => state.user);

    return token ? (
        <div className="overflow-hidden">
            <Sidebar />
            <TopBar />
            <div
                className={`pt-14 min-h-screen overflow-auto duration-300`}
                style={{ paddingLeft: isOpen ? '18.5rem' : '4.5rem' }}
            >
                <Outlet />
            </div>
        </div>
    ) : (
        <LoginPage />
    );
};

export default PrivateOutlet;
