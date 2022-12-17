import 'swiper/css';

import {Swiper, SwiperSlide} from 'swiper/react';

import Image from "next/image";
import React from "react";

interface SliderImageProps {
    url: string;
    width: number;
    height: number;
}

interface SliderProps {
    children: React.ReactNode;
    image: SliderImageProps;
}

const Slide = ({children, image}: SliderProps) => (
    <div className="hero__slider--items style4 slider4__items--bg1">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-7">
                    <div className="slider__content style4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
        <div className="hero__slider--layer__style4">
            <Image
                width={image.width}
                height={image.height}
                className="slider__layer--img "
                src={image.url} alt="slider-img"
            />
        </div>
    </div>
)

export default () => {
    return (
        <section className="hero__slider--section">
            <div className="hero__slider--inner hero__slider--activation swiper">
                <div className="hero__slider--wrapper swiper-wrapper">
                    <Swiper
                        loop={false}
                        speed={500}
                        spaceBetween={30}
                        navigation={{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
                        pagination={{el: ".swiper-pagination", clickable: !0}}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <Slide image={{width: 800, height: 800, url: '/images/KD.png'}}>
                                <span className="slider__subtitle style4">Получите скидку до 10% только сегодня!</span>
                                <h2 className="slider__maintitle style4 h1">Зимняя Распродажа <span
                                    className="text__secondary">Насосы для дачи</span></h2>
                                <p className="slider__desc style4">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad, </p>
                                <a className="primary__btn slider__btn" href="/">
                                    Смотреть
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z"
                                            fill="currentColor"/>
                                    </svg>
                                </a>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide image={{width: 800, height: 800, url: '/images/neptun.png'}}>
                                <span className="slider__subtitle style4">Получите скидку до 20% только сегодня!</span>
                                <h2 className="slider__maintitle style4 h1">Зимняя Распродажа <span className="text__secondary">
                                    Neptun Bugatti Base
                                </span></h2>
                                <p className="slider__desc style4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad, </p>
                                <a className="primary__btn slider__btn" href="/">
                                    Смотреть
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide image={{width: 800, height: 800, url: '/images/black.png'}}>
                                <span className="slider__subtitle style4">Получите скидку до 15% только сегодня!</span>
                                <h2 className="slider__maintitle style4 h1">Зимняя Распродажа <span className="text__secondary">
                                    Обогрев кровли и водостоков
                                </span>
                                </h2>
                                <p className="slider__desc style4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad, </p>
                                <a className="primary__btn slider__btn" href=".">
                                    Смотреть
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide image={{width: 800, height: 800, url: '/images/triton.png'}}>
                                <span className="slider__subtitle style4">Получите скидку до 15% только сегодня!</span>
                                <h2 className="slider__maintitle style4 h1">Зимняя Распродажа <span className="text__secondary">
                                    Системы защиты от протечек воды Тритон
                                </span>
                                </h2>
                                <p className="slider__desc style4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad, </p>
                                <a className="primary__btn slider__btn" href=".">
                                    Смотреть
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </Slide>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="slider__pagination swiper-pagination"/>
            </div>
        </section>
    );
};