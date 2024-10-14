import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './pagination.css'
import { useState } from "react";
export default function Pagination({ startPoint, endPoint, setFirstItem, setLastItem, currCars }) {
    const pagesNum = Math.ceil(currCars?.length / endPoint);
    const [swiperInstance, setSwiperInstance] = useState(null); // To store the Swiper instance

    const handleClick = (num) => {
        setFirstItem(startPoint + (endPoint * num));
        setLastItem(endPoint + (endPoint * num));
        window.scrollTo({ top: 0 });
    };
    const handleClickPrev = () => {
        if (swiperInstance) swiperInstance.slidePrev(); // Moves the Swiper to the previous slide

    };
    const handleClickNext = () => {
        if (swiperInstance) swiperInstance.slideNext();
    };

    let paginationElements = [];
    for (let i = 0; i < pagesNum; i++) {
        paginationElements.push(
            <SwiperSlide key={i + 1} className="page-item" onClick={() => handleClick(i)}>
                <button type='button' className="page-link">{i + 1}</button>
            </SwiperSlide>
        );
    };

    return (
        <>
            {
                pagesNum > 1 &&
                <nav className="paginationContainer mb-4" aria-label="Page navigation example">
                    <div className="page-controller" onClick={handleClickPrev}>
                        <button type='button' className="page-linkController">Previous</button>
                    </div>
                    <Swiper
                        onSwiper={setSwiperInstance}
                        centeredSlides={true}
                        loop={false}
                        slidesPerView={5}
                        spaceBetween={10}
                        className="pagination"
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4},
                        }}
                    >
                        {paginationElements}
                    </Swiper>
                    <div className="page-controller" onClick={handleClickNext}>
                        <button type='button' className="page-linkController">Next</button>
                    </div>
                </nav>
            }
        </>
    );
};

Pagination.propTypes = {
    startPoint: PropTypes.number.isRequired,
    endPoint: PropTypes.number.isRequired,
    currCars: PropTypes.array.isRequired,
    setFirstItem: PropTypes.func.isRequired,
    setLastItem: PropTypes.func.isRequired,
}