import React, { useState } from "react";
import "../../components/orderForm/orderForm.css";

function OrderForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="order-form-container">
      <h1>Order Form</h1>
    </div>
  );
}

export default OrderForm;
