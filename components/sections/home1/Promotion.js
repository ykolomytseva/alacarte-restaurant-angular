import React from "react";
import Link from "next/link";
export default function Promotion() {
  return (
    <>
      <section className="promotion-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_45">
            <span className="sub-title">Promotion</span>
            <h2>
              Check Our All Flavours <br />
              Summer Promo
            </h2>
          </div>

          <div className="promotion-block-one">
            <div className="inner-box">
              <div
                className="shape"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-2.png)",
                }}
              ></div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src="assets/images/resource/promotion-1.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div
                      className="content-shape"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-9.png)",
                      }}
                    ></div>
                    <h2>
                      Exclusive Soups at <span>AlaCarte</span>
                    </h2>
                    <h4>Get 10% Off</h4>
                    <p>
                      Indulge in our gourmet soups at the fine dining restaurant
                      AlaCarte. Each soup is crafted with precision, offering a
                      symphony of flavors that delight the palate. Experience
                      the elegance and taste of our specially curated soups this
                      summer.
                    </p>
                    <Link href="/" className="theme-btn-one">
                      Let’s Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="promotion-block-one">
            <div className="inner-box">
              <div
                className="shape"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-2.png)",
                }}
              ></div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <div
                      className="content-shape"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-9.png)",
                      }}
                    ></div>
                    <h2>Fresh Seasonal Ingredients</h2>
                    <h4>Get 15% Off</h4>
                    <p>
                      This summer, savor the freshness of seasonal ingredients
                      added to our dishes. Our chefs have crafted a menu that
                      celebrates the vibrant flavors of the season, ensuring
                      every bite is a testament to quality and freshness.
                    </p>
                    <Link href="/" className="theme-btn-one">
                      Let’s Order Now
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src="assets/images/resource/promotion-2.jpg"
                        alt=""
                      />
                    </figure>
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
