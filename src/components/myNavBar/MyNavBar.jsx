import { NavLink } from 'react-router-dom';
import logo from '../../assets/imges/nav/logo.png';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
import styles from './myNavBar.module.css';
import { useState } from 'react';

export default function MyNavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  function handleOffcanvasToggle() {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <Navbar expand="lg" className={`${styles.nav_container}`}>
      <Container>
        <NavLink className={`navbar-brand ${styles.mainPageLogo}`} to="/">
          <img src={logo} alt="page logo" />
        </NavLink>
        <div className='d-none d-lg-block w-100'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className={`navbar-nav mx-auto ${styles.navBarNav}`}>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? `active nav-link` : 'nav-link'} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? `active nav-link` : 'nav-link'} to="/cars">Cars</NavLink>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link">
                  How it work
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link">
                  Why choose usk
                </button>
              </li>
            </ul>
            <div className={`atuhBtns ${styles.navBtns}`}>
              <button className={`mainBtnStyle singIn__btn`}>Sign In</button>
              <button className={`mainBtnStyle singUp__btn`}>Sign Up</button>
            </div>
          </Navbar.Collapse>
        </div>
        <div className='d-block d-lg-none'>
          <Navbar.Toggle onClick={handleOffcanvasToggle} aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas
            className='d-lg-none'
            id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
            show={showOffcanvas}
            onHide={handleOffcanvasToggle}
            placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='offCanvas__head' id="offcanvasNavbarLabel">
                <NavLink className={`navbar-brand ${styles.mainPageLogo}`} to="/">
                  <img src={logo} alt="page logo" />
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="OffcanvasBody__Scrollable">
              <ul className={`navbar-nav mx-auto ${styles.navBarNav}`}>
                <li className="nav-item">
                  <NavLink onClick={closeOffcanvas} className={({ isActive }) => isActive ? `active nav-link` : 'nav-link'} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={closeOffcanvas} className={({ isActive }) => isActive ? `active nav-link` : 'nav-link'} to="/cars">Cars</NavLink>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link">
                    How it work
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link">
                    Why choose usk
                  </button>
                </li>
              </ul>
              <div className={`atuhBtns ${styles.navBtns}`}>
                <button className={`mainBtnStyle singIn__btn`}>Sign In</button>
                <button className={`mainBtnStyle singUp__btn`}>Sign Up</button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Container>
    </Navbar>
  );
}
