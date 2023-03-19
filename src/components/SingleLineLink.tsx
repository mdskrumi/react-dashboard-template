import { Link } from 'react-router-dom';

export interface SingleLineLinkInterface {
    title: string;
    link: string;
}

const SingleLineLink: React.FC<SingleLineLinkInterface> = ({ title, link }) => (
    <Link
        className="p-4 border-b border-main_dark hover:bg-main_dark"
        to={link}
    >
        {title}
    </Link>
);

export default SingleLineLink;
