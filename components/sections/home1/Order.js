"use client"; // Ensure the component is treated as a Client Component

import React, { useState } from "react";

export default function Order() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    preferredFood: "",
    numberOfPersons: "",
    bookingDate: "",
    bookingTime: "",
    specialRequest: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to a server if needed
    setSubmitted(true);
  };

  return (
    <section className="order-section bg-color-2">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}
      ></div>
      <div className="shape">
        <div
          className="shape-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}
        ></div>
        <div
          className="shape-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}
        ></div>
        <div
          className="shape-3"
          style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}
        ></div>
        <div
          className="shape-4"
          style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">Table Booking</span>
          <h2>
            Pre-Order to Make a <br />
            Reservation
          </h2>
        </div>
        <div className="form-inner">
          {submitted ? (
            <div className="success-message">
              <h3>Reservation Successful!</h3>
              <p>
                Thank you , {formData.name}, for your reservation.
                <br />
                <strong>Email:</strong> {formData.email}
                <br />
                <strong>Phone:</strong> {formData.phone}
                <br />
                <strong>Occasion:</strong> {formData.occasion}
                <br />
                <strong>Preferred Food:</strong> {formData.preferredFood}
                <br />
                <strong>Number of Persons:</strong> {formData.numberOfPersons}
                <br />
                <strong>Booking Date:</strong> {formData.bookingDate}
                <br />
                <strong>Booking Time:</strong> {formData.bookingTime}
                <br />
                <strong>Special Request:</strong> {formData.specialRequest}
                <br />
                We are looking forward to serving you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="occasion"
                    placeholder="Occasion (e.g., Birthday, Anniversary)"
                    value={formData.occasion}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="preferredFood"
                    placeholder="Preferred Food"
                    value={formData.preferredFood}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="numberOfPersons"
                    placeholder="Number of Persons"
                    value={formData.numberOfPersons}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="date"
                    name="bookingDate"
                    placeholder="Booking Date"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="time"
                    name="bookingTime"
                    placeholder="Booking Time"
                    value={formData.bookingTime}
                    onChange={handleChange}
                    step="1"
                    required
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                    name="specialRequest"
                    placeholder="Special Request"
                    value={formData.specialRequest}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                  <button type="submit" className="theme-btn-one">
                    Make a Reservation
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
