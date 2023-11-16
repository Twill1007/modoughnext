import { DISCOUNT_TABLE } from "@/constants/discount-table";

export function calculatePrices() {
  let increment = 10;
  let cookieDiscount = DISCOUNT_TABLE;
  const keys = Object.keys(cookieDiscount);
  const totalPrice = keys.map((x) => +x * increment);
  const discount = Object.values(cookieDiscount).map((value) => {
    return value;
  });

  const discountedPrices = totalPrice.map(
    (total, index) => total * discount[index]
  );

  return { keys, discountedPrices };
}
