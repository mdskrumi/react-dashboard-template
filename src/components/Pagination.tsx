import { useEffect, useState } from 'react';

export interface PaginationInterface {
    currentPage: number;
    setCurrentPage: Function;
    maxPages: number;
}

const Pagination: React.FC<PaginationInterface> = ({
    currentPage,
    setCurrentPage,
    maxPages = 0,
}) => {
    const [items, setItems] = useState<any>([]);
    useEffect(() => {
        setItems([]);
        const lowerRange = Math.max(currentPage - 2, 1);
        const bonusFromLower = Math.abs(currentPage - 2 - lowerRange);

        const higherRange = Math.min(currentPage + 2, maxPages);
        const bonusFromHigher = Math.abs(currentPage + 2 - higherRange);

        if (lowerRange > 1) {
            setItems((elements: any) => [
                ...elements,
                <div
                    key={1}
                    className={
                        1 === currentPage
                            ? 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary_dark font-bold'
                            : 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary hover:bg-primary_light shadow-sm'
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
                        'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary'
                    }
                >
                    {'...'}
                </div>,
            ]);
        }

        for (
            let number = Math.max(1, lowerRange - bonusFromHigher);
            number <= Math.min(higherRange + bonusFromLower, maxPages);
            number++
        ) {
            setItems((elements: any) => [
                ...elements,
                <div
                    key={number}
                    className={
                        number === currentPage
                            ? 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary_dark font-bold'
                            : 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary hover:bg-primary_light shadow-sm'
                    }
                    onClick={() => {
                        setCurrentPage(number);
                    }}
                >
                    {number}
                </div>,
            ]);
        }

        if (higherRange < maxPages) {
            setItems((elements: any) => [
                ...elements,
                <div
                    key={'....'}
                    className={
                        'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary'
                    }
                >
                    {'...'}
                </div>,
                <div
                    key={maxPages}
                    className={
                        maxPages === currentPage
                            ? 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary_dark font-bold'
                            : 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary hover:bg-primary_light shadow-sm'
                    }
                    onClick={() => {
                        setCurrentPage(maxPages);
                    }}
                >
                    {maxPages}
                </div>,
            ]);
        }
    }, [currentPage, maxPages]);

    const nextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div
            className={`flex flex-col justify-center items-center p-8 ${
                maxPages < 2 ? ' hidden ' : ''
            }`}
        >
            <div className="flex">
                <div
                    className="cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary hover:bg-primary_light"
                    onClick={prevPage}
                >
                    &lsaquo;
                </div>
                {items}

                <div
                    className="cursor-pointer text-base text-center px-[10px] pt-[9px] rounded-full h-10 w-fit min-w-[2.5rem] m-1 bg-primary hover:bg-primary_light"
                    onClick={nextPage}
                >
                    &rsaquo;
                </div>
            </div>
        </div>
    );
};

export default Pagination;
