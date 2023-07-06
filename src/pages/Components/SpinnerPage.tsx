import Spinner from 'components/Elements/Spinner';
import MainLayout from 'layout/MainLayout';

const SpinnerPage = () => {
    return (
        <MainLayout
            title="Spinner"
            breadcrumbs={[{ title: 'Spinner', link: '#', disabled: true }]}
        >
            <div className="grid grid-cols-2 gap-3">
                <Spinner varient="small" />
                <Spinner varient="small" message="Small Spinner" />
                <Spinner varient="normal" />
                <Spinner varient="normal" message="Normal Spinner" />
                <Spinner varient="large" />
                <Spinner varient="large" message="Large Spinner" />
            </div>
        </MainLayout>
    );
};

export default SpinnerPage;
