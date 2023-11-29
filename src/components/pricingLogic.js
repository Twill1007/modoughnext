import { DISCOUNT_TABLE } from "@/constants/discount-table";
import { increment } from "@/constants/discount-table";

export function calculatePrices() {
  let incrementCost = increment;
  let cookieDiscount = DISCOUNT_TABLE;
  const keys = Object.keys(cookieDiscount);
  const totalPrice = keys.map((x) => +x * incrementCost);
  const discount = Object.values(cookieDiscount).map((value) => {
    return value;
  });

  const discountedPrices = totalPrice.map((total, index) =>
    Math.round(total * discount[index])
  );
  console.log("here is value", discountedPrices);
  return { keys, discountedPrices, totalPrice };
}
