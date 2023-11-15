"use client";
import Link from "next/link";
import CartSummary from "@/components/cart";

const OrderPage = () => {
  const userOrder = CartSummary();
  return (
    <div>
      <h1> Order Form Page/Cart Summary</h1>
      <div
        style={{
          border: "solid 1px black",
          position: "absolute",
          width: "400px",
          height: "600px",
        }}
      >
        {userOrder}
      </div>
    </div>
  );
};

export default OrderPage;
