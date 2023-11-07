import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Redux
import { useAppSelector } from 'store/hooks';

import Sidebar from 'layout/Sidebar';
import TopBar from 'layout/TopBar';
import Spinner from 'components/Elements/Spinner';

const PrivateOutlet = () => {
    const isOpen = useAppSelector((state) => state.util.isSidebarOpen);
    const { token } = useAppSelector((state) => state.user);

    return token ? (
        <div className="overflow-hidden">
            <TopBar />
            <Sidebar />
            <div
                style={{
                    paddingLeft:
                        window.innerWidth < 1024
                            ? '0rem'
                            : isOpen
                            ? '18.5rem'
                            : '5.5rem',
                }}
                className={`pt-16 min-h-screen overflow-auto duration-300`}
            >
                <Suspense
                    fallback={
                        <div className="w-full min-h-[calc(100vh-64px)] pt-2 pl-2 pr-2 relative">
                            <div className="abs-center">
                                <Spinner message="Laoding" />
                            </div>
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </div>
        </div>
    ) : (
        <Navigate to={'auth'} />
    );
};

export default PrivateOutlet;
