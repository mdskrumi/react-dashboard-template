const NoDataFound: React.FC<{ message?: string }> = ({ message }) => (
    <div className="bg-ui dark:bg-ui-dark p-4 min-w-max font-bold text-base sm:text-lg md:text-2xl abs-center">
        <h4 className="opacity-80">{message ? message : 'No Data Found'}</h4>
    </div>
);
export default NoDataFound;
