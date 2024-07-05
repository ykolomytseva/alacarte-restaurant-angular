"use client";
import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="main-footer bg-color-1">
        <div className="footer-top pt_85 pb_100">
          <div className="auto-container">
            <div className="row align-items-center clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget schedule-widget text-right">
                  <div className="widget-title">
                    <h3>Opening Times</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list clearfix">
                      <li>Tuesday – Thursday: 09:30 – 22:30</li>
                      <li>Friday – Sunday: 10:00 – 00:30</li>
                      <li>
                        Monday: <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget text-center">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-19.png)",
                      }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-20.png)",
                      }}
                    ></div>
                  </div>
                  <div className="widget-content">
                    <figure className="footer-logo">
                      <Link href="/">
                        <img src="assets/images/footer-logo-5.png" alt="" />
                      </Link>
                    </figure>
                    <div className="text">
                      <p>
                        Experience the epitome of culinary excellence at
                        AlaCarte. Our exquisite dishes, crafted with the finest
                        ingredients, and our impeccable service ensure an
                        unforgettable dining experience.
                      </p>
                    </div>
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
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget text-left">
                  <div className="widget-title">
                    <h3>Contact Info</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li>
                        <span>Address: </span>Germany
                      </li>
                      <li>
                        <span>Email: </span>
                        <Link href="mailto:y.kolomytseva@gmail.com">
                          y.kolomytseva@gmail.com
                        </Link>
                      </li>
                      <li>
                        <span>Call: </span>
                        <Link href="tel:000000000">+000000000</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                Copyright 2024 by <Link href="/">Yana Kolomytseva.</Link> All
                Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
