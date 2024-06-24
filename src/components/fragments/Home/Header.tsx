import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { useAuth } from '../../../context/useAuth';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { getUser } = useAuth();

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.style.display === 'none'
        ? (mobileMenu.style.display = 'block')
        : (mobileMenu.style.display = 'none');
    }
  };

  const scrollToSection = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <nav className="bg-primary-color-0 fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-28" src={logo} alt="logo-header" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#our-service"
                    className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                    onClick={() => scrollToSection('our-service')}
                  >
                    Our Service
                  </a>
                  <a
                    href="#why-us"
                    className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                    onClick={() => scrollToSection('why-us')}
                  >
                    Why Us
                  </a>
                  <a
                    href="#testimony"
                    className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                    onClick={() => scrollToSection('testimony')}
                  >
                    Testimonial
                  </a>
                  <a
                    href="#faq"
                    className="nav-link rounded-md px-3 py-2 text-sm font-medium"
                    onClick={() => scrollToSection('faq')}
                  >
                    Faq
                  </a>
                  {getUser() ? (
                    <Link
                      to="/dashboard"
                      className="btn bg-secondary-color-4 text-white"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/register"
                      className="btn bg-secondary-color-4 text-white"
                    >
                      Register
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="sm:hidden flex items-center">
              <button
                type="button"
                className="btn-nav relative inline-flex items-center justify-center rounded-md p-2 text-[#222222] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="sm:hidden fixed inset-0 items-start justify-end z-40"
          id="mobile-menu"
          style={{ display: 'none' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="bg-white w-64 h-full transform ease-in-out duration-300 absolute right-0 py-2 px-4">
            <div className="flex justify-between mb-2">
              <img className="h-8 w-28" src={logo} alt="logo-navbar" />
              <button
                type="button"
                className="btn-nav relative inline-flex items-center justify-center rounded-md p-2 text-[#222222] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close main menu</span>
                <div className="flex-shrink-0 flex items-center"></div>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <a
                  href="#our-service"
                  className="nav-link block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                  onClick={() => scrollToSection('our-service')}
                >
                  Our Service
                </a>
                <a
                  href="#why-us"
                  className="nav-link block rounded-md px-3 py-2 text-base font-medium"
                  onClick={() => scrollToSection('why-us')}
                >
                  Why Us
                </a>
                <a
                  href="#testimony"
                  className="nav-link block rounded-md px-3 py-2 text-base font-medium"
                  onClick={() => scrollToSection('testimony')}
                >
                  Testimonial
                </a>
                <a
                  href="#faq"
                  className="nav-link block rounded-md px-3 py-2 text-base font-medium"
                  onClick={() => scrollToSection('faq')}
                >
                  Faq
                </a>
                {getUser() ? (
                  <Link
                    to="/dashboard"
                    className="btn bg-secondary-color-4 text-white"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="btn bg-secondary-color-4 text-white"
                  >
                    Register
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div
            className="sm:hidden flex-shrink-0 w-14"
            aria-hidden="true"
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
