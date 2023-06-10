import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SplashPage from 'pages/SplashPage';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ForgetPasswordPage = lazy(() => import('pages/ForgetPasswordPage'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const SetPassword = lazy(() => import('pages/SetPassword'));

const SamplePageOne = lazy(() => import('pages/SamplePageOne'));
const SamplePageTwo = lazy(() => import('pages/SamplePageTwo'));
const SamplePageThree = lazy(() => import('pages/SamplePageThree'));

const TypographyPage = lazy(() => import('pages/TypographyPage'));
const ButtonPage = lazy(() => import('pages/ButtonPage'));
const FilterPage = lazy(() => import('pages/FilterPage'));
const LoadingPage = lazy(() => import('pages/LoadingPage'));

const PrivateOutlet = lazy(() => import('layout/PrivateOutlet'));
const PublicOutlet = lazy(() => import('layout/PublicOutlet'));

import { useAppSelector } from 'store/hooks';

import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer />
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
                                path="sample-one"
                                element={<SamplePageOne />}
                            />
                            <Route
                                path="sample-two"
                                element={<SamplePageTwo />}
                            />
                            <Route
                                path="sample-three"
                                element={<SamplePageThree />}
                            />
                            <Route
                                path="typography"
                                element={<TypographyPage />}
                            />
                            <Route
                                path="button-page"
                                element={<ButtonPage />}
                            />
                            <Route
                                path="filter-page"
                                element={<FilterPage />}
                            />
                            <Route
                                path="loading-page"
                                element={<LoadingPage />}
                            />
                        </Route>
                        <Route path="*" element={<Navigate to={'/'} />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
