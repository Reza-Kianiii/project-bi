import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const BankOperationsBalanceApi = createApi({
  reducerPath: 'BankBalance',
  baseQuery: fetchBaseQuery({
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Accept', '*/*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBankBalance: builder.query<any, void>({
      query: () => `/api/accounting/bank-operation-balance/?format=json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBankBalanceQuery } = BankOperationsBalanceApi;
