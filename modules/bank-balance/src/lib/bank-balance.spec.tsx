import { render } from '@testing-library/react';

import BankBalance from './bank-balance';

describe('BankBalance', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BankBalance />);
    expect(baseElement).toBeTruthy();
  });
});
