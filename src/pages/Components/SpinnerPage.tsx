import Spinner from 'components/Elements/Spinner';
import MainLayout from 'layout/MainLayout';

const SpinnerPage = () => {
    return (
        <MainLayout
            title="Spinner"
            breadcrumbs={[{ title: 'Spinner', link: '#', disabled: true }]}
        >
            <div className="grid grid-cols-2 gap-3">
                <Spinner variant="small" />
                <Spinner variant="small" message="Small Spinner" />
                <Spinner variant="normal" />
                <Spinner variant="normal" message="Normal Spinner" />
                <Spinner variant="large" />
                <Spinner variant="large" message="Large Spinner" />
            </div>
        </MainLayout>
    );
};

export default SpinnerPage;
