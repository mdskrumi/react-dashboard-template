import { createSlice } from '@reduxjs/toolkit';

export interface UtilState {
    isLoading: boolean;
    isSidebarOpen: boolean;
}

const initialState: UtilState = {
    isLoading: false,
    isSidebarOpen: window.innerWidth < 767 ? false : true,
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
    },
});

export const { setLoading, setSidebarOpen } = utilSliece.actions;

export default utilSliece.reducer;
