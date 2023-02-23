const mongoose = require("mongoose");
const port = 3001;
const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// ROUTES
const CategoryRoutes = require("./routes/CategoryRoutes.js");
const ProductsRoutes = require("./routes/ProductsRoutes.js");
const LogoRoutes = require("./routes/LogoRoutes.js");
// ROUTES

const app = express();

app.use(cors());
app.use(express.json());
app.use("/category", CategoryRoutes);
app.use("/products", ProductsRoutes);
app.use("/logo", LogoRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connect Database....!"))
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
