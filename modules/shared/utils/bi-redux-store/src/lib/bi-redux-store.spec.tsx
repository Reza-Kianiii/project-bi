import { render } from '@testing-library/react';

import BiReduxStore from './bi-redux-store';

describe('BiReduxStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BiReduxStore />);
    expect(baseElement).toBeTruthy();
  });
});
