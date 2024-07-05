"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
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
};

export default function Shop() {
  return (
    <>
      <section className="shop-style-two" style={{ marginTop: "500px" }}>
        {" "}
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-50.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title mb_50">
            <span className="sub-title">Our Shop</span>
            <h2>
              {" "}
              Discover Our Caviar & more
              <br />
            </h2>
          </div>
          <Swiper
            {...swiperOptions}
            className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one"
          >
            <SwiperSlide className="slide-item">
              <div className="shop-block-one">
                <div className="inner-box">
                  <div
                    className="image-box"
                    style={{ background: "transparent" }}
                  >
                    <figure className="image">
                      <img
                        src="assets/images/shop/shop-1.png"
                        alt=""
                        style={{ background: "transparent" }}
                      />
                    </figure>
                    <div className="btn-box">
                      <Link href="shop-details" className="theme-btn-one">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link href="shop-details">Osetra Caviar</Link>
                    </h5>
                    <p>Exquisite Osetra caviar, known for its rich flavor.</p>
                    <span className="price">€130</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div className="shop-block-one">
                <div className="inner-box">
                  <div
                    className="image-box"
                    style={{ background: "transparent" }}
                  >
                    <figure className="image">
                      <img
                        src="assets/images/shop/shop-2.png"
                        alt=""
                        style={{ background: "transparent" }}
                      />
                    </figure>
                    <div className="btn-box">
                      <Link href="shop-details" className="theme-btn-one">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link href="shop-details">Beluga Caviar</Link>
                    </h5>
                    <p>Luxurious Beluga caviar, prized for its large pearls.</p>
                    <span className="price">€90</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div className="shop-block-one">
                <div className="inner-box">
                  <div
                    className="image-box"
                    style={{ background: "transparent" }}
                  >
                    <figure className="image">
                      <img
                        src="assets/images/shop/shop-3.png"
                        alt=""
                        style={{ background: "transparent" }}
                      />
                    </figure>
                    <div className="btn-box">
                      <Link href="shop-details" className="theme-btn-one">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link href="shop-details">Rose Champagne</Link>
                    </h5>
                    <p>Sparkling rose champagne, perfect for celebrations.</p>
                    <span className="price">€140</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div className="shop-block-one">
                <div className="inner-box">
                  <div
                    className="image-box"
                    style={{ background: "transparent" }}
                  >
                    <figure className="image">
                      <img
                        src="assets/images/shop/shop-4.png"
                        alt=""
                        style={{ background: "transparent" }}
                      />
                    </figure>
                    <div className="btn-box">
                      <Link href="shop-details" className="theme-btn-one">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link href="shop-details">Trout Caviar</Link>
                    </h5>
                    <p>Smooth and rich trout caviar.</p>
                    <span className="price">€56</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div className="shop-block-one">
                <div className="inner-box">
                  <div
                    className="image-box"
                    style={{ background: "transparent" }}
                  >
                    <figure className="image">
                      <img
                        src="assets/images/shop/shop-5.png"
                        alt=""
                        style={{ background: "transparent" }}
                      />
                    </figure>
                    <div className="btn-box">
                      <Link href="shop-details" className="theme-btn-one">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link href="shop-details">Salmon Caviar</Link>
                    </h5>
                    <p>Delicate salmon caviar, a unique delicacy.</p>
                    <span className="price">€45</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div className="shop-block-one">
                <div className="inner-box">
                  <div
                    className="image-box"
                    style={{ background: "transparent" }}
                  >
                    <figure className="image">
                      <img
                        src="assets/images/shop/shop-6.png"
                        alt=""
                        style={{ background: "transparent" }}
                      />
                    </figure>
                    <div className="btn-box">
                      <Link href="shop-details" className="theme-btn-one">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link href="shop-details">White Champagne</Link>
                    </h5>
                    <p>Classic white champagne, elegant and refreshing.</p>
                    <span className="price">€170</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="owl-nav">
            <button type="button" role="presentation" className="owl-prev">
              <span className="fal fa-angle-left"></span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span className="fal fa-angle-right"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
