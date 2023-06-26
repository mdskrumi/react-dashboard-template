import MainLayout from 'layout/MainLayout';

const SpinnerPage = () => {
    return (
        <MainLayout
            title="Spinner"
            breadcrumbs={[{ title: 'Spinner', link: '#', disabled: true }]}
        ></MainLayout>
    );
};

export default SpinnerPage;
