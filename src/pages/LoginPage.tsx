import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

// Redux
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { login } from 'store/reducers/user';
// import { useLoginMutation } from 'store/api/login';

import Button from 'components/Button';
import { LoginUserInterface } from 'types';
import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';

// Icons
import Logo from '/logo.svg';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { token } = useAppSelector((state) => state.user);

    // const [callLogin, { data, error, isLoading }] = useLoginMutation();

    const onSubmit = (data: LoginUserInterface) => {
        // callLogin(data).unwrap();
        dispatch(
            login({
                token: 'asd',
            })
        ); // Test Login
    };

    useEffect(() => {
        if (token) {
            navigate('dashboard', { replace: true });
        }
    }, [token, navigate]);

    const {
        register,
        handleSubmit,
        // setError,
        formState: { errors },
    } = useForm<LoginUserInterface>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // useEffect(() => {
    //     if (data?.token) {
    //         dispatch(login(data));
    //     }
    // }, [data]);

    // useEffect(() => {
    //     // @ts-ignore
    //     if (error?.status === 400) {
    //         setError('password', {
    //             type: 'custom',
    //             // @ts-ignore
    //             message: error?.data?.message,
    //         });
    //     }
    // }, [error]);

    return (
        <div className="flex justify-center min-h-screen bg-main items-center">
            <form
                className="w-full max-w-xs mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex gap-2 pb-8 items-center cursor-default">
                    <img className="w-10" src={Logo} />
                    <h1>Dashboard</h1>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block  text-sm font-bold mb-2"
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
                            to={'forget-password'}
                        >
                            Forget password?
                        </Link>
                    </div>
                </div>
                <Button title="Log In" type="submit" variant="primary" />
                <div className="mt-4">
                    <span>
                        Don't have a account?{' '}
                        <Link to={'/register'} className="text-primary_light">
                            Sign Up Now
                        </Link>
                    </span>
                </div>
                {/* {isLoading && <Loading varient="small" />} */}
            </form>
        </div>
    );
};

export default LoginPage;
