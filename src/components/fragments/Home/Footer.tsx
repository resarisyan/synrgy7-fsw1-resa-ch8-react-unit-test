import React from 'react';
import logo from '../../../assets/images/logo.png';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className="grid grid-cols-1 lg:grid-cols-6 mt-32 mb-12 gap-5 px-5 lg:px-16"
      data-testid="footer"
    >
      <div className="flex flex-col gap-3 col-span-2">
        <p className="text-dark text-sm leading-relaxed">
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </p>
        <p className="text-dark text-sm leading-relaxed">
          binarcarrental@gmail.com
        </p>
        <p className="text-dark text-sm leading-relaxed">081-233-334-808</p>
      </div>
      <div className="flex flex-col gap-3">
        <a href="#" className="text-dark text-sm leading-relaxed">
          Our Service
        </a>
        <a href="#" className="text-dark text-sm leading-relaxed">
          Why Us
        </a>
        <a href="#" className="text-dark text-sm leading-relaxed">
          Testimonial
        </a>
        <a href="#" className="text-dark text-sm leading-relaxed">
          Faq
        </a>
      </div>
      <div className="flex flex-col gap-3 col-span-2">
        <p className="text-dark text-sm leading-relaxed">Connect with us</p>
        <div className="flex gap-3" data-aos="zoom-in">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary-color-4 flex justify-center items-center"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-white"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary-color-4 flex justify-center items-center"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-white"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary-color-4 flex justify-center items-center"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-white"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary-color-4 flex justify-center items-center"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-white"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary-color-4 flex justify-center items-center"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube text-white"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-dark text-sm leading-relaxed">
          Copyright Binar 2022
        </p>
        <img
          className="h-8 w-28"
          src={logo}
          alt="logo-footer"
          data-aos="zoom-in"
        />
      </div>
    </footer>
  );
};

export default Footer;
