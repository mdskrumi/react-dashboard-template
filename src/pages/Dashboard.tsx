// Icons
import GithubIcon from 'assets/github.svg';
import LinkedInIcon from 'assets/linkedIn.svg';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full">
            <h1>React Dashboard Template</h1>
            <p>
                This is a flexible and responsive dashboard template created
                using some of the latest technologies, including React JS,
                TypeScript, Redux Toolkit, Tailwind CSS, React Router DOM v6,
                and Vite JS.
            </p>
            <h4 className="mt-4">Features</h4>
            <ul>
                <li>Highly customizable and responsive dashboard template</li>
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
            <div className="flex gap-4 mt-4 items-center">
                <h5 className="mt-4">Source code: </h5>
                <a
                    href="https://github.com/mdskrumi/react-dashboard-template"
                    target="_blank"
                >
                    <img className="w-8 h-8" src={GithubIcon} alt="github" />
                </a>
            </div>
            <div className="flex gap-4 mt-4 items-center">
                <h5 className="mt-4">Developer: </h5>
                <a href="https://www.linkedin.com/in/mdskrumi" target="_blank">
                    <img className="w-8 h-8" src={LinkedInIcon} alt="github" />
                </a>{' '}
                <a href="https://github.com/mdskrumi" target="_blank">
                    <img className="w-8 h-8" src={GithubIcon} alt="github" />
                </a>
            </div>
        </div>
    );
};

export default Dashboard;
