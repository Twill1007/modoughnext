"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";
import "../../components/orderForm/orderForm.css";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function OrderForm() {
  const { items } = useCart();
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    emailAddress: "",
  });
  console.log(
    "This is an array mixed with strings and numbers, correct?",
    items
  );
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("cart Items", items);
  // console.log("cart items", items);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData, items };
    const res = await fetch("api/check-out", {
      method: "POST",
      body: JSON.stringify({ formData: data }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Form Data Failed");
    }
    console.log("State of formData", formData);
    router.refresh();
    router.push("/cookie-test-payment");
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
              name="street"
              value={formData.street}
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
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            ></input>
          </label>
          <button
            className="buttons"
            type="submit"
            value="Continue With Payment"
            style={{ marginTop: "0px", zIndex: "0" }}
          >
            Continue with Payment
          </button>
        </form>
      )}
    </>
  );
}

export default OrderForm;
