import Loading from '@/components/elements/Loading';
import { render, screen } from '@testing-library/react';

describe('Loading', () => {
  it('should render the loading component', () => {
    render(<Loading size="md" />);
    const loading = screen.getByTestId('loading');
    expect(loading).toBeInTheDocument();
  });
});
