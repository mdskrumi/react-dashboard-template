import { useForm } from 'react-hook-form';

// Components
import ErrorMessage from 'components/Elements/ErrorMessage';
import Button from 'components/Elements/Button';

export interface ISetPassword {
    password: string;
    confirmPassword: string;
}

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
            <div className="flex min-h-screen items-center justify-center">
                <form
                    className="mx-auto w-full max-w-xs"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="pb-8 text-center">
                        <a href="/">Dashboard</a>
                    </h1>
                    <div className="mb-1">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
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
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
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
                    <div className="mt-4 flex items-center justify-between">
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
