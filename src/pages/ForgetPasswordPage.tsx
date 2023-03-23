import React from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import { ForgetPasswordInterface } from 'types';
import ErrorMessage from 'components/ErrorMessage';

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
        <div className="flex justify-center min-h-screen bg-main items-center text-white">
            <form
                className="w-full max-w-xs mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex gap-2 pb-8 items-center cursor-default">
                    <img className="w-10" src={Logo} />
                    <h2>Forget Password</h2>
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

                <div className="flex items-center justify-between ">
                    <Button
                        title="Submit"
                        handleClick={handleSubmit}
                        variant="primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default ForgetPasswordPage;
