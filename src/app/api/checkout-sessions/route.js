const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        // const params = {
        submit_type: "donate",
        payment_method_types: ["cards"],
        line_items: [
          {
            name: "Custom Amount Donations",
            amount: formatAmountForStripe(amount, CURRENCY),
            currency: CURRENCY,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      });

      NextResponse.redirect(303, session.url);
      // .status(200)
      // .json({ url:  });
      //below is redirect url.
      // "https://buy.stripe.com/test_3cs4gl47R6NlbvO3cd"
    } catch (err) {
      console.error("Error:", err.message);
      NextResponse.status(err.statusCode || 500).json(err.message);
    }
  } else {
    NextResponse.setHeader("Allow", "POST");
    NextResponse.status(405).end("Method Not Allowed");
  }
}
// await stripe.checkout.sessions.create(params);
