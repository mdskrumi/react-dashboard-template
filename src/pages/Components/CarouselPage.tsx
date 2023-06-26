import MainLayout from 'layout/MainLayout';

const CarouselPage = () => {
    return (
        <MainLayout
            title="Carousel"
            breadcrumbs={[{ title: 'Carousel', link: '#', disabled: true }]}
        ></MainLayout>
    );
};

export default CarouselPage;
