import React, { useState, useEffect } from "react";
// import { Form } from "react-router-dom";
import "../../components/orderForm/orderForm.css";

function OrderForm() {
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        ></input>
      </label>
      {/* <label>
        Address
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        ></input>
      </label> */}
    </form>
  );
}

export default OrderForm;
