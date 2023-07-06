import { IoIosWarning } from 'react-icons/io';
import MainLayout from 'layout/MainLayout';
import Alert from 'components/Elements/Alert';

const AlertPage = () => {
    return (
        <MainLayout
            title="Alert"
            breadcrumbs={[{ title: 'Alert', link: '#', disabled: true }]}
        >
            <div className="grid grid-cols-1 gap-4">
                <Alert
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestiae pariatur corrupti, nihil libero sit doloremque? Non reiciendis fugiat cumque tenetur alias provident quaerat itaque architecto harum."
                    renderIcon={() => (
                        <IoIosWarning className="min-w-[12px] min-h-[12px]" />
                    )}
                    variant="success"
                />
                <Alert
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestiae pariatur corrupti, nihil libero sit doloremque? Non reiciendis fugiat cumque tenetur alias provident quaerat itaque architecto harum."
                    renderIcon={() => (
                        <IoIosWarning className="min-w-[12px] min-h-[12px]" />
                    )}
                    variant="warning"
                />
                <Alert
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestiae pariatur corrupti, nihil libero sit doloremque? Non reiciendis fugiat cumque tenetur alias provident quaerat itaque architecto harum."
                    renderIcon={() => (
                        <IoIosWarning className="min-w-[12px] min-h-[12px]" />
                    )}
                    variant="fail"
                />

                <Alert
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestiae pariatur corrupti, nihil libero sit doloremque? Non reiciendis fugiat cumque tenetur alias provident quaerat itaque architecto harum."
                    renderIcon={() => (
                        <IoIosWarning className="min-w-[12px] min-h-[12px]" />
                    )}
                    variant="normal"
                />
            </div>
        </MainLayout>
    );
};

export default AlertPage;
