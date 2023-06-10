import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

// Redux
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { login } from 'store/reducers/user';

import Button from 'components/Button';
import { LoginUserInterface } from 'types';
import ErrorMessage from 'components/ErrorMessage';

// Icons
import Logo from '/logo.svg';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state) => state.user);

    const onSubmit = (data: LoginUserInterface) => {
        console.log(data);
        dispatch(
            login({
                token: 'test-token',
            })
        ); // Test Login
    };

    useEffect(() => {
        if (token) {
            navigate('/', { replace: true });
        }
    }, [token, navigate]);

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<LoginUserInterface>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <div className="h-[100vh] grid content-center bg-ui dark:bg-ui-dark">
            <form
                className="w-full max-w-md p-6 md:p-10 card"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="text-center cursor-default mb-16">
                    <img className="w-20 m-auto" src={Logo} />
                    <h3>React Dashboard</h3>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'This field is requried.',
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && errors.email.message && (
                        <ErrorMessage message={errors.email.message} />
                    )}
                </div>
                <div className="mb-1">
                    <label
                        htmlFor="password"
                        className="block text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'This field is requried.',
                            },
                            minLength: {
                                value: 6,
                                message: 'Minimum length for password is 6',
                            },
                        })}
                    />
                    {errors.password && errors.password.message && (
                        <ErrorMessage message={errors.password.message} />
                    )}

                    <div className="text-right">
                        <Link
                            className="text-sm text-primary_light pt-2"
                            to={'/auth/forget-password'}
                        >
                            Forget password?
                        </Link>
                    </div>
                </div>
                <Button title="Log In" type="submit" variant="primary" />
                <div className="mt-4">
                    <span>
                        Don't have a account?{' '}
                        <Link
                            to={'/auth/register'}
                            className="text-primary_light"
                        >
                            Sign Up Now
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
