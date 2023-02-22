const express = require("express");
const router = express.Router();
const ProductsRoutes = require("../controllers/ProductsController");

router.get("/", ProductsRoutes.getAllProducts);
router.post("/", ProductsRoutes.addProducts);
router.get("/id", ProductsRoutes.getById);
router.put("/id", ProductsRoutes.updateProducts);
router.delete("/id", ProductsRoutes.deleteProducts);

module.exports = router;