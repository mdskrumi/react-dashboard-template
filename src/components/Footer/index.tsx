const Footer = () => {
    return (
        <footer className="absolute bottom-5 right-5 flex text-right md:right-10">
            <p className="text-xs md:text-sm">
                {`Copyright © ${new Date().getFullYear()} `}
                <a href="#" target="_blank">
                    {import.meta.env.DASHBOARD_SITE_NAME}
                </a>
            </p>
        </footer>
    );
};

export default Footer;
