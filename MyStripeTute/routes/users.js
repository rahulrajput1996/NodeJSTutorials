var express = require("express");
var router = express.Router();
require("dotenv").config();
YOUR_DOMAIN = "http://localhost:3001";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/payment", async (req, res) => {
  try {
    // let customer = await stripe.customers.create({
    //   email: "rahul@gmail.com",
    // });
    // res.send(customer);
    // let invoiceItem = await stripe.invoiceItems.create({
    //   customer: customer.id, // set the customer id
    //   amount: 2500, // 25
    //   currency: "usd",
    //   description: "One-time setup fee",
    // });
    // res.send(invoiceItem);

    // let invoice = stripe.invoices.create({
    //   collection_method: "send_invoice",
    //   customer: invoiceItem.customer,
    // });
    // res.send(invoice);
    let arr = [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "T-SHIRT",
          },
          unit_amount: 2000,
        },
        quantity: 2,
      },
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "JEANS",
          },
          unit_amount: 500,
        },
        quantity: 3,
      },
    ];
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: { allowed_countries: ["IN", "BA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "inr" },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],
      line_items: arr,
      phone_number_collection: {
        enabled: true,
      },
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    res.redirect(303, session.url);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
