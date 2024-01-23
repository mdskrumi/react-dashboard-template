import MainLayout from 'layout/MainLayout';
import Badge from 'components/Elements/Badge';

const BadgePage = () => {
    return (
        <MainLayout
            title="Badge"
            breadcrumbs={[{ title: 'Badge', link: '#', disabled: true }]}
        >
            <div className="flex justify-center card p-10 gap-4">
                <Badge text="Success" variant="success" />
                <Badge text="Waring" variant="warning" />
                <Badge text="Fail" variant="fail" />
                <Badge text="Normal" variant="normal" />
            </div>
        </MainLayout>
    );
};

export default BadgePage;
