import Link from "next/link";

const OrderPage = () => {
  return (
    <div>
      Order Form Page/Cart Summary
      <Link href="/cookie-dough">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default OrderPage;
