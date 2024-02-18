import useCart from "@/hooks/use-cart";
import "../itemSelector.css";
import "../Utility/cartItem.css";

function CartItems({ handleRemove, showX }) {
  const { items } = useCart();
  const itemPrices = items.map((price) => price.price);
  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);
  return (
    <>
      {items.map((item) => (
        <div key={item.productId} className="cartItemContainer">
          <div>{item.label}</div>

          <div style={{ marginLeft: "5px" }}>{item.title} </div>
          {showX && (
            <div
              className="delete-x"
              onClick={() => handleRemove(item.productId)}
            >
              x
            </div>
          )}
          <div>${item.price}</div>
        </div>
      ))}
      <div>Total: ${totalPrice}</div>
    </>
  );
}

export default CartItems;
