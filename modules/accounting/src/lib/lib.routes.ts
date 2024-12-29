import { RouteObject } from 'react-router-dom';
import AccountingBankOperationsBalance from './bank-operations-balance/accounting-bank-operations-balance';

export const BiModulesAccountingRoutes: RouteObject[] = [
  {
    path: 'bank-operations-balance',
    Component: AccountingBankOperationsBalance,
  },
];
