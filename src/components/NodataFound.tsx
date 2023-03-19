export interface NoDataFoundInterface {
    message?: string;
}

const NoDataFound = ({ message = 'No Data Found' }) => (
    <div className="text-center p-32">
        <h4>{message}</h4>
    </div>
);
export default NoDataFound;
