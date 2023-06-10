import SearchBar from 'components/SearchBar';

const FilterPage: React.FC = () => {
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
        </div>
    );
};

export default FilterPage;
