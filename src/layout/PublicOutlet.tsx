import { Outlet, Navigate } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { toggleTheme } from 'store/reducers/util';

const PublicOutlet = () => {
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state) => state.user);
    const { theme } = useAppSelector((state) => state.util);

    return !token ? (
        <>
            <div
                onClick={() => dispatch(toggleTheme())}
                className="text-primary fixed right-6 top-4 hover:text-primary-varient select-none"
            >
                {theme === 'light' ? (
                    <FiMoon size="2rem" />
                ) : (
                    <FiSun size="2rem" />
                )}
            </div>
            <div className="overflow-hidden">
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to={'dashboard'} />
    );
};

export default PublicOutlet;
