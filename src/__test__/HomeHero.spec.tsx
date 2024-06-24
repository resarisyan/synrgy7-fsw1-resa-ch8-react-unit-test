import Hero from '@/components/fragments/Home/Hero';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import carImageMock from '@/assets/images/car.png';
jest.mock('@/assets/images/car.png', () => 'mocked-car-image');

describe('Hero Component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    expect(
      screen.getByText('Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)')
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Selamat datang di Binar Car Rental/i)
    ).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Sewa Sekarang/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/search');

    const carImage = screen.getByAltText('car');
    expect(carImage).toBeInTheDocument();
    // expect(carImage).toHaveAttribute('src', 'mocked-car-image');
  });
  it('has correct heading text', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(
      'Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)'
    );
  });

  it('has correct paragraph text', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const paragraph = screen.getByText(/Selamat datang di Binar Car Rental/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders a link to /search', () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const link = screen.getByRole('link', { name: /Sewa Sekarang/i });
    expect(link).toHaveAttribute('href', '/search');
  });

  //   it('renders the car image with correct src attribute', () => {
  //     render(
  //       <Router>
  //         <Hero />
  //       </Router>
  //     );
  //     const carImage = screen.getByAltText('car');
  //     expect(carImage).toHaveAttribute('src', carImageMock);
  //   });
});
