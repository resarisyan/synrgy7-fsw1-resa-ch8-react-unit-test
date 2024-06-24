import Footer from '@/components/fragments/Home/Footer';
import { render, screen } from '@testing-library/react';
jest.mock('@/assets/images/logo.png', () => 'mocked-logo-image');

describe('Footer', () => {
  it('should render the footer component', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should display the correct address, email, and phone number', () => {
    render(<Footer />);
    expect(
      screen.getByText('Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000')
    ).toBeInTheDocument();
    expect(screen.getByText('binarcarrental@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('081-233-334-808')).toBeInTheDocument();
  });

  it('should render service links', () => {
    render(<Footer />);
    expect(screen.getByText('Our Service')).toBeInTheDocument();
    expect(screen.getByText('Why Us')).toBeInTheDocument();
    expect(screen.getByText('Testimonial')).toBeInTheDocument();
    expect(screen.getByText('Faq')).toBeInTheDocument();
  });

  it('should render social media icons', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument();
  });
});
