import { render } from '@testing-library/react';

import MiniDrawer from './MiniDrawer';

describe('MiniDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MiniDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
