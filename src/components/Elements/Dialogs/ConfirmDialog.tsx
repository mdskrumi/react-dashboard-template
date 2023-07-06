import Button from 'components/Elements/Button';

export interface IConfirmDialog {
    title: string;
    subTitle: string;
    type: 'normal' | 'danger';
    primaryActionTitle: string;
    onPrimaryActionClick: Function;
    secondaryActionTitle: string;
    onSecondaryActionClick: Function;
}

const ConfirmDialog: React.FC<IConfirmDialog> = ({
    title,
    subTitle,
    type = 'normal',
    primaryActionTitle,
    onPrimaryActionClick,
    secondaryActionTitle,
    onSecondaryActionClick,
}) => {
    return (
        <div className="card px-10 py-8">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <p className="mb-6">{subTitle}</p>

            <div className="flex gap-2 justify-end">
                <Button
                    title={primaryActionTitle}
                    variant={type === 'normal' ? 'ghost' : 'danger'}
                    handleClick={onPrimaryActionClick}
                    className="text-text-dark"
                />
                <Button
                    title={secondaryActionTitle}
                    variant="ghost"
                    handleClick={onSecondaryActionClick}
                />
            </div>
        </div>
    );
};

export default ConfirmDialog;
