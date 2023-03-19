import { Link } from 'react-router-dom';
import { BreadcrumbInterface } from 'types';

const Breadcrumb: React.FC<BreadcrumbInterface> = ({ list }) => {
    return (
        <div className="flex">
            {list.map((item, index) => (
                <div key={item.link}>
                    <Link
                        className="capitalize text-sm font-semibold hover:text-primary_light"
                        to={item.link}
                    >
                        {item.title}
                    </Link>
                    {list?.length !== index + 1 && (
                        <span className="mx-2">{'/'}</span>
                    )}
                </div>
            ))}
        </div>
    );
};
export default Breadcrumb;
