import Button from 'components/Elements/Button';

export interface IConfirmAlert {
    title: string;
    subTitle: string;
    type: 'normal' | 'danger';
    primaryActionTitle: string;
    onPrimaryActionClick: Function;
    secondaryActionTitle: string;
    onSecondaryActionClick: Function;
}

const ConfirmAlert: React.FC<IConfirmAlert> = ({
    title,
    subTitle,
    type = 'normal',
    primaryActionTitle,
    onPrimaryActionClick,
    secondaryActionTitle,
    onSecondaryActionClick,
}) => {
    return (
        <div className="card w-[95vw] max-w-lg p-6">
            <h2 className="mb-4 text-lg font-semibold">{title}</h2>
            <p className="mb-6">{subTitle}</p>

            <div className="flex justify-end gap-2">
                <Button
                    title={primaryActionTitle}
                    variant={type === 'normal' ? 'ghost' : 'danger'}
                    handleClick={onPrimaryActionClick}
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

export default ConfirmAlert;
