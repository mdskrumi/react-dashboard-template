const storage = {
    getItem: (key: string) => {
        if (typeof window === 'undefined') {
            return Promise.resolve(null);
        }

        return Promise.resolve(window.localStorage.getItem(key));
    },
    setItem: (key: string, value: string) => {
        if (typeof window === 'undefined') {
            return Promise.resolve(value);
        }

        window.localStorage.setItem(key, value);
        return Promise.resolve(value);
    },
    removeItem: (key: string) => {
        if (typeof window === 'undefined') {
            return Promise.resolve();
        }

        window.localStorage.removeItem(key);
        return Promise.resolve();
    },
};

export default storage;
