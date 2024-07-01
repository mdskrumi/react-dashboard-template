import Spinner from 'components/Elements/Spinner';

const SplashPage: React.FC<{ message?: string }> = ({
    message = 'React Dashboard Template',
}) => {
    return (
        <div className="h-[100vh]">
            <Spinner variant="normal" message={message} />
        </div>
    );
};

export default SplashPage;
