import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { toggleTheme } from 'store/reducers/util';

import light from 'assets/light/theme.svg';
import dark from 'assets/dark/theme.svg';

const PublicOutlet = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.user.token);
    const theme = useAppSelector((state) => state.util.theme);

    return !token ? (
        <div className="overflow-hidden">
            <div className="pr-6 pt-4">
                <img
                    className="w-7 h-7 ml-auto"
                    src={theme === 'light' ? dark : light}
                    alt={'theme'}
                    onClick={() => dispatch(toggleTheme())}
                />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to={'dashboard'} />
    );
};

export default PublicOutlet;
