import icon1 from '../../assets/imges/landing-page/andriod.png';
import icon2 from '../../assets/imges/landing-page/ios.png';

export default function BrandingMarkets() {
    return (
        <div className='d-flex gap-2 mt-2 w-50'>
            <img src={icon1} alt="google play icon" />
            <img src={icon2} alt="ios icon" />
        </div>
    );
};
