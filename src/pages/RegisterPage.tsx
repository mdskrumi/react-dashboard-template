import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { RegisterUserInterface } from 'types';
import ErrorMessage from 'components/ErrorMessage';

// Icons
import Logo from '../../public/logo.svg';

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const [showEmailVarifyField, setShowEmailVarifyField] =
        useState<boolean>(false);

    const onSubmit = (data: RegisterUserInterface) => {
        console.log(data);
        setShowEmailVarifyField(true);
    };
    const onCodeSubmit = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        if (localStorage.getItem('loggedIn')) {
            navigate('dashboard', { replace: true });
        }
    }, [navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterUserInterface>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
    });

    const {
        register: registerCode,
        handleSubmit: handleSubmitCode,
        formState: { errors: errorsCode },
    } = useForm<{ varificationCode: string }>({
        defaultValues: {
            varificationCode: '',
        },
    });

    return (
        <>
            <div className="flex flex-col justify-center min-h-screen bg-main items-center text-white">
                <form
                    className="w-full max-w-xs mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex gap-2 pb-8 items-center cursor-default">
                        <img className="w-10" src={Logo} />
                        <h1>Dashboard</h1>
                    </div>
                    <div className="mb-1">
                        <label
                            htmlFor="fName"
                            className="block text-sm font-bold mb-2"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="fName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('firstName', {
                                required: {
                                    value: true,
                                    message: 'This field is requried.',
                                },
                            })}
                        />
                        {errors.firstName && errors.firstName.message && (
                            <ErrorMessage message={errors.firstName.message} />
                        )}
                    </div>
                    <div className="mb-1">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-bold mb-2"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('lastName', {
                                required: {
                                    value: true,
                                    message: 'This field is requried.',
                                },
                            })}
                        />
                        {errors.lastName && errors.lastName.message && (
                            <ErrorMessage message={errors.lastName.message} />
                        )}
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

                    <Button
                        title="Register"
                        handleClick={handleSubmit(onSubmit)}
                        variant="primary"
                        disabled={showEmailVarifyField}
                    />
                    {!showEmailVarifyField && (
                        <div className="mt-4">
                            <span>
                                Already have an account?{' '}
                                <Link to={'/'} className="text-primary_light">
                                    Log In Now
                                </Link>
                            </span>
                        </div>
                    )}
                </form>
                {showEmailVarifyField && (
                    <form
                        className="w-full max-w-xs mx-auto pt-2"
                        onSubmit={handleSubmitCode(onCodeSubmit)}
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="varificationCode"
                                className="block text-sm font-bold mb-2"
                            >
                                Varification Code
                            </label>
                            <input
                                type="text"
                                id="varificationCode"
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                {...registerCode('varificationCode', {
                                    required: {
                                        value: true,
                                        message: 'This field is requried.',
                                    },
                                })}
                            />
                            {errorsCode.varificationCode &&
                                errorsCode.varificationCode.message && (
                                    <ErrorMessage
                                        message={
                                            errorsCode.varificationCode.message
                                        }
                                    />
                                )}
                        </div>
                        <Button
                            title="Varify"
                            type="submit"
                            variant="primary"
                        />
                    </form>
                )}
            </div>
        </>
    );
};

export default RegisterPage;
