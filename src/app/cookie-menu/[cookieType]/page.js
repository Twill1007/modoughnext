"use client";
import { Fragment, useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import useCookieDough from "@/hooks/use-cookieDough";
import ItemSelector from "@/components/itemSelector";
import CartItems from "@/components/Utility/CartItems";
import PricingMenu from "@/components/pricingMenu";
import CookieName from "@/components/cookieName";
import "../[cookieType]/page.css";

function CookieOrder({ params }) {
  const { getCookieDough } = useCookieDough();
  const [cookieData, setCookieData] = useState([]);
  const [showEditDeleteX, setShowDeleteX] = useState(false);
  const { items, addItem, removeItemByCookieId, removeItemByProductId } =
    useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookieDoughData = await getCookieDough();
        setCookieData(cookieDoughData);
      } catch (error) {
        console.log("Did not receive data", error);
      }
    };
    fetchData();
  }, []);

  const selectedCookie = cookieData.find(
    (cookie) => cookie.id === params.cookieType
  );

  const handleRemoveItem = (productId) => {
    removeItemByProductId(productId);
  };

  const handleShowDeleteX = () => {
    setShowDeleteX(true);
  };

  const handleHideDeleteX = () => {
    setShowDeleteX(false);
  };

  return (
    <Fragment>
      <div className="flex-container">
        <CookieName />
        <div className="cookie-description">
          Experience the ultimate convenience and freshness with our frozen
          chocolate chip cookie dough balls. Immerse yourself in the aroma of
          gourmet baking without the effort. Crafted from the finest
          ingredients, each perfectly portioned ball guarantees a batch of warm,
          gooey cookies in minutes.
        </div>
        <div
          style={{
            backgroundColor: "red",
            fontSize: "xx-large",
          }}
        >
          <PricingMenu cookieType={selectedCookie} />
          Testing
        </div>
        <div style={{ backgroundColor: "blue" }}>
          <ItemSelector cookieType={selectedCookie} />
        </div>
        <div style={{ backgroundColor: "purple" }}>
          Cart Items
          <CartItems
            showX={showEditDeleteX}
            handleRemove={handleRemoveItem}
          ></CartItems>
        </div>
        <div>
          {items.length > 0 && !showEditDeleteX && (
            <button className="buttons" onClick={handleShowDeleteX}>
              Edit Cart Items
            </button>
          )}
        </div>
        {items.length > 0 && showEditDeleteX && (
          <button className="buttons" onClick={handleHideDeleteX}>
            Done Editing
          </button>
        )}
        {items.length === 0 && showEditDeleteX && setShowDeleteX(false)}
      </div>
    </Fragment>
  );
}

export default CookieOrder;
