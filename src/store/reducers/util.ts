import { createSlice } from '@reduxjs/toolkit';

export interface UtilState {
    theme: 'light' | 'dark';
    isLoading: boolean;
    isSidebarOpen: boolean;
    isNotificationBarOpen: boolean;
}

const initialState: UtilState = {
    theme: 'light',
    isLoading: false,
    isSidebarOpen: window.innerWidth < 1024 ? false : true,
    isNotificationBarOpen: false,
};

const utilSliece = createSlice({
    name: 'util',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
        setNotificationBarOpen: (state, action) => {
            state.isNotificationBarOpen = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const {
    setLoading,
    setSidebarOpen,
    setNotificationBarOpen,
    toggleTheme,
} = utilSliece.actions;

export default utilSliece.reducer;
