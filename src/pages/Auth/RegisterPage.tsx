import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'components/Elements/Button';
import { RegisterUserInterface } from 'types';
import ErrorMessage from 'components/Elements/ErrorMessage';

// Icons
import Logo from '/logo.svg';

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
        <div className="grid h-[100vh] content-center">
            <form
                className="card mb-10 w-full max-w-md p-6 md:p-10"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-16 cursor-default text-center">
                    <img className="m-auto w-20" src={Logo} />
                    <h3>React Dashboard</h3>
                    <p className="font-medium">Create Your Account</p>
                </div>

                <div className="mb-1">
                    <label htmlFor="fName">First Name</label>
                    <input
                        type="text"
                        id="fName"
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
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
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
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
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
                            <Link to={'/'}>Log In Now</Link>
                        </span>
                    </div>
                )}
            </form>
            {showEmailVarifyField && (
                <form
                    className="card w-full max-w-md p-6 md:p-10"
                    onSubmit={handleSubmitCode(onCodeSubmit)}
                >
                    <div className="mb-4">
                        <label htmlFor="varificationCode">
                            Varification Code
                        </label>
                        <input
                            type="text"
                            id="varificationCode"
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
                    <Button title="Varify" type="submit" variant="primary" />
                </form>
            )}
        </div>
    );
};

export default RegisterPage;
