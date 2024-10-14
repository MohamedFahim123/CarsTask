
import carouselImg1 from '../../assets/imges/landing-page/audi.png';
import carouselImg2 from '../../assets/imges/landing-page/volvo.png';
import carouselImg3 from '../../assets/imges/landing-page/nissan.png';
import carouselImg4 from '../../assets/imges/landing-page/jaguar.png';
import carouselImg5 from '../../assets/imges/landing-page/ac.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './carouselSection.module.css';

export default function CarouselSection() {
    const imgsArr = [carouselImg1, carouselImg3, carouselImg5, carouselImg2, carouselImg4];

    return (
        <div className='section__handler'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={25}
                slidesPerView={5}
                centeredSlides={true}
                loop={true}
                lazyPreloadPrevNext={true}
                parallax={true}
                breakpoints={{
                    300: {
                        slidesPerView: 2
                    },
                    426: {
                        slidesPerView: 2.5,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1025: {
                        slidesPerView: 5,
                    },
                }}
                className={styles.swiperSilder}
            >
                {
                    imgsArr?.map((img, idx) => (
                        <SwiperSlide className={styles.swiperSlideImage} key={idx}>
                            <img src={img} alt={`image Slider ${idx}`} />
                        </SwiperSlide>
                    ))
                }
                {
                    imgsArr?.map((img, idx) => (
                        <SwiperSlide className={styles.swiperSlideImage} key={idx}>
                            <img src={img} alt={`image Slider ${idx}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
