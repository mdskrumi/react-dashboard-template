import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface ErrorMessageInterface {
    message: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const ErrorMessage: React.FC<ErrorMessageInterface> = ({ message }) => (
    <p role="alert" className="font-semibold text-sm text-danger">
        {message.toString()}
    </p>
);

export default ErrorMessage;
