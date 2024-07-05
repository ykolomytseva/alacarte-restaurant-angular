"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnPoppinsaction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 1,
    },
    1350: {
      slidesPerView: 1,
    },
  },
};
export default function TestimonialSlider1() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="single-item-carousel owl-carousel owl-theme owl-dots-none"
      >
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-9"></i>
              </div>
              <p>
                “AlaCarte offers an unparalleled dining experience. The cuisine
                is exquisite, with flavors that dance on the palate. The
                ambiance is luxurious, making it the perfect place for a
                memorable evening.”
              </p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <h4>John Doe</h4>
              <span className="designation">Food Enthusiast</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-9"></i>
              </div>
              <p>
                “Dining at AlaCarte is an experience of sheer elegance. From the
                meticulously crafted dishes to the impeccable service, every
                detail is perfected to create a truly luxurious atmosphere.”
              </p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="far fa-star"></i>
                </li>
              </ul>
              <h4>Jane Smith</h4>
              <span className="designation">Culinary Critic</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-9"></i>
              </div>
              <p>
                “AlaCarte redefines luxury dining. The innovative menu, paired
                with a stunning setting, makes for an extraordinary culinary
                journey. Highly recommended for those seeking the finest dining
                experience.”
              </p>
              <ul className="rating clearfix">
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                </li>
              </ul>
              <h4>Michael Lee</h4>
              <span className="designation">Gourmet Traveler</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
