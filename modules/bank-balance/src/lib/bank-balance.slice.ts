import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const BankBalanceApi = createApi({
  reducerPath: 'BankBalance',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bi.edarisoft.ir/api/' }),
  endpoints: (builder) => ({
    getBankBalance: builder.query<any, void>({
      query: () => `/accounting/bank-balance/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBankBalanceQuery } = BankBalanceApi;
