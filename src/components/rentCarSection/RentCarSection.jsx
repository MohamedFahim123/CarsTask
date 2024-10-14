import BrandingMarkets from '../brandingMarkets/BrandingMarkets';
import styles from './rentCarSection.module.css';
import iphoneImg from '../../assets/imges/landing-page/sec-7/iPhone-14.png';

export default function RentCarSection() {
    return (
        <div className={`section__handler ${styles.rentCarSection}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 position-relative">
                        <div className={styles.floatedImg}></div>
                        <div className={`${styles.textContent}`}>
                            <h3>Download Rentcars App for <span className="active">FREE</span></h3>
                            <p>For faster, easier booking and exclusive deals.</p>
                            <BrandingMarkets />
                        </div>
                        <form className='mt-4 d-flex flex-column justify-content-between'>
                            <input
                                type="text"
                                name="text"
                                className={`${styles.input}`}
                                placeholder="Name"
                            />
                            <input
                                type="number"
                                name="number"
                                className={`${styles.input}`}
                                placeholder="Phone Number"
                            />
                            <input
                                type="email"
                                name="email"
                                className={`${styles.input}`}
                                placeholder="Email"
                            />
                            <div className={`${styles.buttonContainer} text-center`}>
                                <button type='button' className={`${styles.formBtn} mainBtnStyle singUp__btn`}>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className={`col-md-6 d-flex justify-content-end align-items-end ${styles.iphoneImgContainer}`}>
                        <img src={iphoneImg} className={styles.iphoneImg} alt="iphone" />
                    </div>
                </div>
            </div>
        </div>
    );
};
