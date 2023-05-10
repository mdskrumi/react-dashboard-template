import Loading from 'components/Loading';

const LoadingPage: React.FC = () => {
    return (
        <div className="w-full text-center flex justify-around items-center">
            <div>
                <Loading varient="small" />
                <Loading varient="normal" />
                <Loading varient="large" />
            </div>
            <div>
                <Loading varient="small" message="Loading with message" />
                <Loading varient="normal" message="Loading with message" />
                <Loading varient="large" message="Loading with message" />
            </div>
        </div>
    );
};

export default LoadingPage;
