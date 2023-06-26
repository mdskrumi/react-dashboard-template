import MainLayout from 'layout/MainLayout';

const ButtonPage = () => {
    return (
        <MainLayout
            title="Button"
            breadcrumbs={[{ title: 'Button', link: '#', disabled: true }]}
        ></MainLayout>
    );
};

export default ButtonPage;
