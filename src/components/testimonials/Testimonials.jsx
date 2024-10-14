import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './testimonials.module.css';
import manImg from '../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png';
import star from '../../assets/imges/card/star.png';
import girlImg from '../../assets/imges/landing-page/sec-6/girl.png';
import MainHead from '../mainHead/MainHead';

export default function Testimonials() {
    return (
        <div className={`section__handler position-relative ${styles.testimonialSec}`}>
            <MainHead text='Testimonials' />
            <h3 className='mainSection__header text-center mb-5'>What peole say about us?</h3>
            <div className={styles.floated_right}>
            </div>
            <div className={styles.floated_left}>
            </div>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={25}
                centeredSlides={true}
                loop={true}
                lazyPreloadPrevNext={true}
                parallax={true}
                breakpoints={{
                    768: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2
                    }
                }}
                className={styles.swiperSilder}
            >
                <SwiperSlide className={styles.swiperSlideImage}>
                    <div className={`${styles.slideFullContent}`}>
                        <div className={`${styles.testimonialSliderImg}`}>
                            <img src={manImg} alt={`slider man`} />
                        </div>
                        <div className={`${styles.testimonialSliderText}`}>
                            <h4 className="mb-2">
                                5.0 <small>stars</small>
                            </h4>
                            <div className={`${styles.rateIcons} mb-4`}>
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                            </div>
                            <p>
                                “I feel very secure when using caretall{"'"}s services. Your customer care team is very enthusiastic and the driver is always on time.”
                            </p>
                            <div className={styles.bottomContent}>
                                <h6 className="bold mb-0">
                                    Charlie Johnson
                                </h6>
                                <small className="text-muted">
                                    From New York, US
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideImage}>
                    <div className={`${styles.slideFullContent}`}>
                        <div className={`${styles.testimonialSliderImg}`}>
                            <img src={girlImg} alt={`slider girl`} />
                        </div>
                        <div className={`${styles.testimonialSliderText}`}>
                            <h4 className="mb-2">
                                5.0 <small>stars</small>
                            </h4>
                            <div className={`${styles.rateIcons} mb-4`}>
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                            </div>
                            <p>
                                “I feel very secure when using caretall{"'"}s services. Your customer care team is very enthusiastic and the driver is always on time.”
                            </p>
                            <div className={styles.bottomContent}>
                                <h6 className="bold mb-0">
                                    Charlie Johnson
                                </h6>
                                <small className="text-muted">
                                    From New York, US
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideImage}>
                    <div className={`${styles.slideFullContent}`}>
                        <div className={`${styles.testimonialSliderImg}`}>
                            <img src={manImg} alt={`slider man`} />
                        </div>
                        <div className={`${styles.testimonialSliderText}`}>
                            <h4 className="mb-2">
                                5.0 <small>stars</small>
                            </h4>
                            <div className={`${styles.rateIcons} mb-4`}>
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                            </div>
                            <p>
                                “I feel very secure when using caretall{"'"}s services. Your customer care team is very enthusiastic and the driver is always on time.”
                            </p>
                            <div className={styles.bottomContent}>
                                <h6 className="bold mb-0">
                                    Charlie Johnson
                                </h6>
                                <small className="text-muted">
                                    From New York, US
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideImage}>
                    <div className={`${styles.slideFullContent}`}>
                        <div className={`${styles.testimonialSliderImg}`}>
                            <img src={girlImg} alt={`slider girl`} />
                        </div>
                        <div className={`${styles.testimonialSliderText}`}>
                            <h4 className="mb-2">
                                5.0 <small>stars</small>
                            </h4>
                            <div className={`${styles.rateIcons} mb-4`}>
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                                <img src={star} alt='start icon' />
                            </div>
                            <p>
                                “I feel very secure when using caretall{"'"}s services. Your customer care team is very enthusiastic and the driver is always on time.”
                            </p>
                            <div className={styles.bottomContent}>
                                <h6 className="bold mb-0">
                                    Charlie Johnson
                                </h6>
                                <small className="text-muted">
                                    From New York, US
                                </small>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
