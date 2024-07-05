"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnPoppinsaction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};

export default function News() {
  return (
    <>
      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_45">
            <span className="sub-title">AlaCarte Insights</span>
            <h2>
              Discover the Latest <br />
              Culinary Stories
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="blog-details">
                        <img src="assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="date">
                      14 <span>MAY</span>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link href="blog-details">
                        Crafting the Perfect Espresso
                      </Link>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <i className="icon-10"></i>
                        <Link href="blog-details">
                          David, Barista at AlaCarte
                        </Link>
                      </li>
                      <li>
                        <i className="icon-11"></i>
                        <Link href="blog-details">0 Comment</Link>
                      </li>
                    </ul>
                    <p>
                      Dive into the art and science behind our barista's mastery
                      in creating the perfect espresso shot.
                    </p>
                    <div className="btn-box">
                      <Link href="blog-details" className="theme-btn-two">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="blog-details">
                        <img src="assets/images/news/news-02.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="date">
                      19 <span>June</span>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link href="blog-details">
                        Exquisite Truffle Dishes You Must Try
                      </Link>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <i className="icon-10"></i>
                        <Link href="blog-details">
                          Sabrina, Sous-Chef at AlaCarte
                        </Link>
                      </li>
                      <li>
                        <i className="icon-11"></i>
                        <Link href="blog-details">4 Comment</Link>
                      </li>
                    </ul>
                    <p>
                      Explore our sous-chef's selection of truffle-infused
                      delicacies that promise an unforgettable dining
                      experience.
                    </p>
                    <div className="btn-box">
                      <Link href="blog-details" className="theme-btn-two">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="blog-details">
                        <img src="assets/images/news/news-03.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="date">
                      29 <span>JUNE</span>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link href="blog-details">
                        The Art of Pairing Wine with Gourmet Cuisine
                      </Link>
                    </h3>
                    <ul className="post-info clearfix">
                      <li>
                        <i className="icon-10"></i>
                        <Link href="blog-details">
                          Sasha, Sommelier at AlaCarte
                        </Link>
                      </li>
                      <li>
                        <i className="icon-11"></i>
                        <Link href="blog-details">1 Comment</Link>
                      </li>
                    </ul>
                    <p>
                      Join us as we delve into the sophisticated world of wine
                      pairings and discover how to elevate your dining
                      experience.
                    </p>
                    <div className="btn-box">
                      <Link href="blog-details" className="theme-btn-two">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
