import { useEffect, useState } from 'react';

export interface ILinearLoading {
    start: boolean;
    duration: number;
    handleCallback: Function;
}

const LinearLoading: React.FC<ILinearLoading> = ({
    start,
    duration,
    handleCallback,
}) => {
    const [widthPercentage, setWidthPercentage] = useState(100);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        if (start === true) {
            timer = setInterval(() => {
                setWidthPercentage((current: number) => current - 1);
            }, duration / 100);
            if (widthPercentage <= 0) {
                clearInterval(timer);
            }
        }

        return () => clearInterval(timer);
    }, [start]);

    useEffect(() => {
        if (widthPercentage <= 0) {
            handleCallback();
        }
    }, [widthPercentage]);

    return (
        <div
            className="h-2 bg-primary_light"
            style={{ width: `${widthPercentage}%` }}
        ></div>
    );
};

export default LinearLoading;
