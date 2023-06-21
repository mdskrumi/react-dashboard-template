import MainLayout from 'layout/MainLayout';
import AccordionGroup from 'components/Accordion/AccordionGroup';

const AccordionPage = () => {
    return (
        <MainLayout
            title="Accordion"
            breadcrumbs={[{ title: 'Accordion', link: '#', disabled: true }]}
        >
            <AccordionGroup></AccordionGroup>
        </MainLayout>
    );
};

export default AccordionPage;
