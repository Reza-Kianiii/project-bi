import { render } from '@testing-library/react';

import AccountingBankOperationsBalance from './accounting-bank-operations-balance';

describe('AccountingBankOperationsBalance', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountingBankOperationsBalance />);
    expect(baseElement).toBeTruthy();
  });
});
