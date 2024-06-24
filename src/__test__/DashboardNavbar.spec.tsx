import Navbar from '@/components/fragments/Dashboard/Navbar';
import { render, screen } from '@testing-library/react';

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should render the Admin Panel title', () => {
    render(<Navbar />);
    expect(screen.getByText('Admin Panel')).toBeInTheDocument();
  });

  it('should render the Dashboard link', () => {
    render(<Navbar />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('should render the Car link', () => {
    render(<Navbar />);
    expect(screen.getByText('Car')).toBeInTheDocument();
  });

  it('should have the correct links for Dashboard and Car', () => {
    render(<Navbar />);
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute(
      'href',
      '/dashboard'
    );
    expect(screen.getByText('Car').closest('a')).toHaveAttribute(
      'href',
      '/car'
    );
  });
});
