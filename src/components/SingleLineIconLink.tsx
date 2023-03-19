import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

export interface SingleLineIconLinkInterface {
    title: string;
    link: string;
    icon: string;
    iconAlt: string;
    handleIconClick: MouseEventHandler<HTMLImageElement>;
}

const SingleLineIconLink: React.FC<SingleLineIconLinkInterface> = ({
    title,
    link,
    icon,
    iconAlt,
    handleIconClick,
}) => {
    return (
        <Link
            className="flex justify-between items-center gap-16 px-4 py-4 hover:bg-main_dark cursor-pointer"
            to={link}
        >
            <p>{title}</p>
            <img
                className="w-6 hover:rotate-180 transition-all duration-300"
                src={icon}
                alt={iconAlt}
                onClick={handleIconClick}
            />
        </Link>
    );
};

export default SingleLineIconLink;
