import Carousel from 'react-bootstrap/Carousel';

import cliniqueImg from './../../images/content/clinique.jpg'
import riverImg from './../../images/content/river-island.jpg'
import mDirectImg from './../../images/content/m-direct.jpg'

import cliniqueIcon from './../../images/icons/clinique.png'
import riverIcon from './../../images/icons/river.png'
import mDirectIcon from './../../images/icons/m-direct.png'

const BrandsSlider = () => {

    return (
        <section className="brands-slider">
            <div className="container">
                <h2 className="title brands-slider__title">
                    Trusted by leading brands.
                </h2>
                <div className="brand-slider__inner">
                    <Carousel indicators={false} prevIcon={(
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M37.068 47.0404C36.3023 47.8062 35.0607 47.8062 34.2951 47.0404L11.7647 24.5101L33.9484 2.32637C34.7142 1.56059 35.9556 1.56059 36.7214 2.32637C37.4871 3.09206 37.4871 4.33353 36.7214 5.09932L17.3106 24.5101L37.068 44.2675C37.8338 45.0332 37.8338 46.2747 37.068 47.0404Z" fill="#6F2CFF" />
                        </svg>
                    )} nextIcon={(
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.339 2.32625C13.1047 1.56052 14.3462 1.56052 15.1119 2.32625L37.6423 24.8566L15.4586 47.0403C14.6928 47.8061 13.4513 47.8061 12.6856 47.0403C11.9199 46.2746 11.9199 45.0332 12.6856 44.2674L32.0963 24.8566L12.339 5.09923C11.5732 4.33349 11.5732 3.09199 12.339 2.32625Z" fill="#6F2CFF" />
                        </svg>
                    )}>
                        <Carousel.Item>
                            <div className="brands-slider__carousel-inner d-flex justify-content-center">
                                <div className="brands-slider__item">
                                    <div className="brands-slider__item-img">
                                        <img src={cliniqueImg} alt="brand photo" />
                                    </div>
                                    <div className="brands-slider__item-content">
                                        <div className="brands-slider__item-content__brand">
                                            <img src={cliniqueIcon} alt="clinique" />
                                        </div>
                                        <p className="brands-slider__item-content__text">
                                            Clinique builds relationships with millions of customers each year.
                                        </p>
                                    </div>
                                </div>
                                {!window.matchMedia('(max-width: 768px)').matches && (
                                    <>
                                        <div className="brands-slider__item">
                                            <div className="brands-slider__item-img">
                                                <img src={riverImg} alt="brand photo" />
                                            </div>
                                            <div className="brands-slider__item-content">
                                                <div className="brands-slider__item-content__brand">
                                                    <img src={riverIcon} alt="clinique" />
                                                </div>
                                                <p className="brands-slider__item-content__text">
                                                    River Island transforms the customer experience with personalization.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="brands-slider__item">
                                            <div className="brands-slider__item-img">
                                                <img src={mDirectImg} alt="brand photo" />
                                            </div>
                                            <div className="brands-slider__item-content">
                                                <div className="brands-slider__item-content__brand">
                                                    <img src={mDirectIcon} alt="clinique" />
                                                </div>
                                                <p className="brands-slider__item-content__text">
                                                    MandM Direct drives increase in revenue with deep learning recs
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="brands-slider__carousel-inner d-flex justify-content-center">
                                {!window.matchMedia('(max-width: 768px)').matches && (
                                    <div className="brands-slider__item">
                                        <div className="brands-slider__item-img">
                                            <img src={cliniqueImg} alt="brand photo" />
                                        </div>
                                        <div className="brands-slider__item-content">
                                            <div className="brands-slider__item-content__brand">
                                                <img src={cliniqueIcon} alt="clinique" />
                                            </div>
                                            <p className="brands-slider__item-content__text">
                                                Clinique builds relationships with millions of customers each year.
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <div className="brands-slider__item">
                                    <div className="brands-slider__item-img">
                                        <img src={riverImg} alt="brand photo" />
                                    </div>
                                    <div className="brands-slider__item-content">
                                        <div className="brands-slider__item-content__brand">
                                            <img src={riverIcon} alt="clinique" />
                                        </div>
                                        <p className="brands-slider__item-content__text">
                                            River Island transforms the customer experience with personalization.
                                        </p>
                                    </div>
                                </div>
                                {!window.matchMedia('(max-width: 768px)').matches && (
                                    <div className="brands-slider__item">
                                        <div className="brands-slider__item-img">
                                            <img src={mDirectImg} alt="brand photo" />
                                        </div>
                                        <div className="brands-slider__item-content">
                                            <div className="brands-slider__item-content__brand">
                                                <img src={mDirectIcon} alt="clinique" />
                                            </div>
                                            <p className="brands-slider__item-content__text">
                                                MandM Direct drives increase in revenue with deep learning recs
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="brands-slider__carousel-inner d-flex justify-content-center">
                                {!window.matchMedia('(max-width: 768px)').matches && (
                                    <>
                                        <div className="brands-slider__item">
                                            <div className="brands-slider__item-img">
                                                <img src={cliniqueImg} alt="brand photo" />
                                            </div>
                                            <div className="brands-slider__item-content">
                                                <div className="brands-slider__item-content__brand">
                                                    <img src={cliniqueIcon} alt="clinique" />
                                                </div>
                                                <p className="brands-slider__item-content__text">
                                                    Clinique builds relationships with millions of customers each year.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="brands-slider__item">
                                            <div className="brands-slider__item-img">
                                                <img src={riverImg} alt="brand photo" />
                                            </div>
                                            <div className="brands-slider__item-content">
                                                <div className="brands-slider__item-content__brand">
                                                    <img src={riverIcon} alt="clinique" />
                                                </div>
                                                <p className="brands-slider__item-content__text">
                                                    River Island transforms the customer experience with personalization.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="brands-slider__item">
                                    <div className="brands-slider__item-img">
                                        <img src={mDirectImg} alt="brand photo" />
                                    </div>
                                    <div className="brands-slider__item-content">
                                        <div className="brands-slider__item-content__brand">
                                            <img src={mDirectIcon} alt="clinique" />
                                        </div>
                                        <p className="brands-slider__item-content__text">
                                            MandM Direct drives increase in revenue with deep learning recs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    )
};

export default BrandsSlider;
