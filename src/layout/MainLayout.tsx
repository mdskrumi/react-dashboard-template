import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';

import Footer from 'components/footer';

export interface IBreadcrumb {
    title: string;
    link: string;
    disabled?: boolean;
}

export interface IMainLayout {
    title: string;
    breadcrumbs: IBreadcrumb[];
    hasBackButton?: boolean;
    backButtonTitle?: string;
    children?: ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({
    title,
    breadcrumbs,
    hasBackButton = false,
    backButtonTitle,
    children,
}) => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-[calc(100vh-64px)] pt-5 pl-5 pr-5 relative">
            <header className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-1 mb-6">
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
                <div className="flex items-center gap-1">
                    <Link to={'/'}>
                        <BiHome />
                    </Link>
                    {breadcrumbs.map((breadcrumb) => (
                        <>
                            <span>/</span>
                            <Link
                                to={breadcrumb.link}
                                className={`${
                                    breadcrumb.disabled
                                        ? 'cursor-not-allowed text-text dark:text-text-dark'
                                        : 'cursor-pointer'
                                }`}
                            >
                                {breadcrumb.title}
                            </Link>
                        </>
                    ))}
                </div>
            </header>
            <main className="pb-16">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
