import PropTypes from "prop-types";
import CarCard from "../carCard/CarCard";
import { useNavigate } from "react-router-dom";
import MainHead from "../mainHead/MainHead";
import Loader from "../loader/Loader";

export default function HomeCarsSection({ currCars, homePage, loading }) {
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="section_handler position-relative">
                <Loader />
            </div>
        );
    };

    return (
        <section className="section__handler pt-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 text-center">
                        <MainHead text={'POPULAR RENTAL DEALS'} />
                        <h2 className="mainSection__header">Most popular cars rental deals</h2>
                    </div>
                    {
                        currCars?.length === 0 ?
                            <h3 className="col-12 fs-1">
                                No Cars
                            </h3>
                            :
                            <>
                                {
                                    currCars?.map((car,idx) => (
                                        <div key={car?.id} className="col-lg-3 col-md-5">
                                            <CarCard homePage={homePage} idx={idx} car={car} />
                                        </div>
                                    ))
                                }
                                {
                                    homePage &&
                                    <div className="col-12 text-center mt-3 mb-5">
                                        <button className="showAllCarsBtn" onClick={() => navigate('cars')}>
                                            Show All Vehicles
                                            <i className="ms-2 fa-sharp fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                }
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

HomeCarsSection.propTypes = {
    currCars: PropTypes.array.isRequired,
    homePage: PropTypes.bool,
    loading: PropTypes.bool,
};