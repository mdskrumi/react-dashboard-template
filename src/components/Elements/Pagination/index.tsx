import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export interface IPagination {
    itemsPerPage: number;
    numberOfPages: number;
    currentPage: number;
    setCurrentPage: Function;
    hideMessage?: boolean;
}

const Pagination: React.FC<IPagination> = ({
    currentPage,
    setCurrentPage,
    itemsPerPage,
    numberOfPages,
    hideMessage = false,
}) => {
    const [items, setItems] = useState<any>([]);

    useEffect(() => {
        setItems([]);
        const lowerRange = Math.max(currentPage - 2, 1);
        const bonusFromLower = Math.abs(currentPage - 2 - lowerRange);

        const higherRange = Math.min(currentPage + 2, numberOfPages);
        const bonusFromHigher = Math.abs(currentPage + 2 - higherRange);

        if (lowerRange > 1) {
            setItems((elements: any) => [
                ...elements,
                <div
                    key={1}
                    className={
                        1 === currentPage
                            ? 'px-4 py-2 rounded card cursor-pointer hover:scale-110 bg-primary'
                            : 'px-4 py-2 rounded card cursor-pointer hover:scale-110'
                    }
                    onClick={() => {
                        setCurrentPage(1);
                    }}
                >
                    {1}
                </div>,
                <div
                    key={'...'}
                    className={
                        'px-4 py-2 rounded card cursor-pointer hover:scale-110'
                    }
                >
                    {'...'}
                </div>,
            ]);
        }

        for (
            let number = Math.max(1, lowerRange - bonusFromHigher);
            number <= Math.min(higherRange + bonusFromLower, numberOfPages);
            number++
        ) {
            setItems((elements: any) => [
                ...elements,
                <div
                    key={number}
                    className={
                        number === currentPage
                            ? 'px-4 py-2 rounded card cursor-pointer hover:scale-110 bg-primary'
                            : 'px-4 py-2 rounded card cursor-pointer hover:scale-110'
                    }
                    id={`page-${number}`}
                    onClick={() => {
                        setCurrentPage(number);
                    }}
                >
                    {number}
                </div>,
            ]);
        }

        if (higherRange < numberOfPages) {
            setItems((elements: any) => [
                ...elements,
                <div key={'....'} className={'px-4 py-2 rounded card'}>
                    {'...'}
                </div>,
                <div
                    key={numberOfPages}
                    className={
                        numberOfPages === currentPage
                            ? 'px-4 py-2 rounded card cursor-pointer hover:scale-110 bg-primary'
                            : 'px-4 py-2 rounded card cursor-pointer hover:scale-110'
                    }
                    onClick={() => {
                        setCurrentPage(numberOfPages);
                    }}
                >
                    {numberOfPages}
                </div>,
            ]);
        }
    }, [currentPage, numberOfPages]);

    const nextPage = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center">
            {!hideMessage && (
                <p className="caption">
                    {`Showing ${(currentPage - 1) * itemsPerPage + 1} to ${
                        currentPage * itemsPerPage
                    } of ${numberOfPages * itemsPerPage} entires`}
                </p>
            )}

            <nav
                aria-label="Pagination"
                className="flex justify-center items-center mt-8 lg:mt-0 gap-1"
            >
                <a
                    href="#"
                    className="px-4 py-2 rounded cursor-pointer invisible sm:visible hover:scale-110"
                    onClick={prevPage}
                >
                    <AiOutlineArrowLeft />
                </a>

                {items}

                <a
                    href="#"
                    className="px-4 py-2 rounded cursor-pointer invisible sm:visible hover:scale-110"
                    onClick={nextPage}
                >
                    <AiOutlineArrowRight />
                </a>
            </nav>
        </div>
    );
};

export default Pagination;
