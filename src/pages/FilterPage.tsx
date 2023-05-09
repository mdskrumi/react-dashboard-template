import useQueryParams from 'hooks/useQueryParams';

import AlphabetFilter from 'components/AlphabetFilter';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';

const FilterPage: React.FC = () => {
    const [queryParams, setQueryParam] = useQueryParams();

    const handleAlphabetChange = (alpha: string) => {
        setQueryParam('startsWith', alpha);
    };

    const handlePageChange = (page: string) => {
        setQueryParam('page', page);
    };

    return (
        <div className="w-full">
            <SearchBar
                className="max-w-md m-auto"
                placeholder="Search"
                delay={500}
                callBackFunction={(text: string) =>
                    alert(`You have searched ${text}`)
                }
            />

            <AlphabetFilter
                currentAlphabet={queryParams?.startsWith}
                setCurrentAlphabet={handleAlphabetChange}
            />

            <Pagination
                currentPage={parseInt(queryParams?.page) || 1}
                setCurrentPage={handlePageChange}
                maxPages={10}
            />
        </div>
    );
};

export default FilterPage;
