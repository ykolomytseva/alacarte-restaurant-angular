import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 150,
  autoplay: {
    delay: 2500,
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

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 150,
    },
  },
};

export default function StorySlider1() {
  return (
    <Swiper
      {...swiperOptions}
      className="story-carousel owl-carousel owl-theme owl-dots-none nav-style-one"
    >
      <SwiperSlide className="slide-item">
        <div className="story-block-one">
          <div className="inner-box">
            <span className="year">2017</span>
            <figure className="image-box">
              <img
                src="assets/images/resource/story-1.jpg"
                alt="The Beginnings"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </figure>
            <div className="lower-content">
              <h4>
                <Link href="index-2">The Beginnings</Link>
              </h4>
              <p>
                AlaCarte opened its doors with a mission to provide an
                extraordinary dining experience, blending traditional and modern
                culinary techniques.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide-item">
        <div className="story-block-one">
          <div className="inner-box">
            <span className="year">2018</span>
            <figure className="image-box">
              <img
                src="assets/images/resource/story-2.jpg"
                alt="Introducing Signature Dish"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </figure>
            <div className="lower-content">
              <h4>
                <Link href="index-2">Introducing Signature Dish</Link>
              </h4>
              <p>
                We launched our iconic signature dish, which quickly became a
                favorite among our patrons and set the standard for our culinary
                excellence.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide-item">
        <div className="story-block-one">
          <div className="inner-box">
            <span className="year">2021</span>
            <figure className="image-box">
              <img
                src="assets/images/resource/story-3.jpg"
                alt="Opening New Branch"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </figure>
            <div className="lower-content">
              <h4>
                <Link href="index-2">Opening New Branch</Link>
              </h4>
              <p>
                We expanded our presence with a new branch, bringing our
                signature dishes and exceptional service to more food
                enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide-item">
        <div className="story-block-one">
          <div className="inner-box">
            <span className="year">2023</span>
            <figure className="image-box">
              <img
                src="assets/images/resource/story-4.jpg"
                alt="Updating Menu"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </figure>
            <div className="lower-content">
              <h4>
                <Link href="index-2">Updating Menu</Link>
              </h4>
              <p>
                We revamped our menu to include innovative dishes and seasonal
                ingredients, continuing our tradition of culinary excellence.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
