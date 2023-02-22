const express = require("express");
const router = express.Router();
const CategoryRoutes = require("../controllers/Category.js");

router.get("/", CategoryRoutes.getAllCategories);
router.post("/", CategoryRoutes.addCategory);
router.get("/id", CategoryRoutes.getById);
router.put("/id", CategoryRoutes.updateCategory);
router.delete("/id", CategoryRoutes.deleteCategory);

module.exports = router;
