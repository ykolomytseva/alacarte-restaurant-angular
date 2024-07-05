"use client";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="left-column">
                <ul className="info clearfix">
                  <li>
                    <i className="icon-1"></i>
                    <Link href="mailto:">alacarte@example.com</Link>
                  </li>
                  <li>
                    <i className="icon-2"></i>Open Hours: Tue - Fri 09.00 -
                    22.30
                  </li>
                </ul>
                <ul className="social-links clearfix">
                  <li>
                    <Link href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="right-column">
                <div className="btn-box">
                  <Link href="/">Make Reservation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="assets/images/logo-4.jpg" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>

                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>

              <ul className="nav-right">
                <li
                  className="search-box-outer search-toggler"
                  onClick={handlePopup}
                >
                  <i className="icon-3"></i>
                </li>
                <li className="shop-cart">
                  <Link href="shop">
                    <i className="icon-4"></i>
                    <span>0</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="assets/images/logo-4.jpg" alt="" />
                  </Link>
                </figure>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <Menu />
                </div>
              </nav>
              <ul className="nav-right">
                <li
                  className="search-box-outer search-toggler"
                  onClick={handlePopup}
                >
                  <i className="icon-3"></i>
                </li>
                <li className="shop-cart">
                  <Link href="shop">
                    <i className="icon-4"></i>
                    <span>3</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
