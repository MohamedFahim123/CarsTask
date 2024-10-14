import youtubeIcon from "../../assets/imges/footer/youtube.png";
import instagramIcon from "../../assets/imges/footer/instagram.png";
import faceBookIcon from "../../assets/imges/footer/facebook.png";
import smsIcon from "../../assets/imges/footer/sms.png";
import callIcon from "../../assets/imges/footer/call.png";
import locationIcon from "../../assets/imges/footer/location.png";
import footerLogo from "../../assets/imges/footer/logo-footer.png"

export default function MyFooter() {
    return (
        <footer className={`section__handler footerContainer`}>
            <div className="container">
                <div className="row">
                    <div className={`footerUpperPart col-md-12 d-flex flex-wrap mx-2 justify-content-center`}>
                        <div className="col-md-3 me-3 mb-5">
                            <img src={footerLogo} className="mb-4 footerLogo" />
                            <div className="d-flex">
                                <img src={locationIcon} className="align-self-center me-2 footerIcon" />
                                <div className="d-flex flex-column">
                                    <small>25566 Hc 1, Glenallen,</small>
                                    <small> Alaska, 99588, USA</small>
                                </div>
                            </div>
                            <div className="d-flex my-3">
                                <img src={callIcon} className="me-2 footerIcon" />
                                <small>+603 4784 273 12</small>
                            </div>
                            <div className="d-flex">
                                <img src={smsIcon} className="me-2 footerIcon" />
                                <small>rentcars@gmail.com</small>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex flex-column gap-1 me-3 mb-5">
                            <p className="mb-4">Our Products</p>
                            <small>Career</small>
                            <small>Car</small>
                            <small>Packages</small>
                            <small>Features</small>
                            <small>Priceline</small>
                        </div>
                        <div className="col-md-2 d-flex gap-1 flex-column me-3 mb-5">
                            <p className="mb-4">Resources</p>
                            <small>Download</small>
                            <small>Help Centre</small>
                            <small>Guides</small>
                            <small>Partner Network</small>
                            <small>Cruises</small>
                            <small>Developer</small>
                        </div>
                        <div className="col-md-2 d-flex gap-1 flex-column me-3 mb-5">
                            <p className="mb-4">About Rentcars</p>
                            <small>Why choose us</small>
                            <small>Our Story</small>
                            <small>Investor Relations</small>
                            <small>Press Center</small>
                            <small>Advertise</small>
                        </div>
                        <div className="col-md-2 d-flex flex-column mb-5">
                            <p className="mb-4">Follow Us</p>
                            <div>
                                <img className="footerIcon socialIcon" src={faceBookIcon} alt="facebook" />
                                <img className="footerIcon socialIcon mx-3" src={instagramIcon} alt="instagram" />
                                <img className="footerIcon socialIcon" src={youtubeIcon} alt="youtube" />
                            </div>
                        </div>
                    </div>
                    <div className={`footerBottomPart`}>
                    <small className="text-md-center">Copyright 2023 ・ Rentcars, All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}
