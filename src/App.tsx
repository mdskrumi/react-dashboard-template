import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';

import SplashPage from 'pages/SplashPage';

const LoginPage = lazy(() => import('pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('pages/Auth/RegisterPage'));
const ForgetPasswordPage = lazy(() => import('pages/Auth/ForgetPasswordPage'));

const Dashboard = lazy(() => import('pages/Dashboard'));

// Component Pages
const AccordionPage = lazy(() => import('pages/Components/AccordionPage'));
const AlertPage = lazy(() => import('pages/Components/AlertPage'));
const BadgePage = lazy(() => import('pages/Components/BadgePage'));
const ButtonPage = lazy(() => import('pages/Components/ButtonPage'));
const DropDownPage = lazy(() => import('pages/Components/DropDownPage'));
const IconButtonPage = lazy(() => import('pages/Components/IconButtonPage'));
const PaginationPage = lazy(() => import('pages/Components/PaginationPage'));
const SpinnerPage = lazy(() => import('pages/Components/SpinnerPage'));
const TabPage = lazy(() => import('pages/Components/TabPage'));

const SetPassword = lazy(() => import('pages/SetPassword'));

const PublicOutlet = lazy(() => import('layout/PublicOutlet'));
const PrivateOutlet = lazy(() => import('layout/PrivateOutlet'));

import toast, { Toaster } from 'react-hot-toast';

import './i18n'


function App() {
    const theme = useAppSelector((state) => state.util.theme);

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [theme]);

    return (
        <div className="max-w-[1920px] h-screen m-auto animate-fade-in-up">
            <Toaster />
            <BrowserRouter>
                <Suspense fallback={<SplashPage />}>
                    <Routes>
                        <Route path="/auth" element={<PublicOutlet />}>
                            <Route
                                path=""
                                element={<Navigate to={'login'} />}
                            />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="register" element={<RegisterPage />} />
                            <Route
                                path="forget-password"
                                element={<ForgetPasswordPage />}
                            />
                            <Route
                                path="user/set-password"
                                element={<SetPassword />}
                            />
                        </Route>
                        <Route path="" element={<PrivateOutlet />}>
                            <Route path="" element={<Dashboard />} />
                            <Route
                                path="accordion"
                                element={<AccordionPage />}
                            />
                            <Route path="alert" element={<AlertPage />} />
                            <Route path="badge" element={<BadgePage />} />
                            <Route path="button" element={<ButtonPage />} />
                            <Route path="dropdown" element={<DropDownPage />} />
                            <Route
                                path="icon-action-button"
                                element={<IconButtonPage />}
                            />
                            <Route
                                path="pagination"
                                element={<PaginationPage />}
                            />
                            <Route path="spinner" element={<SpinnerPage />} />
                            <Route path="tab" element={<TabPage />} />
                        </Route>
                        <Route path="*" element={<Navigate to={'/'} />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
