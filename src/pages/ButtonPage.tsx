import Button from 'components/Button';

// Icons
import DashboardIcon from 'assets/dashboard.svg';

const ButtonPage: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex gap-4 justify-center">
                <Button title="Primary" variant="primary" />
                <Button
                    title="Primary with Icon"
                    variant="primary"
                    icon={DashboardIcon}
                />
            </div>
            <div className="flex gap-4 mt-10 justify-center">
                <Button title="Secondary" variant="secondary" />
                <Button
                    title="Secondary with Icon"
                    variant="secondary"
                    icon={DashboardIcon}
                />
            </div>
            <div className="flex gap-4 mt-10 justify-center">
                <Button title="Ghost" variant="ghost" />
                <Button
                    title="Ghost with Icon"
                    variant="ghost"
                    icon={DashboardIcon}
                />
            </div>
            <div className="flex gap-4 mt-10 justify-center">
                <Button title="Danger" variant="danger" />
                <Button
                    title="Danger with Icon"
                    variant="danger"
                    icon={DashboardIcon}
                />
            </div>
            <div className="flex gap-4 mt-10 justify-center">
                <Button title="Disabled" disabled />
                <Button
                    title="Disabled with Icon"
                    icon={DashboardIcon}
                    disabled
                />
            </div>
        </div>
    );
};

export default ButtonPage;
