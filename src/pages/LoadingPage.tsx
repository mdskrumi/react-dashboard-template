import Loading from 'components/Loading';

const LoadingPage: React.FC = () => {
    return (
        <div className="w-full text-center grid grid-cols-2 gap-10 mt-10">
            <Loading varient="small" />
            <Loading varient="small" message="Loading with message" />
            <Loading varient="normal" />
            <Loading varient="normal" message="Loading with message" />
            <Loading varient="large" />
            <Loading varient="large" message="Loading with message" />
        </div>
    );
};

export default LoadingPage;
