import Button from 'components/Button';

export interface IAlertDialog {
    title: string;
    subTitle?: string;

    primaryButtonTitle: string;
    primaryButtonVariant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    primaryButtonClick: Function;

    secondaryButtonTitle?: string;
    secondaryButtonVariant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    secondaryButtonClick?: Function;
}

const AlertDialog: React.FC<IAlertDialog> = ({
    title,
    subTitle,
    primaryButtonTitle,
    primaryButtonVariant = 'primary',
    primaryButtonClick,
    secondaryButtonTitle,
    secondaryButtonVariant = 'primary',
    secondaryButtonClick,
}) => {
    return (
        <div className="bg-main_dark p-5 pb-5 w-[500px]">
            <h3>{title}</h3>
            <p className="pt-2">{subTitle}</p>
            <div className="flex justify-end gap-8 mt-8">
                {secondaryButtonTitle && secondaryButtonClick && (
                    <Button
                        title={secondaryButtonTitle}
                        type="button"
                        variant={secondaryButtonVariant}
                        handleClick={secondaryButtonClick}
                    />
                )}
                <Button
                    title={primaryButtonTitle}
                    type="button"
                    variant={primaryButtonVariant}
                    handleClick={primaryButtonClick}
                />
            </div>
        </div>
    );
};
export default AlertDialog;
