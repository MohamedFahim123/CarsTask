import styles from './heroSection.module.css';
import heroImg from '../../assets/imges/landing-page/car 2 1.png';
import BrandingMarkets from '../brandingMarkets/BrandingMarkets';

export default function HeroSection() {
  return (
    <div className={`${styles.heroSection__handler}`}>
      <div className="container-fluid h-100">
        <div className={`row ${styles.bootstrapGridSys}`}>
          <div className={`col-lg-5 d-flex align-items-center ${styles.textContainer}`}>
            <div className={`${styles.inner__textContent}`}>
              <h1>
                Find, book and rent a car <span className="active">Easily</span>
              </h1>
              <p>
                Get a car wherever and whenever you need it with your IOS and Android device.
              </p>
              <BrandingMarkets />
            </div>
          </div>
          <div className={`col-lg-7 d-flex justify-content-end ${styles.heroSection__image}`}>
            <img src={heroImg ? heroImg : ''} alt='Hero Section Car' className="w-100" />
          </div>
        </div>
      </div>
    </div>
  )
}
