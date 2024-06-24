import React, { useEffect, useState } from 'react';
import Header from '../fragments/Home/Header';
import Footer from '../fragments/Home/Footer';
import AOS from 'aos';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    AOS.init();
    const spinnerTimeout = setTimeout(() => {
      setShowSpinner(false);
    }, 500);

    return () => clearTimeout(spinnerTimeout);
  }, []);

  return (
    <>
      {showSpinner ? (
        <div
          id="spinner"
          className="fixed inset-0 flex justify-center items-center bg-white"
        >
          <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>
      ) : (
        <main className="scroll-smooth">
          <Header />
          {children}
          <Footer />
        </main>
      )}
    </>
  );
};

export default HomeLayout;
