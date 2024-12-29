import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
// import { BankBalanceApi } from '@bi/bank-balance';
import { BankOperationsBalanceApi } from '@bi/accounting';
export const store = configureStore({
  reducer: {
    [BankOperationsBalanceApi.reducerPath]: BankOperationsBalanceApi.reducer,
    // Add the generated reducer as a specific top-level slice
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BankOperationsBalanceApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
