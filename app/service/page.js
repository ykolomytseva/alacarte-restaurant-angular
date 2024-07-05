"use client";
import Layout from "@/components/layout/Layout";
import MenuSlider from "@/components/slider/MenuSlider";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
        <div>
          {/* service-style- */}
          <section className="service-section service-page alternat-2 centred">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(assets/images/shape/shape-2.png)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_50">
                <span className="sub-title">Services</span>
                <h2>
                  Quality & Passion with <br />
                  Our Services
                </h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-17"></i>
                      </div>
                      <h3>
                        <Link href="index-3">Birthday Party</Link>
                      </h3>
                      <p>
                        Celebrate your special day in style with our luxurious
                        birthday party packages. Enjoy exquisite dishes, elegant
                        ambiance, and impeccable service.
                      </p>

                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-18"></i>
                      </div>
                      <h3>
                        <Link href="index-3">French Bakery</Link>
                      </h3>
                      <p>
                        Indulge in our French Bakery offering a wide selection
                        of freshly baked pastries, breads, and desserts crafted
                        with the finest ingredients.
                      </p>
                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-19"></i>
                      </div>
                      <h3>
                        <Link href="index-3">Coffee Excellence</Link>
                      </h3>
                      <p>
                        Savor the rich flavors of our premium coffee selection,
                        made from the finest beans sourced globally and brewed
                        to perfection by our skilled baristas.
                      </p>
                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-20"></i>
                      </div>
                      <h3>
                        <Link href="index-3">Home Delivery</Link>
                      </h3>
                      <p>
                        Enjoy the luxury of our fine dining experience from the
                        comfort of your home with our prompt and reliable home
                        delivery service.
                      </p>
                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-21"></i>
                      </div>
                      <h3>
                        <Link href="index-3">Catering Services</Link>
                      </h3>
                      <p>
                        Elevate your events with our bespoke catering services,
                        featuring gourmet cuisine tailored to your preferences
                        and delivered with exceptional service.
                      </p>
                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-22"></i>
                      </div>
                      <h3>
                        <Link href="index-3">Wedding Cake</Link>
                      </h3>
                      <p>
                        Make your special day even more memorable with our
                        exquisite wedding cakes, designed to perfection to suit
                        your unique style and taste.
                      </p>
                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-23"></i>
                      </div>
                      <h3>
                        <Link href="index-3">Private Dining</Link>
                      </h3>
                      <p>
                        Enjoy an exclusive dining experience in our private
                        rooms, offering personalized service and a tailored menu
                        to make your occasion unforgettable.
                      </p>
                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-one wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-24"></i>
                      </div>
                      <h3>
                        <Link href="index-3">Chef's Special Menu</Link>
                      </h3>
                      <p>
                        Delight in our Chef's Special Menu, featuring seasonal
                        ingredients and innovative dishes that highlight the
                        culinary expertise of our team.
                      </p>
                      <div className="btn-box">
                        <Link href="index-3" className="theme-btn-two">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* service-styleend */}
          {/*menu style- */}
          <section className="menu-style-three">
            <div
              className="bg-layer parallax-bg"
              data-parallax='{"y": 100}'
              style={{
                backgroundImage: "url(assets/images/background/menu-bg.jpg)",
              }}
            ></div>
            <div className="pattern-layer">
              <div
                className="pattern-1"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-35.png)",
                }}
              ></div>
              <div
                className="pattern-2"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-36.png)",
                }}
              ></div>
              <div
                className="pattern-3"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-37.png)",
                }}
              ></div>
            </div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                  <div className="sec-title light mr_60">
                    <span className="sub-title">Exclusive Offerings</span>
                    <h2>Chef's Signature Creations</h2>
                    <p>
                      Indulge in our Chef's signature creations, meticulously
                      crafted to elevate your dining experience. Each dish is a
                      masterpiece, combining the finest ingredients with
                      innovative techniques to deliver an unforgettable culinary
                      journey.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 menu-column">
                  <div className="content-box">
                    <MenuSlider />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* menu-two end */}
          {/* team*/}
          <section className="team-section sec-pad">
            <div className="auto-container">
              <div className="sec-title centred mb_45">
                <span className="sub-title">Our Chefs</span>
                <h2>Meet Our Culinary Artists</h2>
              </div>
              <div
                className="inner-container wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img src="assets/images/team/team-1.png" alt="" />
                          </figure>
                          <div className="share-box p_absolute">
                            <Link href="/" className="share-icon">
                              <i className="icon-15"></i>
                            </Link>
                            <ul className="share-links p_absolute clearfix">
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-instagram"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="team-details">Mayle Cheng</Link>
                          </h3>
                          <span className="designation">Executive Chef</span>
                          <p>
                            Chef Mayle crafts each dish with precision, ensuring
                            an unparalleled dining experience. He brings
                            innovative techniques and passion for perfection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img src="assets/images/team/team-2.png" alt="" />
                          </figure>
                          <div className="share-box p_absolute">
                            <Link href="/" className="share-icon">
                              <i className="icon-15"></i>
                            </Link>
                            <ul className="share-links p_absolute clearfix">
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-instagram"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="team-details">Olivier Martin </Link>
                          </h3>
                          <span className="designation">Pastry Chef</span>
                          <p>
                            Chef Olivier's exquisite and decadent French
                            pastries bring a delightful touch of Parisian
                            elegance to our dessert menu. His creations are the
                            epitome of refined taste.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img src="assets/images/team/team-3.png" alt="" />
                          </figure>
                          <div className="share-box p_absolute">
                            <Link href="/" className="share-icon">
                              <i className="icon-15"></i>
                            </Link>
                            <ul className="share-links p_absolute clearfix">
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-instagram"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="team-details">Michael Hung</Link>
                          </h3>
                          <span className="designation">Sous Chef</span>
                          <p>
                            Chef Michael ensures every meal is a masterpiece,
                            crafted with utmost precision and care. His
                            expertise bring a perfect blend of consistency and
                            creativity to our kitchen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img src="assets/images/team/team-4.png" alt="" />
                          </figure>
                          <div className="share-box p_absolute">
                            <Link href="/" className="share-icon">
                              <i className="icon-15"></i>
                            </Link>
                            <ul className="share-links p_absolute clearfix">
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="index-3">
                                  <i className="fab fa-instagram"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h3>
                            <Link href="team-details">Emilia Schmidt</Link>
                          </h3>
                          <span className="designation">Sommelier</span>
                          <p>
                            Emilia, our German sommelier, pairs wines with
                            perfection, elevating every dining experience. Her
                            selections complement our dishes exquisitely.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team end */}
        </div>
      </Layout>
    </>
  );
}
