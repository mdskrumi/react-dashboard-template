const NoDataFound: React.FC<{ message?: string }> = ({ message }) => (
    <div className="abs-center min-w-max bg-light-primary50 p-4 text-base font-bold dark:bg-dark-primary50 sm:text-lg md:text-2xl">
        <h4 className="opacity-80">{message ? message : 'No Data Found'}</h4>
    </div>
);
export default NoDataFound;
