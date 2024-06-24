import React, { useEffect, useState } from 'react';
import serviceImage from '../../assets/images/img_service.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import HomeLayout from '../../components/layouts/HomeLayout';
import Hero from '../../components/fragments/Home/Hero';

const testimonials = [
  {
    imgSrc: './public/images/person-1.png',
    rating: 5,
    review:
      'Saya sangat puas dengan layanan Binar Car Rental. Mobil yang saya sewa sangat nyaman dan bersih. Sopirnya juga sangat ramah dan profesional. Harga yang ditawarkan juga sangat terjangkau. Terima kasih Binar Car Rental.',
  },
  {
    imgSrc: './public/images/person-2.png',
    rating: 5,
    review:
      'Saya sangat puas dengan layanan Binar Car Rental. Mobil yang saya sewa sangat nyaman dan bersih. Sopirnya juga sangat ramah dan profesional. Harga yang ditawarkan juga sangat terjangkau. Terima kasih Binar Car Rental.',
  },
  {
    imgSrc: './public/images/person-1.png',
    rating: 5,
    review:
      'Saya sangat puas dengan layanan Binar Car Rental. Mobil yang saya sewa sangat nyaman dan bersih. Sopirnya juga sangat ramah dan profesional. Harga yang ditawarkan juga sangat terjangkau. Terima kasih Binar Car Rental.',
  },
  {
    imgSrc: './public/images/person-2.png',
    rating: 5,
    review:
      'Saya sangat puas dengan layanan Binar Car Rental. Mobil yang saya sewa sangat nyaman dan bersih. Sopirnya juga sangat ramah dan profesional. Harga yang ditawarkan juga sangat terjangkau. Terima kasih Binar Car Rental.',
  },
  {
    imgSrc: './public/images/person-1.png',
    rating: 5,
    review:
      'Saya sangat puas dengan layanan Binar Car Rental. Mobil yang saya sewa sangat nyaman dan bersih. Sopirnya juga sangat ramah dan profesional. Harga yang ditawarkan juga sangat terjangkau. Terima kasih Binar Car Rental.',
  },
  {
    imgSrc: './public/images/person-2.png',
    rating: 5,
    review:
      'Saya sangat puas dengan layanan Binar Car Rental. Mobil yang saya sewa sangat nyaman dan bersih. Sopirnya juga sangat ramah dan profesional. Harga yang ditawarkan juga sangat terjangkau. Terima kasih Binar Car Rental.',
  },
];

const faqData = [
  {
    id: 1,
    question: 'Pertanyaan 1',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam debitis modi perferendis a minus suscipit ut reprehenderit beatae atque odio impedit ipsa veritatis nulla, ullam odit fugit, sequi sapiente.',
  },
  {
    id: 2,
    question: 'Pertanyaan 2',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam debitis modi perferendis a minus suscipit ut reprehenderit beatae atque odio impedit ipsa veritatis nulla, ullam odit fugit, sequi sapiente.',
  },
  {
    id: 3,
    question: 'Pertanyaan 3',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam debitis modi perferendis a minus suscipit ut reprehenderit beatae atque odio impedit ipsa veritatis nulla, ullam odit fugit, sequi sapiente.',
  },
  {
    id: 4,
    question: 'Pertanyaan 4',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam debitis modi perferendis a minus suscipit ut reprehenderit beatae atque odio impedit ipsa veritatis nulla, ullam odit fugit, sequi sapiente.',
  },
  {
    id: 5,
    question: 'Pertanyaan 5',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam debitis modi perferendis a minus suscipit ut reprehenderit beatae atque odio impedit ipsa veritatis nulla, ullam odit fugit, sequi sapiente.',
  },
  {
    id: 6,
    question: 'Pertanyaan 6',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam debitis modi perferendis a minus suscipit ut reprehenderit beatae atque odio impedit ipsa veritatis nulla, ullam odit fugit, sequi sapiente.',
  },
];

const HomePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    SwiperCore.use([Navigation, Pagination]);
  }, []);

  return (
    <HomeLayout>
      <Hero />
      <section id="our-service" className="mt-32">
        <div className="flex flex-wrap justify-center px-5 lg:px-16 gap-3">
          <div data-aos="zoom-out">
            <img
              src={serviceImage}
              alt=""
              className="w-[90%] lg:w-[100%] object-cover"
            />
          </div>
          <div className="w-full self-center px-6 sm:px-16 lg:px-24 md:py-16 lg:w-1/2">
            <h2 className="font-bold text-dark text-xl lg:text-2xl">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className="text-dark text-sm mt-5 mb-5 leading-relaxed">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-none text-sm font-light">
              <li className="flex items-center mt-5 mb-5 leading-relaxed">
                <span className="w-6 bg-primary-color-1 rounded-full text-center">
                  <i className="fas fa-check text-primary-color-4"></i>
                </span>
                <span className="pl-3">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </span>
              </li>
              <li className="flex items-center mt-5 mb-5 leading-relaxed">
                <span className="w-6 bg-primary-color-1 rounded-full text-center">
                  <i className="fas fa-check text-primary-color-4"></i>
                </span>
                <span className="pl-3">
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </span>
              </li>
              <li className="flex items-center mt-5 mb-5 leading-relaxed">
                <span className="w-6 bg-primary-color-1 rounded-full text-center">
                  <i className="fas fa-check text-primary-color-4"></i>
                </span>
                <span className="pl-3">Sewa Mobil Jangka Panjang Bulanan</span>
              </li>
              <li className="flex items-center mt-5 mb-5 leading-relaxed">
                <span className="w-6 bg-primary-color-1 rounded-full text-center">
                  <i className="fas fa-check text-primary-color-4"></i>
                </span>
                <span className="pl-3">
                  Gratis Antar - Jemput Mobil di Bandara
                </span>
              </li>
              <li className="flex items-center mt-5 mb-5 leading-relaxed">
                <span className="w-6 bg-primary-color-1 rounded-full text-center">
                  <i className="fas fa-check text-primary-color-4"></i>
                </span>
                <span className="pl-3">
                  Layanan Airport Transfer / Drop In Out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="why-us" className="mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-5 lg:px-16">
          <h2 className="font-bold text-dark text-xl lg:text-2xl text-center lg:text-start col-span-full">
            Why Us?
          </h2>
          <p className="text-dark text-sm leading-relaxed text-center lg:text-start col-span-full">
            Mengapa harus pilih Binar Car Rental?
          </p>
          <div
            className="bg-gray-100 p-6 border border-gray-200"
            data-aos="zoom-out"
          >
            <div className="w-8 h-8 rounded-full bg-alert-warning-color flex justify-center items-center">
              <i className="fas fa-thumbs-up text-white text-xl"></i>
            </div>
            <h3 className="text-dark text-2xl mt-5 mb-5 font-bold">
              Mobile Lengkap
            </h3>
            <p className="text-dark text-sm mt-5 mb-5 leading-relaxed">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat.
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 border border-gray-200"
            data-aos="zoom-out"
          >
            <div className="w-8 h-8 rounded-full bg-alert-danger-color flex justify-center items-center">
              <i className="fas fa-tags text-white text-xl"></i>
            </div>
            <h3 className="text-dark text-2xl mt-5 mb-5 font-bold">
              Harga Murah
            </h3>
            <p className="text-dark text-sm mt-5 mb-5 leading-relaxed">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 border border-gray-200"
            data-aos="zoom-out"
          >
            <div className="w-8 h-8 rounded-full bg-primary-color-5 flex justify-center items-center">
              <i className="fas fa-clock text-white text-xl"></i>
            </div>
            <h3 className="text-dark text-2xl mt-5 mb-5 font-bold">
              Layanan 24 Jam
            </h3>
            <p className="text-dark text-sm mt-5 mb-5 leading-relaxed">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 border border-gray-200"
            data-aos="zoom-out"
          >
            <div className="w-8 h-8 rounded-full bg-secondary-color-5 flex justify-center items-center">
              <i className="fas fa-award text-white text-xl"></i>
            </div>
            <h3 className="text-dark text-2xl mt-5 mb-5 font-bold">
              Sopir Profesional
            </h3>
            <p className="text-dark text-sm mt-5 mb-5 leading-relaxed">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </section>
      <section id="testimony" className="mt-32 px-5 lg:px-16">
        <div className="flex flex-wrap justify-start">
          <h2 className="w-full font-bold text-dark text-xl lg:text-2xl text-center">
            Testimonial
          </h2>
          <p className="w-full text-dark text-sm mt-5 mb-5 leading-relaxed text-center">
            Berbagai review positif dari para pelanggan kami
          </p>
          <div className="w-full" data-aos="zoom-in">
            <Swiper
              spaceBetween={5}
              slidesPerView={1}
              navigation={true}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              effect="fade"
              creativeEffect={{
                next: {
                  shadow: true,
                  translate: ['20%', 0, -1],
                },
                prev: {
                  shadow: true,
                  translate: ['20%', 0, -1],
                },
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={`testimonial-${index}`}>
                  <div className="flex max-w-[300px] lg:max-w-[600px] bg-neutral-color-2 p-6 rounded py-10 lg:py-20">
                    <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
                      <img
                        src={testimonial.imgSrc}
                        alt={testimonial.imgSrc}
                        className="lg:basis-1/3 w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex flex-col justify-center">
                        <div className="star">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i
                              key={`star-${i}`}
                              className="fas fa-star text-alert-warning-color"
                            ></i>
                          ))}
                        </div>
                        <p className="text-dark text-sm leading-relaxed">
                          {testimonial.review}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section id="cta-banner" className="mt-32">
        <div className="cta-banner__content">
          <div className="w-full flex flex-col items-center px-10 py-14 sm:px-16 lg:px-36 md:py-16 bg-primary-color-4">
            <h2 className="cta-banner__title" data-aos="zoom-out">
              Sewa Mobil di (Lokasimu) Sekarang
            </h2>
            <p className="cta-banner__text" data-aos="zoom-out">
              Binar Car Rental siap melayani kebutuhan Anda sewa mobil. Tersedia
              berbagai pilihan mobil dengan harga terjangkau. Segera sewa mobil
              sekarang dan nikmati perjalanan Anda.
            </p>
            <a
              href="#"
              className="btn mt-5 bg-secondary-color-4 text-white"
              data-aos="zoom-out"
            >
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </section>
      <section id="faq" className="mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 lg:px-16">
          <div className="flex flex-col lg:text-start">
            <h2 className="font-bold text-dark text-xl text-center lg:text-left lg:text-2xl">
              Frequently Asked Questions
            </h2>
            <p className="text-dark text-sm mt-5 mb-5 leading-relaxed text-center lg:text-left">
              Berbagai pertanyaan yang sering ditanyakan oleh pelanggan kami
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4" data-aos="zoom-in">
            {faqData.map((faq) => (
              <div className="faq-item" key={faq.id}>
                <button
                  className="faq-item__question"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <h3 className="text-md text-left">{faq.question}</h3>
                  <span className="faq-item__toggle">
                    <i
                      className={`fas ${
                        openIndex === faq.id
                          ? 'fa-chevron-up'
                          : 'fa-chevron-down'
                      }`}
                    ></i>
                  </span>
                </button>
                {openIndex === faq.id && (
                  <div className="faq-item__answer">
                    <p className="text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default HomePage;
