"use client";
import React from "react";
export default function About() {
  return (
    <section className="about-style-two sec-pad">
      <div className="shape">
        <div
          className="shape-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}
        ></div>
        <div
          className="shape-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
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
                  Welcome to AlaCarte, where culinary artistry meets exceptional
                  service. For over five decades, we have been dedicated to
                  offering a dining experience that harmoniously blends
                  traditional flavors with modern techniques.
                </p>
                <p>
                  Our chefs are committed to sourcing the finest ingredients,
                  ensuring each dish is a masterpiece. Whether it's a special
                  occasion or a casual evening out, AlaCarte promises a
                  memorable experience.
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
                  Join us at AlaCarte, where every meal is a celebration of fine
                  dining, impeccable service, and unforgettable moments.
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
  );
}
