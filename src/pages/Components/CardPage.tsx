import MainLayout from 'layout/MainLayout';

const CardPage = () => {
    return (
        <MainLayout
            title="Card"
            breadcrumbs={[{ title: 'Card', link: '#', disabled: true }]}
        ></MainLayout>
    );
};

export default CardPage;
