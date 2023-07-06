import Pagination from 'components/Elements/Pagination';
import MainLayout from 'layout/MainLayout';
import { useState } from 'react';

const PaginationPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <MainLayout
            title="Pagination"
            breadcrumbs={[{ title: 'Pagination', link: '#', disabled: true }]}
        >
            <div className="grid grid-cols-2 gap-6">
                <h6>Without Message</h6>
                <h6>With Message</h6>
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={10}
                    numberOfPages={10}
                    setCurrentPage={setCurrentPage}
                    hideMessage
                />
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={10}
                    numberOfPages={10}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </MainLayout>
    );
};

export default PaginationPage;
