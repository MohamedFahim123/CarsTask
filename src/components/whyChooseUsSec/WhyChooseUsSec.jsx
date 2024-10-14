import styles from './whyChooseUsSec.module.css';
import audiImage from '../../assets/imges/landing-page/sec-5/Audi 1.png';
import userIcon from '../../assets/imges/landing-page/sec-5/user.png';
import messageIcon from '../../assets/imges/landing-page/sec-5/message.png';
import chatIcon from '../../assets/imges/landing-page/sec-5/chat.png';
import MainHead from '../mainHead/MainHead';
import PropTypes from 'prop-types';
import userIconDetails from "../../assets/imges/card/user.png";
import icon1 from "../../assets/imges/card/d8wxke_2_.png";
import frame from "../../assets/imges/card/Frame.png";
import doors from "../../assets/imges/card/doors.png";

export default function WhyChooseUsSec({ homePage, carData }) {
    return (
        <div className='section__handler'>
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-lg-6 d-flex flex-column justify-content-center position-relative ${styles.imageContent}`}>
                        <img className={`${styles.audiImage} ${!homePage && styles.carAnimation}`} src={audiImage ? audiImage: ''} alt="audi car" />
                        <div className={styles.absolutedImage}></div>
                    </div>
                    <div className={`col-lg-6 ${styles.whyChooseUs__text}`}>
                        <MainHead text={carData ? 'Car Details' : 'WHY CHOOSE US'} alignStart={true} />
                        <h3 className='mainSection__header pe-lg-5 pe-md-3 mb-3'>
                            {
                                carData?.car ?
                                    <>
                                        {carData?.car} {carData?.car_model} ( {carData?.car_model_year ? carData?.car_model_year : ''} {carData?.car_color ? ` | ${carData?.car_color} ` : ''})
                                    </>
                                    :
                                    'We offer the best experience with our rental deals'
                            }

                        </h3>
                        {
                            carData?.price &&
                            <p className='fs-4 fw-medium'>
                                price: {carData?.price}
                            </p>
                        }
                        {
                            homePage ?
                                <ul className={`d-flex flex-column pe-4 ${styles.whyChooseUs__list}`}>
                                    <li className='d-flex mb-2'>
                                        <div className={styles.imageContainer}>
                                            <img src={userIcon} alt="user Icon" />
                                        </div>
                                        <div className="textContainer">
                                            <h5>Best price guaranteed</h5>
                                            <p>
                                                Find a lower price? We’ll refund you 100%
                                                of the difference.
                                            </p>
                                        </div>
                                    </li>
                                    <li className='d-flex mb-2'>
                                        <div className={styles.imageContainer}>
                                            <img src={userIcon} alt="user Icon" />
                                        </div>
                                        <div className="textContainer">
                                            <h5>Experience driver</h5>
                                            <p>
                                                Don’t have driver? Don’t worry, we have many
                                                experienced driver for you.
                                            </p>
                                        </div>
                                    </li>
                                    <li className='d-flex mb-2'>
                                        <div className={styles.imageContainer}>
                                            <img src={messageIcon} alt="message Icon" />
                                        </div>
                                        <div className="textContainer">
                                            <h5>24 hour car delivery</h5>
                                            <p>
                                                Book your car anytime and we will deliver it
                                                directly to you.
                                            </p>
                                        </div>
                                    </li>
                                    <li className='d-flex'>
                                        <div className={styles.imageContainer}>
                                            <img src={chatIcon} alt="chat Icon" />
                                        </div>
                                        <div className="textContainer">
                                            <h5>24/7 technical support</h5>
                                            <p>
                                                Have a question? Contact Rentcars support
                                                any time when you have problem.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                :
                                (
                                    carData &&
                                    <ul className={`d-flex flex-column pe-4 ${styles.whyChooseUs__list1}`}>
                                        <li className='d-flex mb-2'>
                                            <div className={styles.imageContainer}>
                                                <img src={icon1} alt="user Icon" />
                                            </div>
                                            <p>
                                                Air Conditioning
                                            </p>
                                        </li>
                                        <li className='d-flex mb-2'>
                                            <div className={styles.imageContainer}>
                                                <img src={userIconDetails} alt="user Icon" />
                                            </div>
                                            <p>
                                                2 Passagers
                                            </p>
                                        </li>
                                        <li className='d-flex mb-2'>
                                            <div className={styles.imageContainer}>
                                                <img src={frame} alt="message Icon" />
                                            </div>
                                            <p>
                                                {carData?.car_vin}
                                            </p>
                                        </li>
                                        <li className='d-flex'>
                                            <div className={styles.imageContainer}>
                                                <img src={doors} alt="chat Icon" />
                                            </div>
                                            <p>
                                                2 Doors
                                            </p>
                                        </li>
                                    </ul>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
WhyChooseUsSec.propTypes = {
    homePage: PropTypes.bool.isRequired,
    carData: PropTypes.object,
};