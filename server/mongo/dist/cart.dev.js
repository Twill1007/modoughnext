// import clientPromise from ".";
// export default async function sendCartDataToDatabase(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { items } = req.body;
//       if (!items || !Array.isArray(items)) {
//         return res.status(400).json({ error: "Invalid cart data" });
//       }
//       const client = await clientPromise;
//       const db = client.db();
//       const cartCollection = db.collection("cart");
//       await cartCollection.insertMany(items);
//       return res
//         .status(200)
//         .json({ message: "Cart data saved to teh database successfully" });
//     } catch (error) {
//       console.log("Error saving cart data to teh database:", error);
//       return res.status(500).json({ error: "Internal server error" });
//     }
//   } else {
//     return res.status(405).json({ error: "Method not allowed" });
//   }
// }
"use strict";