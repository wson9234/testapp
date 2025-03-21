const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const shop = process.env.SHOPIFY_SHOP;
    const token = process.env.SHOPIFY_ACCESS_TOKEN;

    const response = await axios.get(`https://${shop}/admin/api/2023-10/orders.json?limit=5`, {
      headers: {
        "X-Shopify-Access-Token": token,
      },
    });

    const orders = response.data.orders;
    res.render("index", { orders });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).send("Error fetching orders");
  }
});

module.exports = router;
