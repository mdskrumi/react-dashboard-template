import MainLayout from 'layout/MainLayout';

const PaginationPage = () => {
    return (
        <MainLayout
            title="Pagination"
            breadcrumbs={[{ title: 'Pagination', link: '#', disabled: true }]}
        ></MainLayout>
    );
};

export default PaginationPage;
