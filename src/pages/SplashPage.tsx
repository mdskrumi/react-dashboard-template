import Spinner from 'components/Elements/Spinner';

const SplashPage = () => {
    return (
        <div className="bg-ui dark:bg-ui-dark grid content-center h-[100vh]">
            <Spinner variant="normal" message="React Dashboard Template" />
        </div>
    );
};

export default SplashPage;
