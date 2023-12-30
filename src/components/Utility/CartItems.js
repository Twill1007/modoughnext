import useCart from "@/hooks/use-cart";
import "../itemSelector.css";

function CartItems({ handleRemove, showX }) {
  const { items } = useCart();
  return items.map((item) => (
    <div key={item.productId}>
      {item.label} {item.title}
      {showX && (
        <span onClick={() => handleRemove(item.productId)}>{""} x</span>
      )}
    </div>
  ));
}

export default CartItems;
