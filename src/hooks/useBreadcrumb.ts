import { useLocation } from 'react-router-dom';

const useBreadcrumb = () => {
    const location = useLocation();

    const urlParts = location.pathname.split('/');

    const getUrl = (till: number) => {
        let url = '';
        for (let i = 1; i <= till; i++) {
            url += `/${urlParts[i]}`;
        }
        return url;
    };

    const getUrlTitle = (at: number) => {
        return urlParts[at]
            .replaceAll('%20', ' ')
            .replaceAll('_', ' ')
            .replaceAll('-', ' ');
    };

    return { getUrl, getUrlTitle };
};

export default useBreadcrumb;
