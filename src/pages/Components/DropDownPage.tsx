import MainLayout from 'layout/MainLayout';

const DropDownPage = () => {
    return (
        <MainLayout
            title="DropDown"
            breadcrumbs={[{ title: 'DropDown', link: '#', disabled: true }]}
        ></MainLayout>
    );
};

export default DropDownPage;
