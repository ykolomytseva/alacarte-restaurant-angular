"use client";
import Link from "next/link";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
import StorySlider from "@/components/slider/StorySlider1";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import StorySlider1 from "@/components/slider/StorySlider1";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        {/* about-section */}
        <section className="about-style-two sec-pad">
          <div className="shape">
            <div
              className="shape-1"
              style={{
                backgroundImage: "url(assets/images/shape/shape-24.png)",
              }}
            ></div>
            <div
              className="shape-2"
              style={{
                backgroundImage: "url(assets/images/shape/shape-25.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="sec-title centred mb_40">
              <span className="sub-title">About Us</span>
              <h2>
                Exquisite Dining Experience
                <br />
                <span> Since 2017</span>
              </h2>
            </div>
            <div className="text-inner p_relative d_block mb_60">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                  <div className="text mr_30">
                    <p>
                      Welcome to AlaCarte, where culinary artistry meets
                      exceptional service. For over five decades, we have been
                      dedicated to offering a dining experience that
                      harmoniously blends traditional flavors with modern
                      techniques.
                    </p>
                    <p>
                      Our chefs are committed to sourcing the finest
                      ingredients, ensuring each dish is a masterpiece. Whether
                      it's a special occasion or a casual evening out, AlaCarte
                      promises a memorable experience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                  <div className="text ml_30">
                    <p>
                      Step into our elegantly designed dining room, where every
                      detail has been carefully considered to create an inviting
                      atmosphere. From our meticulously curated wine list to our
                      innovative menu, we strive to delight your senses at every
                      turn.
                    </p>
                    <p>
                      Join us at AlaCarte, where every meal is a celebration of
                      fine dining, impeccable service, and unforgettable
                      moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <figure className="signature centred">
              <img src="assets/images/icons/signature-05.png" alt="" />
            </figure>
          </div>
        </section>
        <section className="story-section bg-color-1">
          <div className="auto-container">
            <div className="sec-title light mb_50">
              <span className="sub-title">Our Story</span>
              <h2>
                Learn More About <br />
                <span>AlaCarte</span>
              </h2>
            </div>
            <div className="story-content">
              <StorySlider1 />
            </div>
          </div>
        </section>
        <section className="service-section alternat-2 sec-pad centred">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
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
                      <Link href="">Birthday Party</Link>
                    </h3>
                    <p>
                      Celebrate your special day with an exquisite dining
                      experience, tailored to make your birthday unforgettable.
                    </p>
                    <div className="btn-box">
                      <Link href="" className="theme-btn-two">
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
                      <Link href="">French Bakery</Link>
                    </h3>
                    <p>
                      Indulge in our selection of authentic French pastries,
                      baked fresh daily to perfection by our master bakers.
                    </p>
                    <div className="btn-box">
                      <Link href="" className="theme-btn-two">
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
                      <Link href="">Artisanal Coffee</Link>
                    </h3>
                    <p>
                      Experience the rich flavors and aromas of our premium
                      artisanal coffee, carefully sourced and expertly brewed.
                    </p>
                    <div className="btn-box">
                      <Link href="" className="theme-btn-two">
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
                      <Link href="">Home Delivery</Link>
                    </h3>
                    <p>
                      Enjoy our luxurious dishes in the comfort of your home
                      with our reliable and elegant home delivery service.
                    </p>
                    <div className="btn-box">
                      <Link href="i" className="theme-btn-two">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-style-three about-page sec-pad">
          <div className="shape">
            <div
              className="shape-1"
              style={{
                backgroundImage: "url(assets/images/shape/shape-2.png)",
              }}
            ></div>
            <div
              className="shape-2"
              style={{
                backgroundImage: "url(assets/images/shape/shape-38.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-xl-6 col-lg-12 col-md-12 image-column">
                <div
                  className="image-box"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <figure className="image-3">
                    <img
                      src="assets/images/resource/men-04.png"
                      alt=""
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        position: "relative",
                        zIndex: "1",
                      }}
                    />
                  </figure>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 testimonial-column">
                <div className="sec-title mb_95">
                  <span className="sub-title">Testimonials</span>
                  <h2>What Clients Say</h2>
                </div>
                <div className="content-box">
                  <TestimonialSlider1 />
                </div>
              </div>
            </div>
          </div>
        </section>

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
                          Chef Olivier's exquisite and decadent French pastries
                          bring a delightful touch of Parisian elegance to our
                          dessert menu. His creations are the epitome of refined
                          taste.
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
                          crafted with utmost precision and care. His expertise
                          bring a perfect blend of consistency and creativity to
                          our kitchen.
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
      </Layout>
    </>
  );
}
