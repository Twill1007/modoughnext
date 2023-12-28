import useCart from "@/hooks/use-cart";

function CartItems({ handleRemove, showX }) {
  const { items } = useCart();
  return items.map((item) => (
    <div style={{ backgroundColor: "purple" }} key={item.productId}>
      {item.label} {item.title}
      {showX && (
        <span onClick={() => handleRemove(item.productId)}>{""} x</span>
      )}
    </div>
  ));
}

export default CartItems;
