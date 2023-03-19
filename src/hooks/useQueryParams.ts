import { useEffect, useState } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryParams, setQueryParams] = useState<any>();

    useEffect(() => {
        setQueryParams((params: any) => {
            const obj = { ...params };
            if (searchParams.toString())
                searchParams
                    .toString()
                    .split('&')
                    .forEach((query) => {
                        const key = query.split('=')[0];
                        const value = query.split('=')[1];
                        obj[key] = value;
                    });
            return obj;
        });
    }, [searchParams]);

    const setQueryParam = (key: string, value: string) => {
        const newParams = queryParams;
        newParams[key] = value;
        setSearchParams(createSearchParams(newParams));
    };
    const deleteQueryParam = (key: string) => {
        const newParams = queryParams;
        delete newParams[key];
        setSearchParams(createSearchParams(newParams));
    };

    return [queryParams, setQueryParam, deleteQueryParam];
};

export default useQueryParams;
