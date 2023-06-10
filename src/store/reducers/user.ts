import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    token?: string | null;
}

const initialState: UserState = {
    token: null,
};

const userSliece = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log({ action });
            state.token = action.payload?.token;
        },
        clearUser: () => initialState,
    },
});

export const { clearUser, login } = userSliece.actions;

export default userSliece.reducer;
