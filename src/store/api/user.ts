import dashboardAPI from './index';

export const userAPI = dashboardAPI.injectEndpoints({
    endpoints: (builder) => ({
        userSetPassword: builder.mutation<
            any,
            { email: string; password: string; token: string }
        >({
            query: ({ email, password, token }) => ({
                url: `user/set-password/${token}`,
                method: 'POST',
                body: { email, password },
            }),
        }),
    }),
});

export const { useUserSetPasswordMutation } = userAPI;
