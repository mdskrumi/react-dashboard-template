import { createSlice } from '@reduxjs/toolkit';

export interface UtilState {
    isLoading: boolean;
    isSidebarOpen: boolean;
    isNotificationBarOpen: boolean;
}

const initialState: UtilState = {
    isLoading: false,
    isSidebarOpen: window.innerWidth < 767 ? false : true,
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
    },
});

export const { setLoading, setSidebarOpen, setNotificationBarOpen } =
    utilSliece.actions;

export default utilSliece.reducer;
