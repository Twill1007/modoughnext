"use client";
import React, { useState, useEffect } from "react";
// import { Form } from "react-router-dom";
import "../../components/orderForm/orderForm.css";

function OrderForm() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };
  useEffect(() => {
    setDomLoaded(true);
  });

  return (
    <>
      {domLoaded && (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            ></input>
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Street Address:
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Zip Code:
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </label>
          <button>Continue with Payment</button>
        </form>
      )}
    </>
  );
}

export default OrderForm;
