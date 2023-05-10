import NotificationGreen from 'assets/alert-green.svg';
import NotificationYellow from 'assets/alert-yellow.svg';
import NotificationRed from 'assets/alert-red.svg';
import NotificationGrey from 'assets/alert-grey.svg';

export interface INotificationTile {
    title: string;
    content: string;
    date: string;
    varient: 'green' | 'yellow' | 'red' | 'read';
}

const NotificationTile: React.FC<INotificationTile> = ({
    title,
    content,
    date,
    varient = 'read',
}) => {
    return (
        <div className="min-h-[64px] pt-2 pb-2 flex-col hover:bg-main items-start">
            <div className="flex items-center mr-2">
                <img
                    className="mr-2 w-7 h-7"
                    src={
                        varient === 'green'
                            ? NotificationGreen
                            : varient === 'yellow'
                            ? NotificationYellow
                            : varient === 'red'
                            ? NotificationRed
                            : NotificationGrey
                    }
                    alt="alert"
                />
                <div className="font-semibold">{title}</div>
                <caption className="ml-auto">{date}</caption>
            </div>
            <p className="text-justify m-2">{content}</p>
        </div>
    );
};

export default NotificationTile;
