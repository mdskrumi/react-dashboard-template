const Footer = () => {
    return (
        <footer className="absolute bottom-5 right-5 md:right-10 flex text-right">
            <p className="text-xs md:text-sm">
                Copyright © 2023{' '}
                <a
                    className="text-primary-500 hover:underline"
                    href="#"
                    target="_blank"
                >
                    React Dashboard
                </a>
            </p>
        </footer>
    );
};

export default Footer;
