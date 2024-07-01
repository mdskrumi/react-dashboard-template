import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export interface IPagination {
    itemsPerPage: number;
    totalItem?: number;
    numberOfPages: number;
    currentPage: number;
    setCurrentPage: Function;
    hideMessage?: boolean;
    className?: string;
}

const Pagination: React.FC<IPagination> = ({
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItem,
    numberOfPages,
    hideMessage = false,
    className,
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
                            ? 'card cursor-pointer rounded bg-light-primary200 px-4 py-2 hover:scale-110 dark:bg-dark-primary200'
                            : 'card cursor-pointer rounded px-4 py-2 hover:scale-110'
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
                        'card cursor-pointer rounded px-4 py-2 hover:scale-110'
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
                            ? 'card cursor-pointer rounded bg-light-primary200 px-4 py-2 text-white hover:scale-110 dark:bg-dark-primary200'
                            : 'card cursor-pointer rounded px-4 py-2 hover:scale-110'
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
                <div key={'....'} className={'card rounded px-4 py-2'}>
                    {'...'}
                </div>,
                <div
                    key={numberOfPages}
                    className={
                        numberOfPages === currentPage
                            ? 'card cursor-pointer rounded bg-light-primary200 px-4 py-2 text-white hover:scale-110 dark:bg-dark-primary200'
                            : 'card cursor-pointer rounded px-4 py-2 hover:scale-110'
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
        <div className={className}>
            <div className="flex flex-col items-center font-semibold lg:flex-row">
                {!hideMessage && (
                    <p className="caption">
                        {`Showing ${
                            (currentPage - 1) * itemsPerPage + 1
                        } to ${Math.min(
                            currentPage * itemsPerPage,
                            totalItem ? totalItem : currentPage * itemsPerPage
                        )} of ${totalItem} entires`}
                    </p>
                )}

                <nav
                    aria-label="Pagination"
                    className="mt-8 flex items-center justify-center gap-1 lg:mt-0"
                >
                    <a
                        href="#"
                        className="invisible cursor-pointer rounded px-4 py-2 hover:scale-110 sm:visible"
                        onClick={prevPage}
                    >
                        <AiOutlineArrowLeft />
                    </a>

                    {items}

                    <a
                        href="#"
                        className="invisible cursor-pointer rounded px-4 py-2 hover:scale-110 sm:visible"
                        onClick={nextPage}
                    >
                        <AiOutlineArrowRight />
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;
