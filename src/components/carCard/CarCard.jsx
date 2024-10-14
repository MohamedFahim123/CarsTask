import PropTypes from 'prop-types';
import styles from './carCard.module.css';
import carImg1 from '../../assets/imges/card/car3.png';
import carImg2 from '../../assets/imges/card/car1.png';
import carImg3 from '../../assets/imges/card/car2.png';
import carImg4 from '../../assets/imges/card/laborgini.png';
import rateImg from '../../assets/imges/card/star.png';
import userIcon from '../../assets/imges/card/user.png';
import icon1 from "../../assets/imges/card/d8wxke_2_.png";
import frame from "../../assets/imges/card/Frame.png";
import { useNavigate } from 'react-router-dom';

export default function CarCard({ car ,homePage ,idx }) {
    const cars = [carImg2, carImg1,carImg3,carImg4];
    const navigate = useNavigate();
    const laborginiStyles = {transform: 'rotateY(180deg)'}

    return (
        <div className={`${styles.car__card}`}>
            <img className={`${styles.car__image}`} src={cars[idx % 4]} alt={'car'} style={((idx % 4) === 3 ) ? laborginiStyles : {}} />
            <h3>{car?.car} {car?.car_model}</h3>
            <div className={`d-flex align-items-baseline ${styles.rates__content}`}>
                <img src={rateImg} alt='Car Rate Star' />
                <h6 className="mx-1">4.6</h6>
                <small className="text-muted">(1345 reviews)</small>
            </div>
            <div className={`d-flex justify-content-between mb-4 ${styles.rates__content}`}>
                <div className="d-flex justify-content-between flex-column my-2">
                    <p className="card-text text-nowrap d-flex align-items-start">
                        <img src={userIcon} alt="User Icon" />
                        <small className="text-muted"> 2 Passanger</small>
                    </p>
                    <p className="card-text text-nowrap d-flex align-items-start">
                        <i className="fa-solid fa-calendar-days me-2"></i>
                        <small className="text-muted">{car?.car_model_year}</small>
                    </p>
                </div>
                <div className="d-flex justify-content-between flex-column my-2">
                    <p className="card-text text-nowrap d-flex align-items-start">
                        <img src={icon1} alt="icon" />
                        <small className="text-muted"> Air conditioning </small>
                    </p>
                    <p className="card-text text-nowrap d-flex align-items-start me-3">
                        <img src={frame} alt="frame icon" />
                        <small className="text-muted"> {car?.car_vin} </small>
                    </p>
                </div>
            </div>
            <div className={`d-flex justify-content-between ${styles.price__content}`}>
                <p className="text-muted">Price</p>
                <div className="d-flex">
                    <h6>{car?.price}</h6>
                    /
                    <p className="text-muted">day</p>
                </div>
            </div>
            <button className="mainBtnStyle singUp__btn w-100" onClick={()=> navigate(`${!homePage ? `car-details/${car?.id}`: `cars/car-details/${car?.id}`}`)}>
                View Details
                <i className="ms-2 fa-sharp fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
};

CarCard.propTypes = {
    car: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    homePage: PropTypes.bool,
};