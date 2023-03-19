import { useForm } from 'react-hook-form';

// Components
import ErrorMessage from 'components/ErrorMessage';
import Button from 'components/Button';

import { ISetPassword } from 'types';

const SetPassword: React.FC = () => {
    const onSubmit = async (data: ISetPassword) => {
        console.log(data);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });
    return (
        <>
            <div className="flex justify-center min-h-screen bg-main items-center text-white">
                <form
                    className="w-full max-w-xs mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-center pb-8">
                        <a
                            className="flex justify-center items-center before:content-[''] before:inline-block before:w-[2.4rem] before:h-[2.4rem] before:mr-4 before:border-[5px] before:border-solid before:border-white before:rounded-[2.4rem]"
                            href="/"
                        >
                            Dashboard
                        </a>
                    </h1>
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
                    </div>
                    <div className="mb-1">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-bold mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('confirmPassword', {
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
                        {errors.confirmPassword &&
                            errors.confirmPassword.message && (
                                <ErrorMessage
                                    message={errors.confirmPassword.message}
                                />
                            )}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Button
                            title="Set password"
                            type="submit"
                            variant="primary"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};
export default SetPassword;
