import { BiHome } from 'react-icons/bi';

const SamplePage: React.FC = () => {
    return (
        <div className="w-full min-h-[calc(100vh-64px)] pt-5 pl-5 pr-5 relative">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-1 mb-6">
                <h1 className="text-xl">Sample Page</h1>
                <div className="flex items-center gap-1">
                    <BiHome />
                    <span>/</span>
                    <span>Sample Page</span>
                </div>
            </div>
            <main></main>

            <footer className="absolute bottom-5 right-10 flex text-right">
                <p className="text-sm">
                    Copyright © 2023{' '}
                    <a
                        className="text-primary-500 hover:underline"
                        href="#"
                        target="_blank"
                    >
                        React Dashboard Template
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default SamplePage;
