import Loading from 'components/Elements/Spinner';

const SplashPage = () => {
    return (
        <div className="bg-ui dark:bg-ui-dark grid content-center h-[100vh]">
            <Loading varient="normal" message="React Dashboard Template" />
        </div>
    );
};

export default SplashPage;
