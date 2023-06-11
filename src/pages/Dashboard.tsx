const Dashboard: React.FC = () => {
    return (
        <div className="w-full p-5">
            <div className="grid w-full grid-cols-2 gap-5">
                <h1 className="col-span-2 text-center card p-10">
                    React Dashboard Template
                </h1>
                <p className="card p-10">
                    This is a flexible and responsive dashboard template created
                    using some of the latest technologies, including React JS,
                    TypeScript, Redux Toolkit, Tailwind CSS, React Router DOM
                    v6, and Vite JS.
                </p>
                <ul className="card p-10">
                    <h4 className="mt-4">Features</h4>
                    <li>
                        Highly customizable and responsive dashboard template
                    </li>
                    <li>
                        Built using React JS and TypeScript for efficient
                        development and maintenance
                    </li>
                    <li>Redux Toolkit for efficient state management</li>
                    <li>Tailwind CSS for streamlined styling</li>
                    <li>
                        React Router DOM v6 for easy navigation throughout your
                        application
                    </li>
                    <li>Vite JS for speedy development</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
