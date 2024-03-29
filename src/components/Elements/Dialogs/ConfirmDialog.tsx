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
        <div className="card p-6 w-[95vw] max-w-lg">
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

export default ConfirmAlert;
