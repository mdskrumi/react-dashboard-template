import MainLayout from 'layout/MainLayout';
import AccordionGroup from 'components/Elements/Accordion/AccordionGroup';
import AccordionItem from 'components/Elements/Accordion/AccordionItem';

const AccordionPage = () => {
    return (
        <MainLayout
            title="Accordion"
            breadcrumbs={[{ title: 'Accordion', link: '#', disabled: true }]}
        >
            <AccordionGroup>
                <AccordionItem
                    title="Accordion Example 1"
                    subTitle={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing'
                    }
                    trailing="3 May, 1989"
                >
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aut molestiae pariatur corrupti, nihil libero sit
                        doloremque? Non reiciendis fugiat cumque tenetur alias
                        provident quaerat itaque architecto harum. Mollitia fuga
                        quae magni quas laborum ullam rem sed obcaecati natus
                        fugiat odit labore dolorum est vel voluptates, voluptate
                        perspiciatis praesentium eaque nemo asperiores ab!
                        Reiciendis ab aliquid, temporibus, amet molestias
                        consequuntur non dolorem itaque cupiditate asperiores
                        minus sequi ipsum dignissimos earum quas tenetur porro
                        doloribus magnam mollitia sunt necessitatibus quasi
                        tempore cumque voluptates! Aliquam dolorum,
                        exercitationem ipsam quidem ipsum animi iusto architecto
                        reprehenderit tempore sequi repellendus porro quibusdam
                        illum cumque fugiat amet vero neque error aspernatur
                        praesentium. Atque, sed ratione eos dignissimos commodi
                        vitae possimus, dolorem deleniti dolor ad molestiae
                        laboriosam! Iure accusantium eaque ut non atque amet,
                        sapiente nulla fugiat illum ab debitis blanditiis
                        aliquid excepturi saepe rerum quia perferendis
                        reiciendis magnam quae doloribus neque impedit nisi.
                        Sint dolor numquam beatae excepturi sequi ipsa eligendi
                        nulla officia saepe? Amet fugiat unde voluptates cum
                        autem possimus cumque, reprehenderit ipsum modi magnam,
                        ipsam corporis excepturi iusto sit odio inventore? Iste
                        modi, quia mollitia nostrum vero sint sit consectetur
                        tempore dicta ullam! Deleniti aliquam non in? Architecto
                        doloribus ratione ut vero incidunt dicta adipisci.
                    </div>
                </AccordionItem>
                <AccordionItem
                    title="Accordion Example 1"
                    subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing"
                >
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dolore, facilis. Eos reiciendis facere, recusandae
                        autem placeat aut explicabo mollitia esse nesciunt dolor
                        repudiandae maiores tempore ipsam modi iste, et
                        accusamus magnam voluptates. In minus ducimus, libero
                        nobis quis qui recusandae sint autem doloribus, est
                        deleniti neque suscipit quos quaerat quisquam!
                    </div>
                </AccordionItem>
            </AccordionGroup>
        </MainLayout>
    );
};

export default AccordionPage;
