import React from 'react';
import { Link } from 'react-router-dom';
import carImage from '../../../assets/images/img_car.png';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="bg-primary-color-0 mx-auto pt-24">
      <div className="flex flex-wrap justify-evenly">
        <div className="w-full self-center px-6 sm:px-16 lg:px-24 md:py-16 lg:w-1/2">
          <h1 className="font-bold text-dark text-2xl lg:text-4xl">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="text-dark mt-5 mb-5 leading-relaxed">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Link to="/search" className="btn bg-secondary-color-4 text-white">
            Sewa Sekarang
          </Link>
        </div>
        <div
          className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-end items-end"
          data-aos="zoom-out"
        >
          <img
            src={carImage}
            alt="car"
            className="w-full lg:h-full object-cover lg:object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
