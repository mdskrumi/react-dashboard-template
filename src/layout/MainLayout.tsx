import Footer from 'components/Footer';
import { ReactNode } from 'react';
import { BiHome } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

export interface IBreadcrumb {
    title: string;
    link: string;
    disabled?: boolean;
}

export interface IMainLayout {
    title: string;
    breadcrumbs: IBreadcrumb[];
    hideBreadcrumbs?: boolean;
    hasBackButton?: boolean;
    backButtonTitle?: string;
    children?: ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({
    title,
    breadcrumbs,
    hideBreadcrumbs = false,
    hasBackButton = false,
    backButtonTitle,
    children,
}) => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-[calc(100vh-64px)] w-full pl-2 pr-2 pt-2">
            <header className="mb-3 flex flex-col gap-1 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    {hasBackButton && (
                        <p
                            className="caption cursor-pointer"
                            onClick={() => navigate(-1)}
                        >
                            {`< ${backButtonTitle || 'Back'}`}
                        </p>
                    )}
                    <h1 className="text-xl">{title}</h1>
                </div>
                {!hideBreadcrumbs && (
                    <div className="flex items-center gap-1">
                        <Link to={'/'} key={0}>
                            <BiHome className="hover:scale-105" />
                        </Link>
                        {breadcrumbs.map((breadcrumb, index) => (
                            <div key={index + 1}>
                                <span>/</span>
                                <Link
                                    to={breadcrumb.link}
                                    className={`${
                                        breadcrumb.disabled
                                            ? 'cursor-not-allowed'
                                            : 'cursor-pointer'
                                    }`}
                                >
                                    {breadcrumb.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </header>
            <main className="pb-16">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
