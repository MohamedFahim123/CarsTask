import PropTypes from "prop-types"
import { NavLink, useLocation } from "react-router-dom";

export default function UpperPageLinks({ links }) {
    const { pathname } = useLocation();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="pageMainLinks d-flex align-items-center">
                        <h2 className="d-flex fs-4 fw-light">
                            {
                                links?.map(link => (
                                    <span key={link?.id}>
                                        {
                                            pathname?.includes(link?.path) ?
                                                <>
                                                    <NavLink className={'text-decoration-underline'} to={link?.path}>{link.name}</NavLink> /
                                                </>
                                                :
                                                <p key={link?.id} className={'nav-link ms-1 fw-medium'} to={link?.path}>{link.name}</p>
                                        }
                                    </span>
                                ))
                            }
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
UpperPageLinks.propTypes = {
    links: PropTypes.array.isRequired,
};