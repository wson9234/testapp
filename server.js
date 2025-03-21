const express = require("express");
const app = express();
const shopifyRoutes = require("./routes/shopify");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", shopifyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
