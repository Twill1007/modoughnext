"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import getStripe from "@/components/Utility/getStripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const stripe = await getStripe();
      const response = await fetch("api/checkout-sessions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ amount: 10.0 }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const checkoutSession = await response.json();

      if (checkoutSession && checkoutSession.statusCode === 500) {
        console.error(checkoutSession.message);
        return;
      }
      await stripe.redirectToCheckout({
        sessionId: checkoutSession.id,
      });
    } catch (error) {
      console.error("Error this is it:", error.message);
    }
  };

  return (
    <form action="/api/checkout_sessions" method="POST" onSubmit={handleSubmit}>
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}
