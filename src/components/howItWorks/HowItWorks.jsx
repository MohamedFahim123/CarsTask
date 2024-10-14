import MainHead from '../mainHead/MainHead';
import locationIcon from '../../assets/imges/landing-page/location.png';
import calenderIcon from '../../assets/imges/landing-page/calender.png';
import carIcon from '../../assets/imges/landing-page/car-icon.png';
import HowItWorksCard from '../howItWorksCard/HowItWorksCard';

export default function HowItWorks() {
    const howItWorkCards = [
        {
            id: 1,
            src: locationIcon,
            head: 'Choose location',
            content: 'Choose your and find your best car'
        },
        {
            id: 2,
            src: calenderIcon,
            head: 'Pick-up date',
            content: 'Select your pick up date and time to book your car'
        },
        {
            id: 3,
            src: carIcon,
            head: 'Book your car',
            content: 'Book your car and we will deliver it directly to you'
        },
    ];

    return (
        <section className='section__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <MainHead text={'HOW IT WORK'} />
                        <h2 className='mainSection__header'>Rent with following 3 working steps</h2>
                    </div>
                    <div className="col-lg-8 m-auto">
                        <div className="row justify-content-center">
                            {
                                howItWorkCards?.map(card => (
                                    <div key={card?.id} className="col-lg-4 col-md-6">
                                        <HowItWorksCard card={card} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
