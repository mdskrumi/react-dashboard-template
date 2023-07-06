import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from 'components/Elements/Button';
import { ForgetPasswordInterface } from 'types';
import ErrorMessage from 'components/Elements/ErrorMessage';

// Icons
import Logo from '/logo.svg';

const ForgetPasswordPage: React.FC = () => {
    const onSubmit = (data: ForgetPasswordInterface) => {
        console.log(data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgetPasswordInterface>({
        defaultValues: {
            email: '',
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
                    <p className="font-medium">Find Your Account</p>
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

                <div className="flex items-center justify-between ">
                    <Button
                        title="Submit"
                        handleClick={handleSubmit}
                        variant="primary"
                    />
                </div>
                <div className="mt-4">
                    <span>
                        To login?{' '}
                        <Link to={'/'} className="text-primary_light">
                            Log In
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default ForgetPasswordPage;
