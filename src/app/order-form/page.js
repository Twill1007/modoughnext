import Link from "next/link";

const OrderPage = () => {
  return (
    <div>
      Order Form Page/Cart Summary
      <Link href="/cookie-menu">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default OrderPage;
